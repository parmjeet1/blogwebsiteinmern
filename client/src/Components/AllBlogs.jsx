import React from 'react'
import { Link } from 'react-router-dom'
import blogBg from '../assets/img/blog-page-title-bg.jpg'
import blog1 from '../assets/img/blog/blog-1.jpg';
import blog2 from '../assets/img/blog/blog-2.jpg';
import blog3 from '../assets/img/blog/blog-3.jpg';
import blog4 from '../assets/img/blog/blog-4.jpg';

function AllBlogs() {
  return (
    <>
       {/* <!-- Page Title --> */}
       <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: `url(${blogBg})` }}>

    {/* <div class="page-title dark-background" data-aos="fade" style="background-image: url(assets/img/blog-page-title-bg.jpg);"> */}
      <div class="container">
        <h1>Blog</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><Link to="./">Home</Link></li>
            <li class="current">Blog</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* <!-- End Page Title --> */}
    <section id="recent-posts" class="recent-posts section">

{/* <!-- Section Title --> */}
{/* <div class="container section-title" data-aos="fade-up">
  <h2>Recent Blog Posts</h2>

</div> */}
{/* <!-- End Section Title --> */}

<div class="container">

  <div class="row gy-5">

    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div class="post-box">
        <div class="post-img">
            <img src={blog1} class="img-fluid" /></div>
        <div class="meta">
          <span class="post-date">Tue, December 12</span>
          <span class="post-author"> / Julia Parker</span>
        </div>
        <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
        <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
        <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div class="post-box">
        <div class="post-img"><img src={blog2} class="img-fluid" /></div>
        <div class="meta">
          <span class="post-date">Fri, September 05</span>
          <span class="post-author"> / Mario Douglas</span>
        </div>
        <h3 class="post-title">Et repellendus molestiae qui est sed omnis</h3>
        <p>Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus...</p>
        <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="post-box">
        <div class="post-img"><img src={blog3} class="img-fluid" /></div>
        <div class="meta">
          <span class="post-date">Tue, July 27</span>
          <span class="post-author"> / Lisa Hunter</span>
        </div>
        <h3 class="post-title">Quia assumenda est et veritati</h3>
        <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam...</p>
        <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="post-box">
        <div class="post-img"><img src={blog4} class="img-fluid" /></div>
        <div class="meta">
          <span class="post-date">Tue, Sep 16</span>
          <span class="post-author"> / Mario Douglas</span>
        </div>
        <h3 class="post-title">Pariatur quia facilis similique deleniti</h3>
        <p>Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut quis omnis sint ipsum earum quia eligendi...</p>
        <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>
    </div>

  </div>

</div>

</section>
{/* <!-- /Recent Posts Section --> */}
    </>
  )
}
export default AllBlogs