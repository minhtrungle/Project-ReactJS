import React, { useState } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "../../features/FormLogin";
import serviceCallApi from "../../services/serviceApi";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await serviceCallApi("register", "POST", data);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  };
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <img
                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                alt="logo"
                width={100}
              />
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                {loading ? (
                  <div className="text-center d-flex justify-content-center">
                    <ReactLoading
                      type="spin"
                      color="gray"
                      height={"20%"}
                      width={"20%"}
                    />
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="needs-validation"
                  >
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        {...register("name", { required: true })}
                        required
                      />
                      <div className="text-danger">
                        {errors.name && <span>Bạn phải nhập tên</span>}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">
                        E-Mail Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        {...register("email", { required: true })}
                        required
                      />
                      <div className="text-danger">
                        {errors.name && <span>Bạn phải nhập email</span>}
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
                        {...register("password", { required: true })}
                        required
                      />
                      <div className="text-danger">
                        {errors.password && (
                          <span>Bạn phải nhập password</span>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="password">
                        Confirm Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        {...register("c_password", { required: true })}
                        required
                      />
                      <div className="text-danger">
                        {errors.c_password && (
                          <span>Bạn phải nhập lại password</span>
                        )}
                      </div>
                    </div>
                    <div className="align-items-center d-flex">
                      <button type="submit" className="btn btn-primary ms-auto">
                        Register
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Bạn đã có tài khoản{" "}
                  <Link to="/login" className="text-dark">
                  Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              ReactJS Project
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;