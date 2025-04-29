import { Route, Routes } from "react-router";
import { Components } from "./pages/Components.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/hello-world" element={<Components />} />
    </Routes>
  );
};
