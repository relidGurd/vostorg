'use client'
import React, { FC, useEffect, useRef, useState, forwardRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false
});

const AddNews = forwardRef((props, ref) => {
    const [value, setValue] = useState('');
    const quillRef = useRef(null);
    const [data, setData] = useState<any>(undefined);

    useEffect(() => {
        console.log(quillRef.current);
    }, [quillRef]);

    const toolbarOptions = [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
    ];

    const modules = {
        toolbar: toolbarOptions
    };

    const handlerAddNewsButton = () => {
        console.log(quillRef);
        setData(value);
        setValue('');
    };

    console.log(data);

    return (
        <div>
            <ReactQuill ref={ref} modules={modules} theme="snow" value={value} onChange={setValue} />
            <button onClick={handlerAddNewsButton}>
                Нажми
            </button>
            <h2>ПРИВЕТ</h2>
            {data && (
                <div dangerouslySetInnerHTML={{ __html: data }}></div>
            )}
        </div>
    );
});

export default AddNews;