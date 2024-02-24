import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter Text...')
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const uppercase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase", "success");
    }
    const lowerrcase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase", "success");
    }
    const remSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "warning");
    }
    const CopyTxt = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard", "success");
    }
    const clearBox = () => {
        setText("")
        props.showAlert("Text cleared", "danger");
    }
    return (
        <>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                <label htmlFor="textBox" className="form-label">Example textarea</label>
                <textarea onChange={handleOnChange} value={text} className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="textBox" rows="8"></textarea>
            </div>
            <div className="container buttons mb-3 d-flex justify-content-evenly">
                <div onClick={uppercase} className="btn btn-primary mx-1">Upper case</div>
                <div onClick={lowerrcase} className="btn btn-primary mx-1">Lower case</div>
                <div onClick={remSpace} className="btn btn-primary mx-1">Remove Spaces</div>
                <div onClick={CopyTxt} className="btn btn-primary mx-1">Copy</div>
                <div onClick={clearBox} className="btn btn-primary mx-1">Clear Box</div>
            </div>
        </>
    )
}
