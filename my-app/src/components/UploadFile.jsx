import React, { useState,  useRef } from 'react';
import classes from "./UploadFile.module.css"
export const UploadFile = () => {
    const filePicker = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();
    
    const hostUrl = 'https://localhost:7065/api/ComicPhotos/savePhoto'

    const handleChange = (e) => {
        console.log(e.target.files);
        setSelectedFile(e.target.files[0])
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Select file");
            return;
        };

        const formData = new FormData();
        formData.append('file', selectedFile);

        const res = await fetch(hostUrl, {
            method: 'POST',
            body: formData,
        });
        console.log(res)
    };

    const handlePick= () => {
        filePicker.current.click();
    }

    return (
        <>
        <button onClick={handlePick}>Pick file</button>
            <input 
                ref={filePicker}
                className={classes.hidden}
                type="file"
                onChange={handleChange}
                accept="image/*,.png,.jpg"
            />
            
            <button onClick={handleUpload}>Upload now!</button>
            
        </>
    );
};

export default UploadFile;