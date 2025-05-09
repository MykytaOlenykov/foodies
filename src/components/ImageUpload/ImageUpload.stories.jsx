import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ImageUpload } from './ImageUpload';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
};

const Template = (args) => {
  const [file, setFile] = useState(args.defaultValue || null);

  const handleUpload = (f) => {
    action('onUpload')(f);
    setFile(f);
  };

  return (
    <ImageUpload
      {...args}
      value={file}
      onUpload={handleUpload}
      name="photo"
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  // no initial file
};

export const WithPreview = Template.bind({});
WithPreview.args = {
  defaultValue: new File(
    [new Blob([''], { type: 'image/png' })],
    'placeholder.png',
    { type: 'image/png' }
  ),
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  error: 'File size must be under 5MB',
};
