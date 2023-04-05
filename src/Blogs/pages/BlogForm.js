import React, { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userId = auth.currentUser.uid;
        const blog = {
            title,
            description,
            userId,
        };

        try {
          
          const docRef=await addDoc(collection(db, "blogs"), {
                title,
                description,
                timestamp: serverTimestamp(),
                userId,
            });
            await updateDoc(docRef, { id: docRef.id });
            alert("success");
        } catch (err) {
            console.log(err);
        }

        setTitle("");
        setDescription("");
    };

    return (
        <div className="container my-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={handleDescriptionChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BlogForm;
