import React from "react";
import { useForm } from "react-hook-form";

const FormLogin = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(props.onSubmit)}
        className="needs-validation"
      >
        <div className="mb-3">
          <label className="mb-2 text-muted" htmlFor="email">
            E-Mail Address
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            name="email"
            {...register("email", { required: true })}
          />
          <div className="text-danger">
            {errors.email && <span>Bạn phải nhập email</span>}
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-2 text-muted" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            name="password"
            {...register("password", { required: true })}
          />
          <div className="text-danger">
            {" "}
            {errors.password && <span>Bạn phải nhập mật khẩu</span>}
          </div>
        </div>
        <div className="align-items-center d-flex">
          <button type="submit" className="btn btn-primary ms-auto">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
