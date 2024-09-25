import React,{useState} from 'react'
import bgImg from '../../assets/img/blog-page-title-bg.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from './redux/dispatcher';

 function Signup() {
  const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2 : ''
    })

 const changeInputHandle = (e)=>{
       setUserData(prevState =>{
        return {...prevState, [e.target.name]: e.target.value}
       })
    }

    const handleSubmitButton = (e)=>{
      e.preventDefault();
      dispatch(registerUser(userData))
  }
  return (
    <>
    {/* <h2>singup</h2> */}
      <main className="main">

       {/* <!-- Page Title --> */}
    <div className="page-title dark-background" data-aos="fade" style={{backgroundImage:`url(${bgImg})` }}>
      <div className="container">
        <h1>Contact</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">Sign-Up</li>
          </ol>
        </nav>
      </div>
    </div>
    <section id="contact" className="contact section">

      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

         

          <div className="col-lg-12">
          <form  className="php-email-form" onSubmit={handleSubmitButton} > 

{/* <form action=""  className="php-email-form" 
data-aos="fade-up" data-aos-delay="500"  onSubmit={handleSubmitButton} > */}
              <div className="row gy-4">

                <div className="col-md-6">
<input type="text" name="name" className="form-control" placeholder="Your Name" required=""
value={userData.name}  onChange={changeInputHandle} />
                </div>

                <div className="col-md-6 ">
<input type="email" className="form-control" name="email" placeholder="Your Email" 
required="" value={userData.email}  onChange={changeInputHandle}/>
                </div>

                <div className="col-md-12">
<input type="password" className="form-control" name="password" placeholder="Password"
 required="" value={userData.password}  onChange={changeInputHandle} />
                </div>
                <div className="col-md-12">
<input type="password" className="form-control" name="password2" placeholder="Confirm Password" 
required="" value={userData.password2}  onChange={changeInputHandle}/>
                </div>

                {/* <div className="col-md-12">
                  <textarea className="form-control" name="about" rows="6" placeholder="About Your Self" required=""></textarea>
                </div> */}

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
export default Signup;