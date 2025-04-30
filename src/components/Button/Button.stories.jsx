import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Button variant="dark" size="medium">dark button</Button>
    <Button variant="light" size="medium">light button</Button>
    <Button variant="transparent" size="medium">transparent button</Button>
  </div>
);