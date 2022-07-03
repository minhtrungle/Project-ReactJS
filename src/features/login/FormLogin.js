import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, checkAuth, logout, selectSignin } from "./loginSlice";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, loggedIn, error } = useSelector(selectSignin);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
      rememberMe: true,
    };

    try {
      await dispatch(login(formData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {loading ? (
        <div className='text-center d-flex justify-content-center'>
          <ReactLoading type='spin' color='blue' height={"20%"} width={"20%"} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='needs-validation'>
          <div className='mb-3'>
            <label className='mb-2 text-muted' htmlFor='email'>
              E-Mail Address
            </label>
            <input
              id='email'
              type='email'
              className='form-control'
              name='email'
              {...register("email", { required: true })}
            />
            <div className='text-danger'>
              {errors.email && <span>This field is required</span>}
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
              name='password'
              {...register("password", { required: true })}
            />
            <div className='text-danger'>
              {" "}
              {errors.password && <span>This field is required</span>}
            </div>
          </div>
          <div className='align-items-center d-flex'>
            <button type='submit' className='btn btn-primary ms-auto'>
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormLogin;
