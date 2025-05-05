import React from 'react';
import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = () => {
  const [value, setValue] = React.useState('');
  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Write something..."
      maxLength={200}
    />
  );
};
