import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/helpers";

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
      {/* begin::Body */}
      <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        {/* begin::Form */}
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          {/* begin::Wrapper */}
          <div className="w-lg-500px px-10">
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
        style={{
          backgroundImage: `url(${toAbsoluteUrl("media/misc/auth-bg.png")})`,
        }}
      >
        {/* begin::Content */}
        <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">
          {/* begin::Logo */}
          {/* end::Logo */}

          {/* begin::Image */}
          <img
            className="mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
            src={toAbsoluteUrl("media/misc/3.png")}
            alt=""
          />
          {/* end::Image */}

          {/* begin::Title */}
          <h1 className="text-white fs-2qx fw-bolder text-center mb-7">
            Daily stop Supermarket
          </h1>
          {/* end::Title */}

          {/* begin::Text */}
          <div className="text-white fs-base text-center">
            Welcome to Daily stop Supermarket's eCommerce app! <br />
            Your personal data will be used to support your experience
            throughout this website and for
            other purposes described in our privacy policy.
          </div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  );
};

export { AuthLayout };
