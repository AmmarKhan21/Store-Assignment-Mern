import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import StartNavBar from "../StartNavBar";

const Login = () => {
  const history = useHistory();
  return (
    <>
    <StartNavBar/>
    <div className="auth-wrapper">
      <div className="auth-inner">
    <Formik 
      initialValues={{ email: "", password: "" }}
      onSubmit={(data) => {
        if (data.email !== "" && data.password !== "") {
          history.push("/homePage");
        }
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required().label("*Email"),
        password: Yup.string()
          .required()
          .min(8, "Password is to short- It should 8 character Minimum")
          .matches(/(?=.*[0-9])/, "Password must contian one Number")
          .label("*Password"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <h3>Sign In</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  className={`${
                    errors.email && errors.touched && "error"
                  } form-control `}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email && (
                <div className=" ">
                  <p className="text-danger"> {errors.email} </p>
                </div>
              )}

              <div className="form-group">
                <label>Password</label>
                <input
                  className={`${
                    errors.password && errors.touched && "error"
                  } form-control `}
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && touched.password && (
                <div>
                  <p className="text-danger">{errors.password}</p>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                Submit
              </button>

              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        );
      }}
    </Formik>
    </div>
    </div>
    </>
  );
};

export default Login;
