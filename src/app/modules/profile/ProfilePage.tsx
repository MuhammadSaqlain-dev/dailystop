import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Overview } from "./components/Overview";
import { Projects } from "./components/Projects";
import { Campaigns } from "./components/Campaigns";
import { Documents } from "./components/Documents";
import { Connections } from "./components/Connections";
import { ProfileHeader } from "./ProfileHeader";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Reports",
    path: "/reports/orders",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path="orders"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Orders</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path="products"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Products</PageTitle>
            <Projects />
          </>
        }
      />
      <Route
        path="top-categories"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>
              Top Categories
            </PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route
        path="close-day"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Close Day</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path="total-sales"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Total Sales</PageTitle>
            <Connections />
          </>
        }
      />
      <Route index element={<Navigate to="orders" />} />
    </Route>
  </Routes>
);

export default ProfilePage;
