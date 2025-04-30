import React from 'react';
import { ButtonIcon } from './ButtonIcon';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
};

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ButtonIcon variant="dark" size="medium" icon={<span>&#9733;</span>} />
  </div>
);
