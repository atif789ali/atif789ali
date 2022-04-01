import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Upper case was Clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to upper Case!!!", "success" )
    } 
    
    const handleLowClick = ()=>{
        // console.log("Upper case was Clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to lower Case!!!", "success" )
    } 
    
    const handleClearClick = ()=>{
        // console.log("Upper case was Clicked" + text);
        let newText = (''); 
        setText(newText);
        props.showAlert("Clear!!!", "success" )

    } 

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy Text to clipboard!!!", "success" )

    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Handle Extra Spaces!!!", "success" )
    }

    const handleOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }

    

    const [text, setText] = useState('');
    // text = "Enter new text"; //Wrong way to change the state
    // setText("Enter new text"); //Correct way to change the state


  return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1><b> {props.heading}</b></h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'white':'gray', color:props.mode==='dark'?'gray':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Click</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Click</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2><b>Your text summary</b></h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>      
        <p>{0.008 * text.split(" ").length} minutes read</p>      
        <h2><b>Preview</b></h2>
        <p>{text.length>0?text:"Enter Something here to preview it......"}</p>
      </div>
      </>
  )
}
