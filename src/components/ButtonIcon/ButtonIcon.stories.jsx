import { ButtonIcon } from "./ButtonIcon";
import HeartIcon  from "../../assets/icons/heart.svg?react";
import ArrowIcon from "../../assets/icons/arrow-up-right.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";

export default {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <ButtonIcon {...args} />;

export const Variants = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    {["light", "dark"].map((variant) => (
      <div key={variant} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ButtonIcon variant={variant} size="small" icon={<HeartIcon />} />
        <ButtonIcon variant={variant} size="medium" icon={<ArrowIcon />} />
        <ButtonIcon variant={variant} size="large" icon={<TrashIcon />} />
      </div>
    ))}
  </div>
);
