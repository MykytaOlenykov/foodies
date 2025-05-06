import { useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { ProfileTabs } from "../../components/ProfileTabs/ProfileTabs";
import { Typography } from "../../components/Typography/Typography";
import styles from "./UserPage.module.css";
import { useEffect, useState } from "react";
import {
  followUserById,
  getUserDataById,
  updateUserAvatar,
} from "../../services/api";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const loggedInUserId = 26; // TODO: Replace with real current user id
  const isMyProfile = user?.id === loggedInUserId;

  const fetchUserData = async () => {
    try {
      const data = await getUserDataById(id);
      setUser(data.user);
    } catch (err) {
      //TODO: add notification
      console.error("Failed to load user:", err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const handleAvatarChange = async (file) => {
    try {
      const data = await updateUserAvatar(file);
      setUser((prev) => ({
        ...prev,
        avatarURL: data.avatarURL,
      }));
    } catch (error) {
      //TODO: add notification
      console.error("Failed to update user avatar:", error);
    }
  };

  const handleFollow = async () => {
    try {
      const data = await followUserById(id);
      //TODO: add notification
      console.log(data.message);

      // Refresh user data after follow
      await fetchUserData();
    } catch (error) {
      //TODO: add notification
      console.error("Failed to follow user:", error);
    }
  };

  //TODO: add loader

  if (!user)
    return <section className={styles.userPage}>User not found</section>;

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
            onAvatarChange={handleAvatarChange}
          />
          {isMyProfile ? (
            <Button variant="dark" size="medium">
              LOG OUT
            </Button>
          ) : (
            <Button variant="dark" size="medium" onClick={handleFollow}>
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
