import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <Routes>
      <Route path="/hello-world" element={<div>Hello world!</div>} />
    </Routes>
  );
};
