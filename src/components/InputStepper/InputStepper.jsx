import * as styles from './InputStepper.module.css';
import { ButtonIcon } from "../ButtonIcon/ButtonIcon.jsx";
import MinusIcon from "../../assets/icons/minus.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { Typography } from "../Typography/Typography.jsx";

/**
 * @param {object} props
 * @param {number} props.value - Current value
 * @param {function} props.onChange - Change handler (e) => void
 * @param {number} [props.step] - Step value (default: 5)
 */
const InputStepper = ({value, onChange, step = 5}) => {
  const handleDecrease = () => {
    if (value - step >= 0) {
      onChange(value - step);
    }
  }

  const handleIncrease = () => {
    if (value + step <= 120) {
      onChange(value + step);
    }
  }

  return (
    <div className={styles.InputStepper}>
      <ButtonIcon
        icon={<MinusIcon />}
        size="large"
        variant="light"
        onClick={handleDecrease}
      />
      <Typography variant="body">
        {value}
        {' '}
        min
      </Typography>
      <ButtonIcon
        icon={<PlusIcon />}
        size="large"
        variant="light"
        onClick={handleIncrease}
      />
    </div>
  )
}

export { InputStepper };
