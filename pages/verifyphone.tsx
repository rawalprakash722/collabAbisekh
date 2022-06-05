import React from 'react'

const VerifyPhone = () => {
  return (
    <div>
        
		<div className="d-flex flex-column flex-root">
			{/* <!--begin::Authentication - Two-stes --> */}
			{/* <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{backgroundImage: "url(assets/media/illustrations/sketchy-1/14.png)"}}>
				{/* <!--begin::Content-->rafce
                 */} 
				<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					{/* <!--begin::Logo--> */}
					{/* <a href="../../demo1/dist/index.html" className="mb-12">
						<img alt="Logo" src="assets/media/logos/logo-1.svg" className="h-40px" />
					</a> */}
					{/* <!--end::Logo-->
					<!--begin::Wrapper--> */}
					<div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						{/* <!--begin::Form--> */}
						<form className="form w-100 mb-10" novalidate="novalidate" data-kt-redirect-url="../../demo1/dist/index.html" id="kt_sing_in_two_steps_form">
							{/* <!--begin::Icon--> */}
							{/* <!--end::Icon-->
							<!--begin::Heading--> */}
							<div className="text-center mb-10">
								{/* <!--begin::Title--> */}
								<h1 className="text-dark mb-3">Verify Your Mobile Number</h1>
								{/* <!--end::Title--> */}
								{/* <!--begin::Sub-title--> */}
								<div className="text-muted fw-bold fs-5 mb-4 ">Enter the verification code we sent to</div>
								{/* <!--end::Sub-title--> */}
								{/* <!--begin::Mobile no--> */}
								{/* <!--end::Mobile no--> */}
							</div>
							{/* <!--end::Heading-->
							<!--begin::Section--> */}
							<div className="mb-10 px-md-10">
								{/* <!--begin::Label--> */}
								<div className="fw-bolder text-uppercase text-start text-dark fs-6 mt-4 mb-1 ms-1 text-center">Verification Code<sup style={{ color: "red" }}>*</sup></div>
								{/* <!--end::Label-->
								<!--begin::Input group--> */}
                                {/* value removed from input type */}
								<div className="veri-box d-flex flex-wrap flex-stack justify-content-center">
									<input type="text" data-inputmask="'mask': '9', 'placeholder': ''" maxLength="1" className="h-70px w-70px fs-2qx text-center me-3"  />
									<input type="text" data-inputmask="'mask': '9', 'placeholder': ''" maxLength="1" className="h-70px w-70px fs-2qx text-center me-3" />
									<input type="text" data-inputmask="'mask': '9', 'placeholder': ''" maxLength="1" className="h-70px w-70px fs-2qx text-center me-3"  />
									<input type="text" data-inputmask="'mask': '9', 'placeholder': ''" maxLength="1" className="h-70px w-70px fs-2qx text-center me-3"  />
								</div>
								{/* <!--begin::Input group--> */}
							</div>
							{/* <!--end::Section-->
							<!--begin::Submit--> */}                          
							<div className="create-acc d-flex flex-center">
								<button type="button" id="kt_sing_in_two_steps_submit" className="ggSign btn btn-flex flex-center p-3  btn-lg w-100 mb-5" style={{backgroundColor:"#180A0A"}}>
                                <img
                                   alt="Logo"
                                   src="logoGG.svg"
                                   className="h-20px me-3"
                                 />
									<span className="indicator-label text-white">Create a Genius Account</span>
									<span className="indicator-progress">Please wait...
									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
							</div>
							{/* <!--end::Submit--> */}
						</form>
						{/* <!--end::Form-->
						<!--begin::Notice--> */}
						<div className="text-center fw-bold fs-5">
							<span className="text-muted me-1">Didn’t get the code ?</span>
							<a href="#" className="link-primary fw-bolder fs-5 me-1">Resend</a>
							<span className="text-muted me-1">or</span>
							<a href="#" className="link-primary fw-bolder fs-5">Call Us</a>
						</div>
						{/* <!--end::Notice--> */}
					</div>
					{/* <!--end::Wrapper--> */}
				</div>
				{/* <!--end::Content-->				
			</div>
			{/* <!--end::Authentication - Two-stes--> */}
		</div>
    // </div>
  )
}

export default VerifyPhone