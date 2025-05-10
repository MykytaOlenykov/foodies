import { MemoryRouter } from 'react-router-dom';
import { UserCard } from './UserCard';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  // eslint-disable-next-line no-unused-vars
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
};

const userOne = {
  id: 1,
  name: 'MYKHAILO',
  avatarURL: 'https://i.pravatar.cc/56?img=3',
  recipes: [
    { id: 1, thumb: 'https://placehold.co/80x80?text=Cake' },
    { id: 2, thumb: 'https://placehold.co/80x80?text=Soup' },
    { id: 3, thumb: 'https://placehold.co/80x80?text=Lasagna' },
    { id: 4, thumb: 'https://placehold.co/80x80?text=Salad' },
  ],
  recipesCount: 40,
};

const userTwo = {
  id: 2,
  name: 'OKSANA SHEVCHENKO',
  avatarURL: 'https://i.pravatar.cc/56?img=4',
  recipes: [
    { id: 1, thumb: 'https://placehold.co/80x80?text=Borscht' },
    { id: 2, thumb: 'https://placehold.co/80x80?text=Varenyky' },
    { id: 3, thumb: 'https://placehold.co/80x80?text=Kutia' },
  ],
  recipesCount: 300,
};

const Template = (args) => (
  <div>
    <UserCard {...args} user={userOne} isFollowing={false} onFollow={() => console.log('Follow MYKHAILO')} onUnfollow={() => console.log('Unfollow MYKHAILO')} />
    <UserCard {...args} user={userTwo} isFollowing={true} onFollow={() => console.log('Follow OKSANA')} onUnfollow={() => console.log('Unfollow OKSANA')} />
  </div>
);

export const MultipleUsers = Template.bind({});
MultipleUsers.args = {
  tabType: 'followers',
  userPageBasePath: '/users',
  loading: false,
};
