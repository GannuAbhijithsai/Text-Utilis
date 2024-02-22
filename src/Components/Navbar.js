import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link}  from 'react-router-dom'


export default function Navbar(props) {
    const [text,settext]=useState('Enable Dark Mode');
    const onhandle=()=>{

    }

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" >{props.title}</Link>
{/*here props.title is a variable we use it . we assign it in the App.js similarly we can use many variable */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
     
      </ul>
    </div>
    <div class="d-flex">
      <div class="bg-primary rounded mx-2" onClick={()=>{props.tg('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
      <div class="bg-success rounded mx-2" onClick={()=>{props.tg('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      <div class="bg-danger rounded mx-2" onClick={()=>{props.tg('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      <div class="bg-warning rounded mx-2" onClick={()=>{props.tg('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      <div class="bg-light rounded mx-2" onClick={()=>{props.tg('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
    </div>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox"onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode=='light'?'dark Mode':'light Mode'}</label>
</div>

   

   

  </div>
</nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired}
{/* similarly we can declare for other variables also and we can also make default proptypes */}
{/*This isRequired property tell the variable should be assigned anything */}
Navbar.defaultProps={title:'TextUtilis'}
{/*this we take varaible type defaulty */}


