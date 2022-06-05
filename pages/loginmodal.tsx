import {Modal , Button} from 'react-bootstrap'
import React from 'react'
import Signin from './signin';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter ">
        <a href="../../demo1/dist/index.html" className="logi mb-12">
						<img alt="Logo" src="https://goinggenius.com.np/gg-front/assets/img/brandLogoBlack.png" className="h-50px" />
					</a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Signin />
      </Modal.Body>
    </Modal>
  );
}

function PopupSignin() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default PopupSignin