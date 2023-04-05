import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const blogsCollection = collection(db, "blogs");
            const blogsSnapshot = await getDocs(blogsCollection);
            const blogsData = blogsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBlogs(blogsData);
        };
        getBlogs();
    }, []);

    return <BlogList blogs={blogs} />;
};

export default HomePage;
