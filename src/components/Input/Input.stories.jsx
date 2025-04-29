import React, { useState } from 'react';
import Input from './Input';
import { Eye, EyeOff } from 'lucide-react';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Email',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Email',
  required: true,
  error: 'Invalid email address',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Email',
  disabled: true,
};

export const WithIcon = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <Input
      placeholder="Password"
      type={visible ? 'text' : 'password'}
      required
      value={value}
      onChange={(e) => setValue(e.target.value)}
      iconRight={visible ? <EyeOff size={18} /> : <Eye size={18} />}
      onIconClick={() => setVisible((v) => !v)}
    />
  );
};
