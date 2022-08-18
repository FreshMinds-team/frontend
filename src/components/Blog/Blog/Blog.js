import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const baseURL = 'https://api.npoint.io/b68e163f8b94cd52b6bf/DIV/'
const Blog = () => {
    let { blogId } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        axios.get(baseURL + blogId).then((response) => {
            setBlog(response.data);
        });
    }, []);

    if (!blog) return null;
    return (
        <>
        <Header />
            <div className="container top-nn">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <div className="single-blog-item">
                                    <h2 className="mb-4 text-md">{blog.TITLE}</h2>
                                    <div className="blog-item-meta mb-3">
                                        <span className="text-black text-capitalize mr-3"><i className="icofont-boy mr-2"></i> {blog.Author}</span>
                                        <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-2"></i> {new Date().toISOString().slice(0, 10)}</span>
                                    </div>
                                    <img src={blog.IMAge} alt="" className="img-fluid" />
                                    <div className="blog-item-content mt-5">
                                        <p>
                                            {blog.BRIEF}
                                        </p>
                                        <div className="mt-5 clearfix">
                                            <ul className="float-right list-inline">
                                                <li className="list-inline-item"> Share: </li>
                                                <li className="list-inline-item"><a href="#!"><i className="icofont-facebook"></i></a></li>
                                                <li className="list-inline-item"><a href="#!"><i className="icofont-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#!"><i className="icofont-pinterest"></i></a></li>
                                                <li className="list-inline-item"><a href="#!"><i className="icofont-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-widget latest-post mb-3">
                            <h5>Latest Posts</h5>

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
            <Footer />
        </>

    )
}

export default Blog