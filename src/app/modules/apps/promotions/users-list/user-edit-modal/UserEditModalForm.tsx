import { FC, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isNotEmpty, toAbsoluteUrl } from "../../../../../../_metronic/helpers";
import { initialUser, User } from "../core/_models";
import clsx from "clsx";
import { useListView } from "../core/ListViewProvider";
import { UsersListLoading } from "../components/loading/UsersListLoading";
import { createUser, updateUser } from "../core/_requests";
import { useQueryResponse } from "../core/QueryResponseProvider";

type Props = {
  isUserLoading: boolean;
  user: User;
};

const editUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  address: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Address is required"),
  type: Yup.string().required("Type is required"),
  dateStart: Yup.date().required("Date Start is required"),
  dateEnd: Yup.date().required("Date End is required"),
  value: Yup.number()
    .min(0, "Value must be at least 0")
    .required("Value is required"),
  limit: Yup.number()
    .min(0, "Limit must be at least 0")
    .required("Limit is required"),
});

const UserEditModalForm: FC<Props> = ({ user, isUserLoading }) => {
  const { setItemIdForUpdate } = useListView();
  const { refetch } = useQueryResponse();

  const [userForEdit] = useState<User>({
    ...user,
    avatar: user.avatar || initialUser.avatar,
    role: user.role || initialUser.role,
    position: user.position || initialUser.position,
    name: user.name || initialUser.name,
    email: user.email || initialUser.email,
    address: user.address || initialUser.address,
    type: user.type || initialUser.type,
    dateStart: user.dateStart || initialUser.dateStart,
    dateEnd: user.dateEnd || initialUser.dateEnd,
    value: user.value || initialUser.value,
    limit: user.limit || initialUser.limit,
  });
  

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }
    setItemIdForUpdate(undefined);
  };

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values);
        } else {
          await createUser(values);
        }
      } catch (ex) {
        console.error(ex);
      } finally {
        setSubmitting(true);
        cancel(true);
      }
    },
  });

  return (
    <>
      <form
        id="kt_modal_add_user_form"
        className="form"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        {/* begin::Scroll */}

        <div
          className="d-flex flex-column scroll-y me-n7 pe-7"
          id="kt_modal_add_user_scroll"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_modal_add_user_header"
          data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
          data-kt-scroll-offset="300px"
        >
          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Name"
              {...formik.getFieldProps("name")}
              type="text"
              name="name"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                { "is-invalid": formik.touched.name && formik.errors.name },
                {
                  "is-valid": formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Type</label>
            {/* end::Label */}

            {/* begin::Input */}
            <select
              {...formik.getFieldProps("type")}
              name="type"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                { "is-invalid": formik.touched.type && formik.errors.type },
                {
                  "is-valid": formik.touched.type && !formik.errors.type,
                }
              )}
              disabled={formik.isSubmitting || isUserLoading}
            >
              <option value="">Select Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
            {formik.touched.type && formik.errors.type && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.type}</span>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Date Start</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Date Start"
              {...formik.getFieldProps("dateStart")}
              type="date"
              name="dateStart"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                {
                  "is-invalid":
                    formik.touched.dateStart && formik.errors.dateStart,
                },
                {
                  "is-valid":
                    formik.touched.dateStart && !formik.errors.dateStart,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.dateStart && formik.errors.dateStart && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.dateStart}</span>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Date End</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Date End"
              {...formik.getFieldProps("dateEnd")}
              type="date"
              name="dateEnd"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                {
                  "is-invalid": formik.touched.dateEnd && formik.errors.dateEnd,
                },
                {
                  "is-valid": formik.touched.dateEnd && !formik.errors.dateEnd,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.dateEnd && formik.errors.dateEnd && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.dateEnd}</span>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Value</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Value"
              {...formik.getFieldProps("value")}
              type="number"
              name="value"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                { "is-invalid": formik.touched.value && formik.errors.value },
                {
                  "is-valid": formik.touched.value && !formik.errors.value,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.value && formik.errors.value && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.value}</span>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Limit</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Limit"
              {...formik.getFieldProps("limit")}
              type="number"
              name="limit"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                { "is-invalid": formik.touched.limit && formik.errors.limit },
                {
                  "is-valid": formik.touched.limit && !formik.errors.limit,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.limit && formik.errors.limit && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.limit}</span>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className="text-center pt-15">
          <button
            type="reset"
            onClick={() => cancel()}
            className="btn btn-light me-3"
            data-kt-users-modal-action="cancel"
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            data-kt-users-modal-action="submit"
            disabled={
              isUserLoading ||
              formik.isSubmitting ||
              !formik.isValid ||
              !formik.touched
            }
          >
            <span className="indicator-label">Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className="indicator-progress">
                Please wait...{" "}
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>

      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  );
};

export { UserEditModalForm };
