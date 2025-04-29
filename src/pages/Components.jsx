import { Button } from "../components/Button/Button.jsx";
import PlusIcon from '../assets/icons/plus.svg?react';
import { ButtonIcon } from "../components/ButtonIcon/ButtonIcon.jsx";
import { DualButtonGroup } from "../components/DualButtonGroup/DualButtonGroup.jsx";
import { Textarea } from "../components/Textarea/Textarea.jsx";
import { useState } from "react";

const Components = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: "4rem 0" }}>
      <h2>Common buttons, used everywhere in project</h2>
      <div style={{ display: "flex", gap: "1rem", padding: "1rem 0", margin: "1rem 0 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="dark" size="medium">dark medium</Button>
          <Button variant="light" size="medium" bordered>light medium bordered</Button>
          <Button
            variant="light"
            size="medium"
            bordered
            icon={<PlusIcon />}
          >
            light medium bordered
          </Button>
          <Button variant="light" size="medium" bordered disabled>disabled</Button>
        </div>
      </div>

      <h2>Header buttons, used only in header</h2>
      <div style={{ display: "flex", gap: "1rem", background: "black", padding: "1rem 0", margin: "1rem 0 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="transparent" size="small">transparent small</Button>
          <Button variant="transparent" bordered size="small">transparent small bordered</Button>
        </div>
      </div>

      <h2>ButtonIcon</h2>
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0 2rem" }}>
        <ButtonIcon icon={<PlusIcon />} variant="light" size="small" />
        <ButtonIcon icon={<PlusIcon />} variant="light" size="medium" />
        <ButtonIcon icon={<PlusIcon />} variant="dark" size="small" />
        <ButtonIcon icon={<PlusIcon />} variant="dark" size="medium" />
      </div>

      <h2>DualButton</h2>
      <div style={{ background: "black", padding: "1rem 0", margin: "1rem 0 2rem" }}>
        <DualButtonGroup
          leftLabel="Sign in"
          onLeftClick={() => alert("Sign in clicked")}
          rightLabel="Sign up"
          onRightClick={() => alert("Sign up clicked")}
        />
      </div>

      <h2>TextArea</h2>
      <div style={{ width: "500px", display: "flex", gap: "1rem", margin: "1rem 0 2rem" }}>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export {Components};
