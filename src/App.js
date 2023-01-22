// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./Pages/Posts";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";

import { Todos } from "./Pages/Todos";
import { SharedLayout } from "./Pages/SharedLayout";
import { AppRoutes } from "./Routes";

import { Users } from "./Pages/UsersF";
import { UserContainer } from "./Pages/UsersF";
import { SingleUser } from "./Pages/UsersF";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path={AppRoutes.Users} element={<UserContainer />}>
            <Route index element={<Users />} />
            <Route path={AppRoutes.SingleUser} element={<SingleUser />} />
          </Route>

          <Route path={AppRoutes.Post} element={<Posts />} />

          <Route path={AppRoutes.Todos} element={<Todos />} />

          <Route path={AppRoutes.Error} element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
