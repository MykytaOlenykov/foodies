import { Button } from "../../components/Button/Button";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { ProfileTabs } from "../../components/ProfileTabs/ProfileTabs";
import { Typography } from "../../components/Typography/Typography";
import styles from "./UserPage.module.css";

const UserPage = () => {
  //tmp test data
  const profileUser = {
    id: 123,
    name: "Jane",
    email: "janedou@example.com",
    avatarURL:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg",
    stats: {
      recipes: 12,
      favorites: 5,
      followers: 300,
      following: 180,
    },
  };

  const isMyProfile = profileUser.id === 123;

  return (
    <section className={styles.userPage}>
      <Typography variant="h2">Profile</Typography>
      <p className={styles.text}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </p>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <ProfileCard
            avatarURL={profileUser.avatarURL}
            name={profileUser.name}
            email={profileUser.email}
            isMyProfile={isMyProfile}
            stats={profileUser.stats}
            onAvatarChange={() => alert("Change avatar clicked")}
          />
          {isMyProfile ? (
            <Button variant="dark" size="medium">
              LOG OUT
            </Button>
          ) : (
            <Button variant="dark" size="medium">
              FOLLOW
            </Button>
          )}
        </div>

        <ProfileTabs isMyProfile={isMyProfile} />
      </div>
    </section>
  );
};

export default UserPage;
