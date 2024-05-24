import React, { FC, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css"; // You can choose a different theme if needed
import "flatpickr/dist/flatpickr.min.css";
import { KTIcon } from "../../../../_metronic/helpers";

export const Campaigns: FC = () => {
  const [dateState, setDateState] = useState<any>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <div className="d-flex justify-content-center">
      <div className="row align-items-center justify-content-center w-100 px-5">
        <div className="col-8 col-md-9 col-lg-10">
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
  );
  
  
};
