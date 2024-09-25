import React, { useState } from 'react'
import bgImg from '../../assets/img/blog-page-title-bg.jpg'
// import { Link,useNavigate  } from 'react-router-dom';
import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginUser } from './redux/dispatcher';
 function Login() {
  // const navigate = useNavigate();
  const dispatch= useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
})

const changeInputHandle = (e)=>{
   setUserData(prevState =>{
    return {...prevState, [e.target.name]: e.target.value}
   })
}

 const handleSubmitButton = (e)=>{
  e.preventDefault();
  console.log(userData);

  dispatch(loginUser(userData));

}

  return (
    <>
      <main className="main">

     <div className="page-title dark-background" data-aos="fade" style={{backgroundImage:`url(${bgImg})` }}>
      <div className="container">
        <h1>Login</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">Login</li>
          </ol>
        </nav>
      </div>
    </div>
    <section id="contact" className="contact section">

      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

         

          <div className="col-lg-12">
            <form  onSubmit={handleSubmitButton} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">

              <div className="col-md-12">
<input type="email" className="form-control" name="email" onChange={changeInputHandle} value={userData.email} placeholder="Email" required=""/>
                </div>

                <div className="col-md-12">
<input type="password" className="form-control" name="password" onChange={changeInputHandle}  value={userData.password}   placeholder="Password" required=""/>
                </div>

               

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Submit</button>
                </div>

              </div>
            </form>
          </div>
          {/* <!-- End Contact Form --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Contact Section --> */}
    </main>
    {/* <!-- End Page Title --> */}
    </>
  )
}
export default Login;