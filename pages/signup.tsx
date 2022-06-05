import React from "react";
import Link from "next/link";
import { useState } from "react";
// import {FaEyeSlash} from 'react-icons/fa'
// import {FaEye} from 'react-icons/fa'
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

const Signup = () => {
    
  const [phone, setPhone] = useState("");
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
                <h3 className="text-dark mb-3 fw-bolder "> Create an account</h3>
                {/* <!--end::Title-->
								<!--begin::Link--> */}
          <h6 className="text-dark mb-2 fw-bolder "> Get started with your free account today</h6>
                

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
                <div className="phone-input mb-2" >
                <select className="form-select" id="country-codes" name="country-codes">
                    <option selected>Nepal (+977)</option>
                    <option value="india">India (+91)</option>
                    <option value="china">China (+86)</option>
                    <option value="bangladesh">Bangladesh (+880)</option>
                  </select>     
                  <input
                    className="form-control form-control-lg "
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    required
                  />
                </div>
            
                <h6 className="text-dark mb-2 fw-bolder "> We'll text you to confirm your number</h6>
                {/* <!--end::Input--> */}
              </div>
              {/* <!--end::Input group-->
							<!--begin::Input group--> */}
              
              <div className="text-center ">
                {/* <!--begin::Submit button--> */}
                <div className="signin-btn ">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className=" p-3 btn-lg w-100 mb-5 mt-n12 " style={{backgroundColor:"#180A0A"}}
                  >
                    <span className="indicator-label">Continue</span>
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
                    Create a Geunis account
                  </button>
                </div>

                <div className="text-black-400  fs-5 fw-bolder">
                  Already have an account
                  <Link href="/register">
                    <a style={{ textDecoration: "none" }} > SignIn </a>
                  </Link>
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

export default Signup;
