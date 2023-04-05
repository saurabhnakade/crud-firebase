import React from "react";
import BlogCard from "./BlogCard";

const BlogList = (props) => {
    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
                {props.blogs.map((blog) => (
                    <div className="col-md-4" key={blog.id}>
                        <BlogCard
                            title={blog.title}
                            description={blog.description}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
