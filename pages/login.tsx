import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
// import Icon from '../app/utils/Icons'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { setUser } from '../components/states/slices/userSlice'



const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

//  handel submit form
const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const url = `/api/auth/login`;
    const user =await axios.post(url, {email, password});
    if (user.data.success){
      dispatch(setUser(user.data.user));
      router.push('/dashboard');
      // location.replace('/dashboard');
    }
  } catch (error:any) {
    setError(error.response.data.message);
  }
};

  return (
    <div className="d-flex flex-column flex-root">
    { /*begin::Authentication - Sign-in  */ }
    <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
      { /*begin::Content */ }
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        
        { /*begin::Wrapper */ }
        <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
          { /*begin::Form */ }
          <form className="form w-100"id="kt_sign_in_form"  onSubmit={(e) =>handleSubmit(e)}>
            { /*begin::Heading */ }
            <div className="text-center mb-10">
              { /*begin::Title */ }
              <Link href="/">
                  <img src="http://goinggenius.com.np/gg-front/assets/img/logo-color.png" className="h-100px" alt="GG Logistics Logo" />
              </Link>
              <h1 className="text-dark mb-3">Sign In to GG</h1>
              { /*end::Title */ }
              { /*begin::Link */ }
              <div className="text-gray-400 fw-bold fs-4">New Here?
              <Link href="/register">
                <a className="link-primary fw-bolder">Create an Account</a>
              </Link>
              {
                error && <div className="alert alert-danger d-flex align-items-center p-5 mb-10">
   
                <span className="svg-icon svg-icon-2hx svg-icon-danger me-4">
                 {/* <Icon name="general/gen048"/> */}
                </span>
                <div className="d-flex flex-column">
                  <h4 className="mb-1 text-danger">{error}</h4>
                </div>
              </div>
              }
              </div>
              { /*end::Link */ }
            </div>
            { /*begin::Heading */ }
            { /*begin::Input group */ }
            <div className="fv-row mb-10">
              { /*begin::Label */ }
              <label className="form-label fs-6 fw-bolder text-dark">Email</label>
              { /*end::Label */ }
              { /*begin::Input */ }
              <input className="form-control form-control-lg form-control-solid" 
                  type="text" 
                  name="email" 
                  autoComplete="off" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
              />
              { /*end::Input */ }
            </div>
            { /*end::Input group */ }
            { /*begin::Input group */ }
            <div className="fv-row mb-10">
              { /*begin::Wrapper */ }
              <div className="d-flex flex-stack mb-2">
                { /*begin::Label */ }
                <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                { /*end::Label */ }
                { /*begin::Link */ }
                <Link href="/forget-password">
                    <a className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                </Link>
                { /*end::Link */ }
              </div>
              { /*end::Wrapper */ }
              { /*begin::Input */ }
              <input className="form-control form-control-lg form-control-solid" 
                type="password" 
                name="password" 
                autoComplete="off" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              { /*end::Input */ }
            </div>
            { /*end::Input group */ }
            { /*begin::Actions */ }
            <div className="text-center">
              { /*begin::Submit button */ }
              <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
                <span className="indicator-label">Continue</span>
                <span className="indicator-progress">Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>
              { /*end::Submit button */ }
              { /*begin::Separator */ }
              <div className="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
              { /*end::Separator */ }
              { /*begin::Google link */ }
              <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
              <img alt="Logo" src="assets/media/svg/brand-logos/gg_logo.png" className="h-20px me-3" />Continue as GG User</a>
              { /*end::Google link */ }
              { /*begin::Google link */ }
              <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
              <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Continue with Google</a>
              { /*end::Google link */ }
            </div>
            { /*end::Actions */ }
          </form>
          { /*end::Form */ }
        </div>
        { /*end::Wrapper */ }
      </div>
      { /*end::Content */ }
      { /*begin::Footer */ }
      <div className="d-flex flex-center flex-column-auto p-10">
        { /*begin::Links */ }
        <div className="d-flex align-items-center fw-bold fs-6">
          <Link href="/about">
            <a  className="text-muted text-hover-primary px-2">About</a>
          </Link>
          <Link href="/terms-and-conditions">
              <a  className="text-muted text-hover-primary px-2">Terms and Conditions</a>
          </Link>
          <Link href="/contact-us">
            <a className="text-muted text-hover-primary px-2">Contact Us</a>
          </Link>
        </div>
        { /*end::Links */ }
      </div>
      { /*end::Footer */ }
    </div>
    { /* end::Authentication - Sign-in  */ }
  </div>
  )
}
export default Home;