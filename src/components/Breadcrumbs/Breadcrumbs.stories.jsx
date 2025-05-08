import { action } from '@storybook/addon-actions';
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsDivider,
} from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { BreadcrumbsItem, BreadcrumbsDivider },
};

export const Default = () => (
  <Breadcrumbs>
    <BreadcrumbsItem onClick={action('Home clicked')}>
      Home
    </BreadcrumbsItem>
    <BreadcrumbsDivider />
    <BreadcrumbsItem onClick={action('Library clicked')}>
      Library
    </BreadcrumbsItem>
    <BreadcrumbsDivider />
    <BreadcrumbsItem isActive>
      Data
    </BreadcrumbsItem>
  </Breadcrumbs>
);

export const ClickableSteps = () => (
  <Breadcrumbs>
    <BreadcrumbsItem onClick={action('Step 1 clicked')}>
      Step 1
    </BreadcrumbsItem>
    <BreadcrumbsDivider />
    <BreadcrumbsItem onClick={action('Step 2 clicked')}>
      Step 2
    </BreadcrumbsItem>
    <BreadcrumbsDivider />
    <BreadcrumbsItem onClick={action('Step 3 clicked')}>
      Step 3
    </BreadcrumbsItem>
  </Breadcrumbs>
);

export const SingleItem = () => (
  <Breadcrumbs>
    <BreadcrumbsItem isActive>
      Current Page
    </BreadcrumbsItem>
  </Breadcrumbs>
);

export const WithCustomClass = () => (
  <Breadcrumbs className="my-custom-breadcrumbs">
    <BreadcrumbsItem onClick={action('Dashboard clicked')}>
      Dashboard
    </BreadcrumbsItem>
    <BreadcrumbsDivider />
    <BreadcrumbsItem isActive>
      Settings
    </BreadcrumbsItem>
  </Breadcrumbs>
);
