import React,{useState} from 'react'


export default function Text(props) {
    const [text,settext]=useState('');
 const onhandle=()=>{
        console.log('yes');
        let newtex=text.toUpperCase();
        settext(newtex);
        props.salt("Converted into the UpperCase","Success");
    }
    const onhand=()=>{
        settext('');
        props.salt("Cleared","Success");
    }
    let a=text;
    const onchan=(event)=>{
        settext('');
       settext(event.target.value);
    }
  
  const onhand2=()=>{
    let newt=text.split(/[ ]+/);
    settext(newt.join(" "));
    props.salt("Extra Space Removed","Success");
  }
  return (
   
   <div>
    
<h1>{props.heading}</h1>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onchan} rows="5"></textarea>
</div>
<div class="container" id="d1">
<button type="button" class="btn btn-primary" onClick={onhandle} id="one">Convert</button>
<button type="button" class="btn btn-primary" onClick={onhand} id="two">Reset</button>
<button type="button" class="btn btn-primary" onClick={onhand2} id="four">Remove Extra Spaces</button>
</div>
<div class="container">
    <h1>Your text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} Characters</p>
    <p>{0.004*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes To Read</p>
</div>
<div class="container">
    <h1>Preview</h1>
    <p>{text}</p>
</div>

</div>
  )
}
