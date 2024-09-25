import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React,{useState} from 'react'
import bgImg from '../../../assets/img/blog-page-title-bg.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { registerUser } from './redux/dispatcher';
 function CreatePost() {
    
    const dispatch = useDispatch();
  const [title, setTitle]=useState("");
  const [thumbnail, setThumbnail]=useState("");
  const [description, setDescription]=useState("");
  const [category, setCategory]=useState("");
const  POST_CATEGORY=['Agricluture','Technology','Health','Education','Entertainment'];
 const changeInputHandle = (e)=>{
     
    }

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    

    const handleCreatePost =(e)=>{
      e.preventDefault();
      console.log(title,thumbnail,description,category);
    //   dispatch(registerUser(userData))
  }
  return (
    <>
    {/* <h2>singup</h2> */}
      <main className="main">

       {/* <!-- Page Title --> */}
    <div className="page-title dark-background" data-aos="fade"
     style={{backgroundImage:`url(${bgImg})` }}>
      <div className="container">
        <h1>Create Post</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">Create Post</li>
          </ol>
        </nav>
      </div>
    </div>
    <section id="contact" className="contact section">

      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
        <div className="col-lg-12">
          <form  className="php-email-form" onSubmit={handleCreatePost} > 

              <div className="row gy-4">

                <div className="col-md-6">
<input type="text" name="title" className="form-control" placeholder="Post Title" required=""
value={title}  onChange={(e)=>setTitle(e.target.value) } />
                </div>

                <div className="col-md-6 ">
                    <select className="form-control" name="category" 
                    
                    
                    onChange={(e)=>setCategory(e.target.value) }  >
<option value={''}>Select Category</option>
{
    POST_CATEGORY.map((category,index)=><option value={category} key={index}>{category}</option> )
}

                    </select>

                </div>

                
                <div className="col-md-12">
<input type="file" accept='jpg.jpeg,png'  className="form-control" name="thumbnail" placeholder="thumbnail" 
required=""   onChange={(e)=>setThumbnail(e.target.files[0]) }/>
                </div>

                <div className="col-md-12">
                <ReactQuill  modules={modules} formats={formats} theme="snow" value={description} onChange={setDescription} />

                  {/* <textarea className="form-control" name="description" rows="6" 
                  placeholder="Post Description" required="" value={description}
                  onChange={(e)=>setDescription(e.target.files[0])} ></textarea> */}
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
    </main>

    </>
  )
}
export default CreatePost;
