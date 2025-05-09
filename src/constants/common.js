export const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

export const DEFAULT_ERROR_MESSAGE = "Something went wrong. Try again.";

export const TabKey = {
  RECIPES: "recipes",
  FAVORITES: "favorites",
  FOLLOWERS: "followers",
  FOLLOWING: "following",
};

export const tabsForOwner = [
  { key: TabKey.RECIPES, label: "My Recipes" },
  { key: TabKey.FAVORITES, label: "My Favorites" },
  { key: TabKey.FOLLOWERS, label: "Followers" },
  { key: TabKey.FOLLOWING, label: "Following" },
];

export const tabsForUser = [
  { key: TabKey.RECIPES, label: "Recipes" },
  { key: TabKey.FOLLOWERS, label: "Followers" },
];

export const emptyTabMessagesForOwner = {
  recipes:
    "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future.",
  favorites:
    "Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future.",
  followers:
    "There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile.",
  following:
    "Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you.",
};

export const emptyTabMessagesForUser = {
  recipes:
    "This user hasn't added any recipes yet. Check back later to see if they've shared something tasty!",
  followers:
    "No one is following this user yet. Be the first to follow and stay updated on their activity.",
};
