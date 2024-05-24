import { lazy, FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import SearchUPC from "../pages/upc-search/SearchUPC";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";
import Promotions from "../pages/promotions/Promotions";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(() =>
    import("../modules/apps/user-management/UsersPage").then((module) => ({
      default: module.UsersPage,
    }))
  );
  const CustomerPage = lazy(() =>
    import("../modules/apps/customer-management/UsersPage").then((module) => ({
      default: module.CustomersPage,
    }))
  );
  const ProductImportPage = lazy(
    () => import("../pages/product-import/ProductImport")
  );
  const PromotionsPage = lazy(() =>
    import("../modules/apps/promotions/UsersPage").then((module) => ({
      default: module.UsersPage,
    }))
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route
          path="store-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path="customer-management/*"
          element={
            <SuspensedView>
              <CustomerPage />
            </SuspensedView>
          }
        />
        <Route
          path="promotion-management/*"
          element={
            <SuspensedView>
              <PromotionsPage />
            </SuspensedView>
          }
        />
        <Route path="/product-import" element={<ProductImportPage />} />
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="/search-upc" element={<SearchUPC />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="reports/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="inventory/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
