import { Route, Routes } from "react-router";
import { checkApiConnection } from "./services/api.js";
import { useEffect } from "react";

export const App = () => {
   useEffect(() => {
    checkApiConnection()
      .then(() => console.log('✅ API is reachable'))
      .catch((err) => console.error('❌ API connection failed:', err));
  }, []);

  return (
    <Routes>
      <Route path="/hello-world" element={<div>Hello World</div>} />
    </Routes>
  );
};
