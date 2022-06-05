import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center " style={{minHeight:"100vh"}}>
      <div className="bg-white p-5 rounded shadow-sm">
        <Link href="/">
            <img src="http://goinggenius.com.np/gg-front/assets/img/logo-color.png" alt="GG Logistics Logo" />
        </Link>
        <h1 className="text-dark mb-3">Going Genius</h1>
        <p>
        Going Genius provides services that provide additional value to your ideas. Connect with us today and transform your vision into reality.
        </p>
        {/* login and register buttons */}
        <div className="d-flex flex-row justify-content-center">
          <Link href="/login">
            <a className="btn btn-primary btn-lg" style={{
              marginRight: "1rem"
            }}>Login</a>
          </Link>
          <Link href="/register">
            <a className="btn btn-primary btn-lg ">Register</a>
          </Link>
          </div>
      </div>
    </div>
  )
}

export default Home
