import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import HomeLayout from "./pages/HomeLayout";
import AuthLayout from "./pages/AuthLayout";
import ForumDetail from "./pages/ForumDetail";
import ForumLayout from "./pages/ForumLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Home />} />

          <Route path="blog" element={<Blog />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/Forum" element={<ForumLayout />}>
          <Route index={true} element={<Forum />} />
          <Route path="Forumdetail" element={<ForumDetail />} />
        </Route>
        <Route path="/Auth" element={<AuthLayout />}>
          <Route index={true} element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
