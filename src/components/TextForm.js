import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpCase = ()=>{
        // console.log("This is UpperCase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!",'success');
    }
    const handleLoCase = ()=>{
        // console.log("This is UpperCase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!",'success');
    }
    const handleReset = ()=>{
        // console.log("This is UpperCase");
        // let newText = text.toLowerCase();
        setText("");
        props.showAlert("Cpilboard Cleared!",'success');
    }

    const handleOnChange=(event)=>{
        // console.log("This is onChange");
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!",'success');
    }
    const handleSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!",'success');
    }
    const empStr=(txt)=>{
      const a = txt.split(/\s+/);
      const re = a.filter(e => e)
      return re
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3 my-4">
        <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"placeholder ="Enter your text here" value={text} onChange={handleOnChange}
        ></textarea>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2" onClick={handleUpCase}>Convert To UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleLoCase}>Convert To LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-danger my-2 mx-2" onClick={handleReset}>Reset</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleSpace}>Remove Space</button>
      </div>
    </div>

    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(' ').length - 1} words and {text.length} characters</p> */}
        <p>{empStr(text).length} words and {text.length} characters</p>
        <p>{0.008 * empStr(text).length } Minutes read</p>
        <h2>Preview</h2>
        {text===''?"Nothing to preview":text}
    </div>
    </>
  );
}
