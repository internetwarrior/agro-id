// ----Routes and Context connections here

import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/d_main/Main";
import Header from "./pages/a_components/Header";
import Popup from "./pages/b_windows/Popup";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import Events from "./pages/events/Events";
import Users from "./pages/users/Users";
import Organizations from "./pages/organizations/Organizations";
import Programs from "./pages/programs/Programs";
import CreateEdit from "./pages/b_windows/CreateEdit";
import Detailed from "./pages/post/Detailed";

function App() {
  return (
    <>
      <Header />

      <Popup />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/organizations" element={<Organizations />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>
        <Route path="/post" element={<Post />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>
        <Route path="post/detailed/:id" element={<Detailed />} />
        <Route path="/events" element={<Events />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>

        <Route path="/programs" element={<Programs />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
