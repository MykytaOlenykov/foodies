import { useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { ProfileTabs } from "../../components/ProfileTabs/ProfileTabs";
import { Typography } from "../../components/Typography/Typography";
import styles from "./UserPage.module.css";
import { useEffect, useState } from "react";
import { getUserDataById } from "../../services/api";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const loggedInUserId = 1; // Replace with real current user id
  const isMyProfile = user?.id === loggedInUserId;

  useEffect(() => {
    getUserDataById(id)
      .then((data) => setUser(data.user))
      .catch((err) => {
        console.error(err);
        setUser({
          id: 1,
          name: "Jane",
          email: "janedou@example.com",
          avatarURL:
            "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg",
          recipesCount: 10,
          followersCount: 15,
          favoriteRecipesCount: 10,
          followingCount: 11,
        });
      });
  }, [id]);

  if (!user) return <p>User not found</p>;

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
            user={user}
            isMyProfile={isMyProfile}
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
