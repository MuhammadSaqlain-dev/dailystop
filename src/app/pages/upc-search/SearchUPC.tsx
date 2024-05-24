import { FC } from "react";
import { KTIcon } from "../../../_metronic/helpers";

const SearchUPC: FC = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row">
        <div className="flex-column flex-lg-row-auto w-100 mb-10">
          <div className="card card-flush">
            <div className="card-header pt-7 pb-7" id="kt_chat_contacts_header">
              <form
                className="w-100 d-flex align-items-center"
                autoComplete="off"
              >
                <div className="position-relative me-3 flex-grow-1">
                  <KTIcon
                    iconName="magnifier"
                    className="fs-2 text-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"
                  />
                  <input
                    type="text"
                    className="form-control form-control-solid px-15"
                    name="search"
                    placeholder="Enter product UPC"
                  />
                </div>
                <button type="button" className="btn btn-primary me-3">
                  <KTIcon iconName="magnifier" className="fs-2" />
                  Search
                </button>
                <button type="button" className="btn btn-danger">
                  <KTIcon iconName="minus" className="fs-2" />
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUPC;
