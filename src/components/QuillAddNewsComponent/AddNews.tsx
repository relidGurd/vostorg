'use client'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddNews() {
    const [value, setValue] = useState('');


    const [data, setData] = useState<any>(undefined)


    const toolbarOptions = [['link', 'image']];
    const modules = {
        toolbar: toolbarOptions
    }

    const handlerAddNewsButton = () => {
        setData(value)
        setValue('')
    }



    console.log(data)
    return (
        <div>
            <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
            <button onClick={handlerAddNewsButton}>
                Нажми
            </button>
            <h2>ПРИВЕТ</h2>
                {data && (
                    <div dangerouslySetInnerHTML={{ __html: data }}></div>
                )}
        </div>
    )}



export default AddNews