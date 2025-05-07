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
      name="password"
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

export const Variants = () => {
  const [value, setValue] = React.useState('');
  const [underlineValue, setUnderlineValue] = React.useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input
        name="default"
        placeholder="Default input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Input
        placeholder="Underline input"
        value={underlineValue}
        onChange={(e) => setUnderlineValue(e.target.value)}
        variant="underline"
      />
    </div>
  );
};

export const WithCounter = () => {
  const [value, setValue] = React.useState('');

  return (
    <Input
      name="recipe"
      placeholder="Enter recipe"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="underline"
      multiline
      maxLength={200}
    />
  );
};
