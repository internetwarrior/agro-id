// ----Routes and Context connections here

import { Link, Outlet, Route, Routes } from "react-router-dom";
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
import { useState } from "react";
import AccordionPart from "./pages/organizations/Accordion";
import { DataOrganization } from "./pages/organizations/components/DataOrganization";
// import Test from "./Test";

function App() {
  return (
    <>
      <Header />

      <Popup />
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/" element={<Main />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>{" "}
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
        <Route path="accordion" element={<AccordionPart />} />
        <Route path="/programs" element={<Programs />}>
          <Route path="create-edit/:reason" element={<CreateEdit />} />
        </Route>
        <Route path="/DataOrganization" element={<DataOrganization />} />
      </Routes>
    </>
  );
}

export default App;

export const HeaderNavigator = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <nav className="  gap-4 text-secondary hidden xl:flex">
      <Link
        onClick={() => {
          setActivePage(1);
        }}
        className={activePage === 1 ? "p-4 border-b-2 border-solid border-[#FBF6EB]" : "p-4"}
        to="/"
      >
        Главная
      </Link>
      <Link
        to={"/events"}
        onClick={() => {
          setActivePage(2);
        }}
        className={activePage === 2 ? "p-4 border-b-2 border-solid border-[#FBF6EB]" : "p-4"}
      >
        Мероприятие
      </Link>
      <Link
        to={"/organizations"}
        onClick={() => {
          setActivePage(3);
        }}
        className={activePage === 3 ? "p-4 border-b-2 border-solid border-[#FBF6EB]" : "p-4"}
      >
        Организации
      </Link>
      <Link
        onClick={() => {
          setActivePage(4);
        }}
        className={activePage === 4 ? "p-4 border-b-2 border-solid border-[#FBF6EB]" : "p-4"}
        to="/users"
      >
        Участники
      </Link>
      <Link
        onClick={() => {
          setActivePage(5);
        }}
        className={activePage === 5 ? "p-4 border-b-2 border-solid border-[#FBF6EB]" : "p-4"}
        to="/post"
      >
        Публикации
      </Link>
      <Link
        onClick={() => {
          setActivePage(6);
        }}
        className={activePage === 6 ? "p-4 border-b-2 border-solid border-[#FBF6EB]" : "p-4"}
        to="/programs"
      >
        Навигатор
      </Link>
    </nav>
  );
};
