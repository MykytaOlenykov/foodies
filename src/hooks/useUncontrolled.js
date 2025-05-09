import { useCallback, useEffect, useRef, useState } from 'react';

function isSetStateFunction(setState) {
  return typeof setState === 'function';
}

/**
 * @param {*} value - Controlled value (optional)
 * @param {*} defaultValue - Default value or a function returning default
 * @param {Function} [onChange] - Callback when value changes
 * @returns {[*, Function]} - Current value and updater function
 */
function useUncontrolled(value, defaultValue, onChange) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const onChangeRef = useRef(onChange);
  const finalValueRef = useRef();

  const isControlled = value !== undefined;
  const finalValue = isControlled ? value : uncontrolledValue;

  finalValueRef.current = finalValue;

  const updateValue = useCallback(
    (newValue, ...args) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      const onChangeCallback = onChangeRef.current;
      const currentFinalValue = finalValueRef.current;

      if (onChangeCallback) {
        const resolvedValue = isSetStateFunction(newValue)
          ? newValue(currentFinalValue)
          : newValue;
        onChangeCallback(resolvedValue, ...args);
      }
    },
    [isControlled],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  return [finalValue, updateValue];
}

export { useUncontrolled };
