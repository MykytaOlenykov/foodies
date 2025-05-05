import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// Dummy tab content components
const MyRecipes = () => <div>My Recipes Content</div>;
const MyFavorites = () => <div>My Favorites Content</div>;
const Followers = () => <div>Followers Content</div>;
const Following = () => <div>Following Content</div>;

/**
 * @param {object} props
 * @param {boolean} props.isMyProfile — Indicates if the profile belongs to the logged-in user.
 */
export const ProfileTabs = ({ isMyProfile }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const tabConfig = isMyProfile
    ? [
        { label: "My Recipes", component: <MyRecipes /> },
        { label: "My Favorites", component: <MyFavorites /> },
        { label: "Followers", component: <Followers /> },
        { label: "Following", component: <Following /> },
      ]
    : [
        { label: "Recipes", component: <MyRecipes /> },
        { label: "Followers", component: <Followers /> },
      ];

  const tabStyles = {
    tabs: {
      borderBottom: "1px solid var(--gray-color)",
      ".MuiTab-root": {
        fontFamily: "Mulish",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 800,
        lineHeight: "24px",
        letterSpacing: "-0.4px",
        textTransform: "uppercase",
        color: "var(--gray-color)",
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: "40px",
      },
      ".Mui-selected": {
        color: "var(--main-color) !important",
      },
    },
    indicator: {
      height: "3px",
      backgroundColor: "var(--main-color)",
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        slotProps={{
          indicator: {
            sx: tabStyles.indicator,
          },
        }}
        sx={tabStyles.tabs}
      >
        {tabConfig.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <Box sx={{ padding: 2 }}>{tabConfig[value]?.component}</Box>
    </Box>
  );
};
