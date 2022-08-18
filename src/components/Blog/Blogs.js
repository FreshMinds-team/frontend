import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination/Pagination'
import { Link } from 'react-router-dom';
import './Blog.css'
const baseURL = 'https://api.npoint.io/b68e163f8b94cd52b6bf/DIV/'
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);  

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await axios.get(baseURL);
      setBlogs(res.data);
      setLoading(false);
      window.scrollTo(0, 0)
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!blogs) return null;

  return (
    <section className="section blog-wrap less-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div>
                {
                  currentBlogs.map((blog, index) => {
                    return (
                      <div key={index} className="col-lg-12 col-md-12 mb-5">
                        <div className="blog-item">
                          <div className="blog-thumb">
                            <div className="blog-item-meta mb-3 mt-4">
                              <h2 className="mt-3 mb-3"><Link to={"/news/" + blog.id}>{blog.TITLE}</Link></h2>
                            </div>
                            <img src={blog.IMAge} alt="" className="img-fluid " />
                          </div>
                          <div className="blog-item-content">
                            <div className="blog-item-meta mb-3 mt-4">
                              <span className="text-black text-capitalize mr-3"><i className="icofont-boy mr-2"></i> {blog.Author}</span>
                              <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-2"></i> {new Date().toISOString().slice(0, 10)}</span>
                            </div>
                            <p className="mb-4">{`${blog.BRIEF.substring(0, 250)}...`} <Link to={"/news/" + blog.id}>Read More <i className="icofont-simple-right ml-2 "></i></Link></p>                            
                          </div>
                          
                        </div>
                      </div>
                    )
                  }
                  )}</div>
              <Pagination
                postsPerPage={blogsPerPage}
                currentPage = {currentPage}
                totalPosts={blogs.length}
                paginate={paginate}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
              <div className="sidebar-widget latest-post mb-3">
                <h5>Popular News</h5>

                <div className="py-2">
                  <span className="text-sm text-muted">03 Mar 2018</span>
                  <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
                </div>

                <div className="py-2">
                  <span className="text-sm text-muted">03 Mar 2018</span>
                  <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
                </div>

                <div className="py-2">
                  <span className="text-sm text-muted">03 Mar 2018</span>
                  <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a></h6>
                </div>
              </div>

       



              

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs