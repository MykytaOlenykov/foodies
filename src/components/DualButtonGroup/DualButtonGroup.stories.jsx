import { DualButtonGroup } from './DualButtonGroup';

export default {
  title: 'Components/DualButtonGroup',
  component: DualButtonGroup,
};

export const Default = () => (
  <DualButtonGroup
    leftLabel="Cancel"
    rightLabel="Save"
    onLeftClick={() => console.log('Cancel clicked')}
    onRightClick={() => console.log('Save clicked')}
  />
);
