import React from "react";
import { BsFillEyeFill, BsShareFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const BlogCard = ({ title, description, userId }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="card-title mb-0">{title}</h5>
                    <div>
                        <button className="btn btn-light me-2">
                            <BsFillEyeFill /> View
                        </button>
                        <button className="btn btn-light">
                            <BsShareFill /> Share
                        </button>
                    </div>
                </div>
                <p className="card-text">{description}</p>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <FaUserCircle className="me-2" size={24} />
                        <p className="mb-0">{userId}</p>
                    </div>
                    {/* <p className="mb-0">6 hours ago</p> */}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
