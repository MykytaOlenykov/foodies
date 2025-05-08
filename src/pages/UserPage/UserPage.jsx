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
import { TabsList } from "../../components/TabsList/TabsList";
import { ListItems } from "../../components/ListItems/ListItems";
import { normalizeHttpError } from "../../utils";
import toast from "react-hot-toast";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const isMyProfile = user?.id === currentUser?.id;

  const [activeTab, setActiveTab] = useState("recipes");
  const [items, setItems] = useState([]);

  const fetchUserData = async (id) => {
    try {
      const data = await getUserDataById(id);
      setUser(data.user);
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  const handleAvatarChange = async (file) => {
    try {
      const data = await updateUserAvatar(file);
      setUser((prev) => ({
        ...prev,
        avatarURL: data.avatarURL,
      }));
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
  };

  const handleFollow = async () => {
    try {
      const data = await followUserById(id);
      toast.success(data.message);

      // Refresh user data after follow
      await fetchUserData(id);
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
  };

  const handleUnFollow = async () => {
    try {
      const data = await unfollowUserById(id);
      toast.success(data.message);

      // Refresh user data after follow
      await fetchUserData(id);
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
  };

  const handleOpenLogOut = () => {
    dispatch(openLogOut());
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    //setPage(1);
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
        className={styles.description}
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
            <Button
              variant="dark"
              bordered={true}
              size="medium"
              onClick={handleOpenLogOut}
            >
              LOG OUT
            </Button>
          ) : user.isFollowed ? (
            <Button
              variant="dark"
              size="medium"
              bordered={true}
              onClick={handleUnFollow}
            >
              FOLLOWING
            </Button>
          ) : (
            <Button
              variant="dark"
              size="medium"
              bordered={true}
              onClick={handleFollow}
            >
              FOLLOW
            </Button>
          )}
        </div>
        <div className={styles.profileTabs}>
          <TabsList
            isMyProfile={isMyProfile}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          <ListItems tab={activeTab} items={items} />
        </div>
      </div>
    </section>
  );
};

export default UserPage;
