const SignInForm = ({ variant }) => (
  <div style={{ padding: "1rem" }}>
    <h2>{variant === "sign-up" ? "Sign Up Stub" : "Sign In Stub"}</h2>
    <p>This is a temporary form placeholder.</p>
  </div>
);

export default SignInForm;