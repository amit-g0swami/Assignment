import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { db } from "./firebase";
import firebase from "firebase";
import "./Uploader.css";

function ImageUpload({ realname, username }) {
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");
    const [title, setTitle] = useState("");

    const handleUpload = () => {
        db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: image,
            username: username,
            title: title,
        });
        setCaption("");
        setImage("");
        setTitle("");
    };

    return (
        <div className="imageupload">
            <input
                type="text"
                placeholder="Enter a description..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text"
                placeholder="Enter a image  url..."
                value={image}
                onChange={(e) => setImage(e.target.value)} />
            {image ? (
                <Button onClick={handleUpload} style={{ color: "white" }}>Upload</Button>
            ) : (
                <p style={{ color: "white" }}>Please select an image</p>
            )}
        </div>
    );
}

export default ImageUpload;