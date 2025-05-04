import { action } from "@storybook/addon-actions";

import { SignUpForm } from "./SignUpForm";

export default {
  title: "Components/SignUpForm",
  component: SignUpForm,
};

export const Default = () => {
  const handleSubmit = (values) => {
    action("form-submitted")(values);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};
