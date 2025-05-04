import { useState } from "react";
import { action } from "@storybook/addon-actions";

import { SignInForm } from "./SignInForm";

export default {
  title: "Components/SignInForm",
  component: SignInForm,
};

export const Default = () => {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (values, formActions) => {
    setDisabled(true);
    setTimeout(() => {
      action("sign-in-form-submitted")(values);
      formActions.resetForm();
      setDisabled(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <SignInForm onSubmit={handleSubmit} disabled={disabled} />
    </div>
  );
};
