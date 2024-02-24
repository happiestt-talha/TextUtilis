import React from 'react'

export default function Textform(props) {
    return (
        <>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )
}
