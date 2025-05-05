import PathInfo from './PathInfo';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/PathInfo',
  component: PathInfo,
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => <BrowserRouter><Story /></BrowserRouter>,
  ],
};

export const Default = () => (
  <div style={{ padding: '20px' }}>
    <PathInfo current="Salmon Avocado Salad" />
  </div>
);
