import React, { useState } from 'react';
import { InputStepper } from './InputStepper';

export default {
  title: 'Components/InputStepper',
  component: InputStepper,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <InputStepper
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 30,
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  value: 30,
  step: 10,
};

export const MinValueZero = Template.bind({});
MinValueZero.args = {
  value: 0,
};

export const MaxValueReached = Template.bind({});
MaxValueReached.args = {
  value: 120,
};
