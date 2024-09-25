import React from 'react'
import bgImage from '../assets/img/blog-page-title-bg.jpg'
import { Link } from 'react-router-dom';

import blog1 from '../assets/img/blog/blog-1.jpg';
import blog2 from '../assets/img/blog/blog-2.jpg';
import blog3 from '../assets/img/blog/blog-3.jpg';
import blog4 from '../assets/img/blog/blog-4.jpg';
import blog5 from '../assets/img/blog/blog-4.jpg';
import postImage1 from '../assets/img/blog/blog-inside-post.jpg';
import authorImage from '../assets/img/blog/blog-author.jpg';
 function SingleBlog() {
  return (
    <>
      <main class="main">
      {/* <!-- Page Title --> */}
    <div class="page-title dark-background" data-aos="fade" style={{ backgroundImage: `url(${bgImage})` }}>
      <div class="container">
        <h1>Blog Details</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li class="current">Blog Details</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="row">

        <div class="col-lg-8">

          {/* <!-- Blog Details Section --> */}
          <section id="blog-details" class="blog-details section">
            <div class="container">

              <article class="article">

                <div class="post-img">
                  <img src={blog1} class="img-fluid"/>
                </div>

                <h2 class="title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h2>

                <div class="meta-top">
                  <ul>
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <Link to="blog-details.html">John Doe</Link></li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <Link to="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></Link></li>
                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <Link to="blog-details.html">12 Comments</Link></li>
                  </ul>
                </div>
                {/* <!-- End meta top --> */}

                <div class="content">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                  </p>

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                  </p>

                  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                    </p>
                  </blockquote>

                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                    Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                    Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>

                  <h3>Et quae iure vel ut odit alias.</h3>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                    Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                    Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                  </p>
                  <img src={postImage1} class="img-fluid"/>

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                  </p>

                </div>
                {/* <!-- End post content --> */}

                <div class="meta-bottom">
                  <i class="bi bi-folder"></i>
                  <ul class="cats">
                    <li><Link to="#">Business</Link></li>
                  </ul>

                  <i class="bi bi-tags"></i>
                  <ul class="tags">
                    <li><Link to="#">Creative</Link></li>
                    <li><Link to="#">Tips</Link></li>
                    <li><Link to="#">Marketing</Link></li>
                  </ul>
                </div>
                {/* <!-- End meta bottom --> */}

              </article>

            </div>
          </section>
          {/* <!-- /Blog Details Section --> */}

          {/* <!-- Blog Author Section --> */}
          <section id="blog-author" class="blog-author section">

            <div class="container">
              <div class="author-container d-flex align-items-center">
<img src={authorImage} class="rounded-circle flex-shrink-0"/>
                <div>
                  <h4>Jane Smith</h4>
                  <div class="social-links">
                    <Link to="https://x.com/#"><i class="bi bi-twitter-x"></i></Link>
                    <Link to="https://facebook.com/#"><i class="bi bi-facebook"></i></Link>
                    <Link to="https://instagram.com/#"><i class="biu bi-instagram"></i></Link>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                  </p>
                </div>
              </div>
            </div>

          </section>
          {/* <!-- /Blog Author Section --> */}

          {/* <!-- Blog Comments Section --> */}
          <section id="blog-comments" class="blog-comments section">

            <div class="container">

              <h4 class="comments-count">8 Comments</h4>

              <div id="comment-1" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                  <img src={authorImage}/></div>
                  <div>
                    <h5><Link to="">Georgia Reader</Link> <Link to="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</Link></h5>
                    <time datetime="2020-01-01">01 Jan,2022</time>
                    <p>
                      Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                      Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End comment #1 --> */}

              <div id="comment-2" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                  <img src={authorImage}/></div>
                  <div>
                    <h5><Link to="">Aron Alvarado</Link> <Link to="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</Link></h5>
                    <time datetime="2020-01-01">01 Jan,2022</time>
                    <p>
                      Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                    </p>
                  </div>
                </div>

                <div id="comment-reply-1" class="comment comment-reply">
                  <div class="d-flex">
                    <div class="comment-img">
                    <img src={authorImage}/></div>
                    <div>
                      <h5><Link to="">Lynda Small</Link> <Link to="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</Link></h5>
                      <time datetime="2020-01-01">01 Jan,2022</time>
                      <p>
                        Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.

                        Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat.

                        Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.
                      </p>
                    </div>
                  </div>

                  <div id="comment-reply-2" class="comment comment-reply">
                    <div class="d-flex">
                      <div class="comment-img">
                      <img src={authorImage}/></div>
                      <div>
                        <h5><Link to="">Sianna Ramsay</Link> <Link to="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</Link></h5>
                        <time datetime="2020-01-01">01 Jan,2022</time>
                        <p>
                          Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.
                        </p>
                      </div>
                    </div>

                  </div>
                  {/* <!-- End comment reply #2--> */}

                </div>
                {/* <!-- End comment reply #1--> */}

              </div>
              {/* <!-- End comment #2--> */}

              <div id="comment-3" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                  <img src={authorImage}/></div>
                  <div>
                    <h5><Link to="">Nolan Davidson</Link> <Link to="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</Link></h5>
                    <time datetime="2020-01-01">01 Jan,2022</time>
                    <p>
                      Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at.
                      Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.
                    </p>
                  </div>
                </div>

              </div>
              {/* <!-- End comment #3 --> */}

              <div id="comment-4" class="comment">
                <div class="d-flex">
                  <div class="comment-img">
                  <img src={authorImage}/></div>
                  <div>
                    <h5><Link to="">Kay Duggan</Link> <Link to="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</Link></h5>
                    <time datetime="2020-01-01">01 Jan,2022</time>
                    <p>
                      Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.
                    </p>
                  </div>
                </div>

              </div>
              {/* <!-- End comment #4 --> */}

            </div>

          </section>
          {/* <!-- /Blog Comments Section --> */}

          {/* <!-- Comment Form Section --> */}
          <section id="comment-form" class="comment-form section">
            <div class="container">

              <form action="">

                <h4>Post Comment</h4>
                <p>Your email address will not be published. Required fields are marked * </p>
                <div class="row">
                  <div class="col-md-6 form-group">
<input name="name" type="text" class="form-control" placeholder="Your Name*"/>
                  </div>
                  <div class="col-md-6 form-group">
<input name="email" type="text" class="form-control" placeholder="Your Email*"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col form-group">
<input name="website" type="text" class="form-control" placeholder="Your Website"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col form-group">
                    <textarea name="comment" class="form-control" placeholder="Your Comment*"></textarea>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Post Comment</button>
                </div>

              </form>

            </div>
          </section>
          {/* <!-- /Comment Form Section --> */}

        </div>

        <div class="col-lg-4 sidebar">

          <div class="widgets-container">

            {/* <!-- Search Widget --> */}
            <div class="search-widget widget-item">

              <h3 class="widget-title">Search</h3>
              <form action="">
                <input type="text"/>
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
              </form>

            </div>
            {/* <!--/Search Widget --> */}

            {/* <!-- Categories Widget --> */}
            <div class="categories-widget widget-item">

              <h3 class="widget-title">Categories</h3>
              <ul class="mt-3">
                <li><Link to="#">General <span>(25)</span></Link></li>
                <li><Link to="#">Lifestyle <span>(12)</span></Link></li>
                <li><Link to="#">Travel <span>(5)</span></Link></li>
                <li><Link to="#">Design <span>(22)</span></Link></li>
                <li><Link to="#">Creative <span>(8)</span></Link></li>
                <li><Link to="#">Educaion <span>(14)</span></Link></li>
              </ul>

            </div>
            {/* <!--/Categories Widget --> */}

            {/* <!-- Recent Posts Widget --> */}
            <div class="recent-posts-widget widget-item">

              <h3 class="widget-title">Recent Posts</h3>

              <div class="post-item">
                 <img src={blog1} class="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html">Nihil blanditiis at in nihil autem</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div class="post-item">
                <img src={blog1} class="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html">Quidem autem et impedit</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div class="post-item">
                 <img src={blog3} class="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html">Id quia et et ut maxime similique occaecati ut</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div class="post-item">
                 <img src={blog4} class="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html">Laborum corporis quo dara net para</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div class="post-item">
                <img src={blog5} class="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html">Et dolores corrupti quae illo quod dolor</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

            </div>
            {/* <!--/Recent Posts Widget --> */}

            {/* <!-- Tags Widget --> */}
            <div class="tags-widget widget-item">

              <h3 class="widget-title">Tags</h3>
              <ul>
                <li><Link to="#">App</Link></li>
                <li><Link to="#">IT</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Mac</Link></li>
                <li><Link to="#">Design</Link></li>
                <li><Link to="#">Office</Link></li>
                <li><Link to="#">Creative</Link></li>
                <li><Link to="#">Studio</Link></li>
                <li><Link to="#">Smart</Link></li>
                <li><Link to="#">Tips</Link></li>
                <li><Link to="#">Marketing</Link></li>
              </ul>

            </div>
            {/* <!--/Tags Widget --> */}

          </div>

        </div>

      </div>
    </div>
    {/* <!-- End Page Title --> */}
     </main> 
    </>
     

  )
}
export default SingleBlog;