import React from "react";
import Link from "next/link";
import { useState } from "react";
// import {FaEyeSlash} from 'react-icons/fa'
// import {FaEye} from 'react-icons/fa'
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  // const [pending,setPending]=useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setPending(false);
  };

  return (
    <div className=" container">
      {/* <!--begin::Authentication - Sign-in --> */}
      <div className="">
        {/* <!--begin::Content--> */}
        <div className="Signin-form">
          <div className=" bg-body rounded p-4 p-lg-15 mx-auto">
            {/* <!--begin::Form--> */}
            <form
              className=""
              id="kt_sign_in_form"
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* <!--begin::Heading--> */}
              {/* <div className="sigin-header text-center mb-10"> */}
              <div className="sigin-header  mb-10 ">
                {/* <!--begin::Title--> */}
                <h2 className="text-dark mb-2 fw-bolder "> SignIn to GG</h2>
                {/* <!--end::Title-->
								<!--begin::Link--> */}
                 <div className="text-black-400  fs-5 fw-bolder">
                  Not a memeber yet?
                  <Link href="/signup">
                    <a style={{ textDecoration: "none" }} > Signup </a>
                  </Link>
                </div>

                {/* <!--end::Link--> */}
              </div>
              {/* <!--begin::Heading-->
							<!--begin::Input group--> */}
              <div className="fv-row mb-12">
                {/* <!--begin::Label--> */}
                <label className="form-label fs-6  text-dark text-uppercase">
                  Phone number<sup style={{ color: "red" }}>*</sup>
                </label><br />
                  {/* <!--end::Label-->
								<!--begin::Input--> */}
                <div className="phone-input">
                <select className="form-select" id="country-codes" name="country-codes">
                    <option selected>Nepal (+977)</option>
                    <option value="india">India (+91)</option>
                    <option value="china">China (+86)</option>
                    <option value="bangladesh">Bangladesh (+880)</option>
                  </select>           
                  <input
                    className="form-control form-control-lg "
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email / Phone number"
                    required
                  />
                </div>
                <br />
                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group-->
							<!--begin::Input group--> */}
              <div className="fv-row mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-stack mb-2">
                  {/* <!--begin::Label--> */}
                  <label className="form-label  text-dark fs-6 mb-0 text-uppercase">
                    Password<sup style={{ color: "red" }}>*</sup>
                  </label>
                  {/* <!--end::Label-->
									<!--begin::Link--> */}


                </div>

                {/* <!--end::Wrapper-->
								<!--begin::Input--> */}

                <input
                  className="form-control form-control-lg "
                  type={type}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  style={{ position: "relative" }}
                />
                <span
                  className="d-flex"
                  style={{ position: "absolute", top: "19rem", right: "5rem" }}
                  onClick={handleToggle}
                >
                  <Icon icon={icon} size={25} />
                </span>
				        <div style={{textAlign:"right"}}> 
				        <Link href="../../demo1/dist/authentication/layouts/basic/password-reset.html">
                    <a
                      className="link-primary  fw-bolder"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Forgot Password ?
                    </a>
                  </Link>
				  </div>

                {/* <div className="d-flex flex-stack mb-2">
                  <Link href="../../demo1/dist/authentication/layouts/basic/password-reset.html">
                    <a
                      className="link-primary text-dark fs-6 "
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Forgot Password ?
                    </a>
                  </Link>
                </div> */}
                {/* <!--end::Link--> */}

                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group-->
							<!--begin::Actions--> */}
              <div className="text-center">
                {/* <!--begin::Submit button--> */}
                <div className="signin-btn">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="p-3 btn-lg w-100 mb-5 " style={{backgroundColor:"#180A0A"}}
                  >
                    <span className="indicator-label">Sign in</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>

                {/* <!--end::Submit button-->
								<!--begin::Separator--> */}

                <div className="hori">
                  <h2>
                    <span className="text-uppercase "> or</span>
                  </h2>
                </div>

                {/* <!--end::Separator-->
								<!--begin::Google link--> */}
                <div className="signinwith">
                  <button className="hovi btn-flex flex-center p-2  btn-lg w-100 mb-3">
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/google-icon.svg"
                      className="h-20px me-3"
                    />
                    Continue with Google
                  </button>
                  {/* <!--end::Google link-->
								    <!--begin::Google link--> */}
                  <button className="hovi flex-center p-2 btn-lg w-100 mb-3">
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/facebook-4.svg"
                      className="h-20px me-3"
                    />
                    Continue with Facebook
                  </button>
                  {/* <!--end::Google link--*/}
                  <button className="gg-signin btn btn-flex flex-center p-3  btn-lg w-100 mb-5" style={{backgroundColor:"#180A0A"}}>
                    <img
                      alt="Logo"
                      src="/logoGG.svg"
                      className="h-20px me-3" 
                    />
                    Continue as GG user
                  </button>
                </div>

               
              </div>
            </form>
            {/* <!--end::Form--> */}
          </div>
          {/* <!--end::Wrapper--> */}
        </div>
        {/* <!--end::Content-->
				<!--begin::Footer--> */}
      </div>
      {/* <!--end::Authentication - Sign-in--> */}
    </div>
  );
};

export default Signin;
