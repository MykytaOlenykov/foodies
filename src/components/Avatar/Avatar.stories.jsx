import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {[20, 40, 60, 80, 100].map(size => (
      <div style={{ display: 'flex', gap: '1rem' }} key={size}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" name="Harry Potter" size={size} />
        <Avatar src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_postessssssr.jpg" name="Harry Potter" size={size} />
        <Avatar src={undefined} name="Hermione Granger" size={size} />
        <Avatar src='/avatars/10_df5db8a5-f2eb-4be6-a3c0-92a296e1f65c.jpg' name="Artur Mykhailiuk" size={size} />
      </div>
    ))}
  </div>
);
