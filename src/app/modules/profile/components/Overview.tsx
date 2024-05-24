import React, { FC, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css"; // You can choose a different theme if needed
import "flatpickr/dist/flatpickr.min.css";
import { UsersTable } from "../../apps/promotions/users-list/table/UsersTable";

export const Overview: FC = () => {
  const [dateState, setDateState] = useState<any>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center mb-4">
        <div className="row align-items-center justify-content-center w-100">
          <div className="col-8 col-md-9 col-lg-10 mb-2 mb-lg-0">
            <Flatpickr
              value={[dateState.startDate, dateState.endDate]}
              onChange={([startDate, endDate]) => {
                setDateState({ startDate, endDate });
              }}
              options={{
                mode: "range",
              }}
              className="form-control form-control-solid"
              placeholder="Pick date"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2">
            <button type="button" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <UsersTable />
      </div>
    </div>
  );
};
