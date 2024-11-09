import React, { useRef, useState } from "react";
import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  // TODO:
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  //
  const [showPassword, setShowPassword] = useState(false);
  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const check = form.check.checked;
    setErrorMessage("");
    console.log(email, password, check);

    if (!check) {
      toast.alert("Please agree to the terms and conditions");

      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // alert("Sign Up Successful");
        toast.success("Sign Up Successful");
        // console.log(result);
        sendEmailVerification(auth.currentUser).then(() => {
          //   alert("Verification email sent");
          toast("Verification email sent");
        });
      })
      .catch((error) => {
        // console.log(error.message);
        setErrorMessage(error.message);
        toast.error(error.message);
        // alert(errorMessage);
      });
    form.reset();
  };
  //   ?
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //   TODO:
  const handelForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email");

      console.log(emailRef.current.value);
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        toast("Password reset email sent");
      });
    }
  };

  return (
    <div>
      <div>
        <div className="hero bg-base-200  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleregister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleShowPassword}
                    className="absolute right-1 top-14"
                  >
                    {showPassword ? (
                      <FaEyeSlash></FaEyeSlash>
                    ) : (
                      <IoMdEye></IoMdEye>
                    )}
                  </button>
                  <label onClick={handelForgetPassword} className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        name="check"
                        className="checkbox checkbox-accent"
                      />
                      <span className="label-text">
                        Accept Terms and Conditions
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  {/* <button className="btn btn-primary">Login</button> */}
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
