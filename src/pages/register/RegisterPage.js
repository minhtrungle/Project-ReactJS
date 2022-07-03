import React, { useState } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
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
      const response = await serviceCallApi("register", "POST", data);
      console.log(
        "🚀 ~ file: RegisterPage.js ~ line 21 ~ onSubmit ~ response",
        response
      );
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <section className='h-100'>
      <div className='container h-100'>
        <div className='row justify-content-sm-center h-100'>
          <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
            <div className='text-center my-5'>
              <img
                src='https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'
                alt='logo'
                width={100}
              />
            </div>
            <div className='card shadow-lg'>
              <div className='card-body p-5'>
                <h1 className='fs-4 card-title fw-bold mb-4'>Register</h1>
                {loading ? (
                  <div className='text-center d-flex justify-content-center'>
                    <ReactLoading
                      type='spin'
                      color='blue'
                      height={"20%"}
                      width={"20%"}
                    />
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='needs-validation'
                  >
                    <div className='mb-3'>
                      <label className='mb-2 text-muted' htmlFor='name'>
                        Name
                      </label>
                      <input
                        id='name'
                        type='text'
                        className='form-control'
                        {...register("name", { required: true })}
                        required
                      />
                      <div className='text-danger'>
                        {errors.name && <span>Name field is required</span>}
                      </div>
                    </div>
                    <div className='mb-3'>
                      <label className='mb-2 text-muted' htmlFor='email'>
                        E-Mail Address
                      </label>
                      <input
                        id='email'
                        type='email'
                        className='form-control'
                        {...register("email", { required: true })}
                        required
                      />
                      <div className='text-danger'>
                        {errors.name && <span>Email field is required</span>}
                      </div>
                    </div>
                    <div className='mb-3'>
                      <label className='mb-2 text-muted' htmlFor='password'>
                        Password
                      </label>
                      <input
                        id='password'
                        type='password'
                        className='form-control'
                        {...register("password", { required: true })}
                        required
                      />
                      <div className='text-danger'>
                        {errors.password && (
                          <span>Password field is required</span>
                        )}
                      </div>
                    </div>
                    <div className='mb-3'>
                      <label className='mb-2 text-muted' htmlFor='password'>
                        Confirm Password
                      </label>
                      <input
                        id='password'
                        type='password'
                        className='form-control'
                        {...register("c_password", { required: true })}
                        required
                      />
                      <div className='text-danger'>
                        {errors.c_password && (
                          <span>Confirm password field is required</span>
                        )}
                      </div>
                    </div>
                    <p className='form-text text-muted mb-3'>
                      By registering you agree with our terms and condition.
                    </p>
                    <div className='align-items-center d-flex'>
                      <button type='submit' className='btn btn-primary ms-auto'>
                        Register
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className='card-footer py-3 border-0'>
                <div className='text-center'>
                  Already have an account?{" "}
                  <Link to='/login' className='text-dark'>
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className='text-center mt-5 text-muted'>
              Copyright © 2017-2021 — Your Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
