import { useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { Typography } from "../../components/Typography/Typography";
import styles from "./UserPage.module.css";
import { useCallback, useEffect, useState } from "react";
import {
  followUserById,
  getUserFollowers,
  getUserFollowing,
  unfollowUserById,
} from "../../services/users";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import {
  getUserDataById,
  openLogOut,
  updateUserAvatarAPI,
} from "../../store/auth";
import { TabsList } from "../../components/TabsList/TabsList";
import { ListItems } from "../../components/ListItems/ListItems";
import { normalizeHttpError } from "../../utils";
import toast from "react-hot-toast";
import { getFavoriteRecipes, getRecipesByUserId } from "../../services/recipes";
import { BACKEND_URL, TabKey } from "../../constants/common";
import emptyImages from "../../assets/images/empty";

const UserPage = () => {
  const { id } = useParams();
  const PAGE_LIMIT = 10;
  const [page, setPage] = useState(1);

  const user = useSelector(selectUser);

  const avatarURL = user?.avatarURL ? user.avatarURL : emptyImages.noAvatar;

  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const isMyProfile = user?.id === currentUser?.id;

  const [activeTab, setActiveTab] = useState(TabKey.RECIPES);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchUserData(id);
    setPage(1);
    setActiveTab(TabKey.RECIPES);
  }, [id]);

  const reloadData = useCallback(() => {
    const pagination = { page, limit: PAGE_LIMIT };

    const fetchTabData = async () => {
      try {
        let data = {};

        switch (activeTab) {
          case TabKey.RECIPES:
            data = await getRecipesByUserId(id, pagination);
            break;
          case TabKey.FAVORITES:
            if (isMyProfile) {
              data = await getFavoriteRecipes(pagination);
            }
            break;
          case TabKey.FOLLOWERS:
            data = await getUserFollowers(id, pagination);
            break;
          case TabKey.FOLLOWING:
            if (isMyProfile) {
              data = await getUserFollowing(pagination);
            }
            break;
          default:
            data = {};
        }

        setItems(data?.items || []);
      } catch (err) {
        const error = normalizeHttpError(err);
        toast.error(error.message);
      }
    };

    fetchTabData();
  }, [activeTab, id, isMyProfile, page]);

  useEffect(() => {
    reloadData();
  }, [reloadData]);

  const handleAvatarChange = async (file) => {
    try {
      dispatch(updateUserAvatarAPI(file));
      // const data = await updateUserAvatar(file);
      // setUser((prev) => ({
      //   ...prev,
      //   avatarURL: data.avatarURL,
      // }));
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
    setPage(1);
  };

  const fetchUserData = async (id) => {
    try {
      dispatch(getUserDataById(id));
      // const data = await getUserDataById(id);
      // setUser(data.user);
    } catch (err) {
      const error = normalizeHttpError(err);
      toast.error(error.message);
    }
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
            avatarURL={avatarURL}
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
          <ListItems
            tab={activeTab}
            items={items}
            isMyProfile={isMyProfile}
            onDelete={reloadData}
          />
        </div>
      </div>
    </section>
  );
};

export default UserPage;
