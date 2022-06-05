import type { NextPage } from 'next'
import Link from 'next/link'

const Register: NextPage = () => {
	
	
    return (
		<div className="d-flex flex-column flex-root">
			{ /*begin::Authentication - Sign-up  */}
			<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
				{ /*begin::Content */}
				<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					
					{ /*begin::Wrapper */}
					<div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						{ /*begin::Form */}
						<form className="form w-100"  id="kt_sign_up_form">
							{ /*begin::Heading */}
							<div className="mb-10 text-center">
                            <Link href="/">
                                <img src="http://goinggenius.com.np/gg-front/assets/img/logo-color.png" alt="GG Logistics Logo" className="h-100px" />
                            </Link>
								{ /*begin::Title */}
								<h1 className="text-dark mb-3">Create an Account</h1>
								{ /*end::Title */}
								{ /*begin::Link */}
								<div className="text-gray-400 fw-bold fs-4">Already have an account?
                                <Link href="/login">
								    <a className="link-primary fw-bolder">Sign in here</a>
                                </Link>
                                </div>
								{ /*end::Link */}
							</div>
							{ /*end::Heading */}
							{ /*begin::Action */}
                            <Link href="/">
							        <button type="button" className="btn btn-light-primary fw-bolder w-100 mb-3">
							           <img alt=" Logo" src="assets/media/svg/brand-logos/gg_logo.png" className="h-20px me-3" />
                                       Sign in with GG User
                                    </button>
                                </Link>
                                <Link href="/">
							        <button type="button" className="btn btn-light-primary fw-bolder w-100 mb-10">
							           <img alt=" Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />
                                       Sign in with Google
                                    </button>
                                </Link>
							{ /*end::Action */}
							{ /*begin::Separator */}
							<div className="d-flex align-items-center mb-10">
								<div className="border-bottom border-gray-300 mw-50 w-100"></div>
								<span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
								<div className="border-bottom border-gray-300 mw-50 w-100"></div>
							</div>
							{ /*end::Separator */}
							{ /*begin::Input group */}
							<div className="row fv-row mb-7">
								{ /*begin::Col */}
								<div className="col-xl-6">
									<label className="form-label fw-bolder text-dark fs-6">First Name</label>
									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autoComplete="off" />
								</div>
								{ /*end::Col */}
								{ /*begin::Col */}
								<div className="col-xl-6">
									<label className="form-label fw-bolder text-dark fs-6">Last Name</label>
									<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autoComplete="off" />
								</div>
								{ /*end::Col */}
							</div>
							{ /*end::Input group */}
							{ /*begin::Input group */}
							<div className="fv-row mb-7">
								<label className="form-label fw-bolder text-dark fs-6">Email</label>
								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autoComplete="off" />
							</div>
							{ /*end::Input group */}
							{ /*begin::Input group */}
							<div className="mb-10 fv-row" data-kt-password-meter="true">
								{ /*begin::Wrapper */}
								<div className="mb-1">
									{ /*begin::Label */}
									<label className="form-label fw-bolder text-dark fs-6">Password</label>
									{ /*end::Label */}
									{ /*begin::Input wrapper */}
									<div className="position-relative mb-3">
										<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autoComplete="off" />
										<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
											<i className="bi bi-eye-slash fs-2"></i>
											<i className="bi bi-eye fs-2 d-none"></i>
										</span>
									</div>
									{ /*end::Input wrapper */}
									{ /*begin::Meter */}
									<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
										<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
									</div>
									{ /*end::Meter */}
								</div>
								{ /*end::Wrapper */}
								{ /*begin::Hint */}
								<div className="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
								{ /*end::Hint */}
							</div>
							{ /*end::Input group= */}
							{ /*begin::Input group */}
							<div className="fv-row mb-5">
								<label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
								<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autoComplete="off" />
							</div>
							{ /*end::Input group */}
							{ /*begin::Input group */}
							<div className="fv-row mb-10">
								<label className="form-check form-check-custom form-check-solid form-check-inline">
									<input className="form-check-input" type="checkbox" name="toc" value="1" />
									<span className="form-check-label fw-bold text-gray-700 fs-6">I Agree
									<a href="#" className="ms-1 link-primary">Terms and conditions</a>.</span>
								</label>
							</div>
							{ /*end::Input group */}
							{ /*begin::Actions */}
							<div className="text-center">
								<button type="button" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
									<span className="indicator-label">Submit</span>
									<span className="indicator-progress">Please wait...
									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
							</div>
							{ /*end::Actions */}
						</form>
						{ /*end::Form */}
					</div>
					{ /*end::Wrapper */}
				</div>
				{ /*end::Content */}
				{ /*begin::Footer */}
				<div className="d-flex flex-center flex-column-auto p-10">
					{ /*begin::Links */}
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
					{ /*end::Links */}
				</div>
				{ /*end::Footer */}
			</div>
			{ /*end::Authentication - Sign-up */}
		</div>
		)
}
export default Register;