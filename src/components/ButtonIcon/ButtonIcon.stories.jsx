import React from "react";
import { ButtonIcon } from "./ButtonIcon";
import BurgerMenu from "../../assets/icons/burger-menu.svg?react";

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
};

export const WithArrowIcon = () => (
  <ButtonIcon
    variant="dark"
    size="medium"
    icon={<BurgerMenu width={20} height={20} />}
    onClick={() => console.log("Icon clicked")}
  />
);
