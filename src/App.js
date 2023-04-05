import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Users/pages/Login";
import SignUp from "./Users/pages/SignUp";
import HomePage from "./Blogs/pages/HomePage";
import Navbar from "./shared/components/Navbar";
import BlogForm from "./Blogs/pages/BlogForm";
import { AuthContext } from "./context/AuthContext";

const App = () => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/signup" element={<SignUp />} exact />
                <Route path="/create" element={<BlogForm />} exact />
            </Routes>
        </>
    );
};

export default App;
