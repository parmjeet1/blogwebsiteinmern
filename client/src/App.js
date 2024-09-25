
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AllBlogs from './Components/AllBlogs';
import Footer from './Components/Footer';
import Signup from './Components/signup/Signup';
import Login from './Components//signin/Login'
import SingleBlog from './Components/SingleBlog'
import Nav from './Components/Nav';
import CreatePost from './Components/post/createPost/CreatePost';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Routes>
         <Route path="/" element={<Home />} />
         blogs
         <Route path="/blogs" element={<AllBlogs />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         
         <Route path="/single-blog" element={<SingleBlog />} />
         {/* <Route path="/post/create" element={<CreatePost />} /> */}
<Route path='/post/create' element={<ProtectedRoute element={CreatePost} />} />
         

           {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
          </Routes>
          <Footer />
      </div>
    </Router>

    </>
  );
}

export default App;
