import React, {useState} from "react";

export default function TextForm(props) {
    const handelUpClick = () =>{
                //console.log("Upper case was clicked " +text)
                let newText = text.toUpperCase();
                setText(newText)
                props.showAlert("Coverted to Uppercase", "success");
    }

    const handelLowClick = () =>{
        //console.log("Upper case was clicked " +text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to Lowercase", "success");
    }

    const handelTitleClick = () => {
        let newText = text.split(' ').map(function (word, index) {
            // First character upper case else lower case
            return word.charAt(0)
            .toUpperCase() + word.slice(1)
            .toLowerCase();
        })
        .join(' ');
        setText(newText);
        props.showAlert("Coverted to Titlecase", "success");
    };


    const handelClearClick = () =>{
        //console.log("Upper case was clicked " +text)
        let newText ='';
        setText(newText)
        props.showAlert("Text was Cleared", "success");
    }

    const handelOnChange = (event) =>{
        //console.log("On Change")
        setText(event.target.value)
    }
    
    const handelCopy =() =>{
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text was Copied to clipboard!", "success");
    }

    const handelExtraSpace= () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces were removed", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label">
                </label>
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'#333030':'white',color: props.mode==='dark'?'white':'black'}} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-1 my-1" onClick={handelUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-1 my-1" onClick={handelLowClick}>Convert to Lowercase</button>
            <button className="btn btn-success mx-1 my-1" onClick={handelTitleClick}>Convert to Titlecase</button>
            <button className="btn btn-success mx-1 my-1" onClick={handelCopy}>Copy Text</button>
            <button className="btn btn-success mx-1 my-1" onClick={handelExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-success mx-1 my-1" onClick={handelClearClick}>Clear Text</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary:</h2>
            <p>{text.split(/\s+/).filter(word => word !== '').length} words, {text.length} charecters</p>
            <p>{0.008 * text.split(/\s+/).filter(word => word !== '').length} Minutes to read</p>
            <h3>Text Preview:</h3>
            <p>{text.length>0?text:"Enter Some text in the above textbox to preview it here..!"}</p>
        </div>
        </>
  );
}