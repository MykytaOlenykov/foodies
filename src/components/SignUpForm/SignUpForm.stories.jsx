import { useState } from "react";
import { action } from "@storybook/addon-actions";

import { SignUpForm } from "./SignUpForm";

export default {
  title: "Components/SignUpForm",
  component: SignUpForm,
};

export const Default = () => {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (values, formActions) => {
    setDisabled(true);
    setTimeout(() => {
      action("sign-up-form-submitted")(values);
      formActions.resetForm();
      setDisabled(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <SignUpForm onSubmit={handleSubmit} disabled={disabled} />
    </div>
  );
};
