import { FC } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useLocation } from "react-router-dom";
import { Dropdown1 } from "../../../_metronic/partials";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { Content } from "../../../_metronic/layout/components/content";

const ProfileHeader: FC = () => {
  const location = useLocation();
  return (
    <>
      <ToolbarWrapper />
      <Content>
        <div className="card mb-5 mb-xl-10">
          <div className="card-body pb-0">
            <div className="d-flex overflow-auto h-55px">
              <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
                <li className="nav-item">
                  <Link
                    className={`nav-link text-active-primary me-6 ${
                      location.pathname === "/reports/orders" && "active"
                    }`}
                    to="/reports/orders"
                  >
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-active-primary me-6 ${
                      location.pathname === "/reports/products" && "active"
                    }`}
                    to="/reports/products"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-active-primary me-6 ${
                      location.pathname === "/reports/top-categories" &&
                      "active"
                    }`}
                    to="/reports/top-categories"
                  >
                    Top Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-active-primary me-6 ${
                      location.pathname === "/reports/close-day" && "active"
                    }`}
                    to="/reports/close-day"
                  >
                    Close Day
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-active-primary me-6 ${
                      location.pathname === "/reports/total-sales" && "active"
                    }`}
                    to="/reports/total-sales"
                  >
                    Total Sales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export { ProfileHeader };
