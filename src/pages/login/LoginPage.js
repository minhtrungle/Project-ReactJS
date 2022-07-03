import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "../../features/login/FormLogin";
const LoginPage = () => {
  return (
    <section className='h-100'>
      <div className='container h-100'>
        <div className='row justify-content-sm-center h-100'>
          <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
            <div className='text-center my-5'>
              <h1>Login </h1>
            </div>
            <div className='card shadow-lg'>
              <div className='card-body p-5'>
                <FormLogin />
              </div>
              <div className='card-footer py-3 border-0'>
                <div className='text-center'>
                  Already have an account?{" "}
                  <Link to='/register' className='text-dark'>
                    Register
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

export default LoginPage;
