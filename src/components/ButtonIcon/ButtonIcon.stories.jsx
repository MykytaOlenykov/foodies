import React from "react";
import { ButtonIcon } from "./ButtonIcon";
import BurgerMenu from "../../assets/icons/burger-menu.svg?react";

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
};

export const WithArrowIcon = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem"  }}>
    <div style={{ display: "flex", gap: "1rem" }}>
      <ButtonIcon
        variant="light"
        size="medium"
        icon={<BurgerMenu width={20} height={20} />}
        onClick={() => console.log("Icon clicked")}
      />
      <ButtonIcon
        variant="dark"
        size="medium"
        icon={<BurgerMenu width={20} height={20} />}
        onClick={() => console.log("Icon clicked")}
      />
    </div>
    <div style={{ backgroundColor: "#8f8f8f", padding: "2rem", width: 'fit-content' }}>
      <ButtonIcon
        variant="transparent"
        size="medium"
        icon={<BurgerMenu width={20} height={20} />}
        onClick={() => console.log("Icon clicked")}
      />
    </div>
  </div>
);
