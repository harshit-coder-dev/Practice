import React, { useState } from "react";

export default function TextForm(props) {

    const handleOnChange=(event)=>{
        // console.log("hjhi")
        setText(event.target.value)
    }

    const handleClearClick=()=>{
        // console.log("Ji"+text);
        let newText=""
        setText(newText);
    }

    const handleUpClick=()=>{
        // console.log("Ji"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        // console.log("Ji"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleCopyClick=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      console.log(newText)
      setText(newText.join(" "));
    }


  const [text, setText] = useState("Enter text here");
//   text="new hi" //Wrong way
//   setText("hi") // Correct way
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#041b45"}}>
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{background:props.mode==="dark"?"grey":"white" ,color:props.mode==="dark"?"white":"#041b45"}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text above to preview it"}</p>
    </div>
    </>
  );
}
