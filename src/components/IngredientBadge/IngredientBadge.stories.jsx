import React from "react";
import { IngredientBadge } from "./IngredientBadge";

export default {
  title: "Components/IngredientBadge",
  component: IngredientBadge,
  tags: ["autodocs"],
};

const Template = (args) => <IngredientBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgURL:
    "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png",
  name: "Cabbage",
  measure: "300g",
};

export const WithDelete = Template.bind({});
WithDelete.args = {
  imgURL:
    "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png",
  name: "Cabbage",
  measure: "300g",
  onDelete: () => alert("Deleted"),
};

export const WithTextOverflow = Template.bind({});
WithTextOverflow.args = {
  imgURL:
    "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3881.png",
  name: "Sesame Seed Burger Buns",
  measure: "300g soaked overnight in water",
};
