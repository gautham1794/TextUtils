import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("UpperCase was Clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase is done", "success");
  }

  const handleLoClick = () => {
    console.log("LowerCase was Clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase is done", "success");
  }
  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }


  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  }

  const handleCopyText = () => {
    const text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clickboard", "success");
  }

  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="mybox" onChange={handleOnChange} style={{
            backgroundColor: props.mode === 'dark' ? '#030a3c' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }} value={text} rows="8"></textarea>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        </div>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charcters</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>

      </div>

    </>
  )
}
