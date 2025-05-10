import { Button } from "./Button";
import ArrowIcon  from "../../assets/icons/arrow-up-right.svg?react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const variants = ["dark", "light", "transparent"];
const sizes = ["small", "medium"];
const icon = <ArrowIcon style={{ marginLeft: "0.5rem" }} />;

export const AllVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    {variants.map((variant) => (
      <div key={variant}>
        <h4>{variant}</h4>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {sizes.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const WithBorder = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} size="medium" bordered>
        {variant} bordered
      </Button>
    ))}
  </div>
);

export const WithIcon = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} size="medium" icon={icon}>
        Continue
      </Button>
    ))}
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} size="medium" disabled>
        Disabled
      </Button>
    ))}
  </div>
);
