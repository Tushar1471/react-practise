import React,{useState} from 'react'

export default function Textform({title,mode,btn}) {
const[text,setText] = useState("");

const handleUpClick=()=>{
  let newText = text.toUpperCase();
  setText(newText);
}
const handleloClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
}
const handleClrClick=()=>{
  let newText = "";
  setText(newText);
}

const handleChange=(event)=>{
  setText(event.target.value);
}


const handleExtraSpaces=()=>{
let word = text.split(' ');
let joinedWords = '';
word.forEach((element)=>{
if(element[0] !== undefined){
 joinedWords += element+ " ";
  
}

})
setText(joinedWords);
}





  return (
    <>
        <div className='container' style={{color: mode === 'dark'?'white':'black'}}>
  <h1 className='mt-3 mb-3'>{title}</h1>
<div className="mb-3" >
  <textarea className="form-control"  value={text}id="exampleFormControlTextarea1" style={{backgroundColor: mode === 'dark'?'#4c5258':'white',color: mode === 'dark'?'white':'black'}} onChange={handleChange} rows="8"></textarea>
</div>
    </div>
    <div className="container">
      <button className={`btn btn-${btn} mx-2`} onClick={handleUpClick}>Convert to Upper Case</button>
      <button className={`btn btn-${btn} mx-2`} onClick={handleloClick}>Convert to Lower Case</button>
      <button className={`btn btn-${btn} mx-2`} onClick={handleClrClick}>Clear Text</button>
      <button className={`btn btn-${btn} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <div className="content" style={{color: mode === 'dark'?'white':'black'}} >
      <h3 className='my-3'>{text.split(" ").length -1} words and {text.length} characters</h3>
    </div>
      </div>
  
    
    
    
    </>

  )
}
