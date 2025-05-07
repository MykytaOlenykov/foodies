import { useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { Typography } from "../../components/Typography/Typography";
import styles from "./UserPage.module.css";
import { useEffect, useState } from "react";
import {
  followUserById,
  getUserDataById,
  unfollowUserById,
  updateUserAvatar,
} from "../../services/users";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { openLogOut } from "../../store/auth";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const isMyProfile = user?.id === currentUser?.id;

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

  const handleUnFollow = async () => {
    try {
      const data = await unfollowUserById(id);
      //TODO: add notification
      console.log(data.message);

      // Refresh user data after follow
      await fetchUserData();
    } catch (error) {
      //TODO: add notification
      console.error("Failed to unfollow user:", error);
    }
  };

  const handleOpenLogOut = () => {
    dispatch(openLogOut());
  };

  //TODO: add loader

  if (!user)
    return <section className={styles.userPage}>User not found</section>;

  return (
    <section className={styles.userPage}>
      <Typography variant="h2">Profile</Typography>
      <Typography
        variant="body"
        textColor={isMobile ? "gray" : "black"}
        className={styles.text}
      >
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </Typography>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <UserInfo
            user={user}
            isMyProfile={isMyProfile}
            onAvatarChange={handleAvatarChange}
          />
          {isMyProfile ? (
            <Button variant="dark" size="medium" onClick={handleOpenLogOut}>
              LOG OUT
            </Button>
          ) : user.isFollowed ? (
            <Button variant="dark" size="medium" onClick={handleUnFollow}>
              FOLLOWING
            </Button>
          ) : (
            <Button variant="dark" size="medium" onClick={handleFollow}>
              FOLLOW
            </Button>
          )}
        </div>
        <div className={styles.profileTabs}>Tabs will be here</div>
      </div>
    </section>
  );
};

export default UserPage;
