import React, { useState,useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import MenuHome from '../components/Navbar/menu_home';
import {
  Button,Modal
} from "react-bootstrap";
const Services = () => {
  const navigate = useNavigate();


  const rand = 1 + Math.random() * (100 - 1);
  var url = "http://localhost/cgi-enabled/index.py?random="+rand;
  const layer = useRef(url);
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    navigate('/pop/product');
    //setShow(true)
    e.currentTarget.blur()
  };
  const change = () => {
    setInput(!input);
    console.log(layer.current)
    console.log('change')

  const rand = 1 + Math.random() * (100 - 1);
  var url = "http://localhost/cgi-enabled/index.py?random="+rand;
    layer.current = url;
  };
  const handleClose = () => setShow(false);
  function makeDog(e) {
    console.log(e)
    const rand = 1 + Math.random() * (100 - 1);
    console.log('Erro')
    e.target.setAttribute( 'src', 'http://localhost/cgi-enabled/index.py?random='+rand);
    e.target.setAttribute('alt', 'dog');
  }
  const [input, setInput] = useState(true);
  
  return (

    <div className="d-flex" id="wrapper">
    <div id="page-content-wrapper">
    <MenuHome/>
        <div className="container-fluid" style={{"backgroundColor":"white", height:"94.3vh", padding:"0"}}>
        
        <img src={require("./ocean2.jpg")} style={{width:"100%", height:"100%",Zindex: "auto"}} alt="cosppac logo"/>
        
        <p id="portal">Pacific Ocean Portal</p>
        <button id="tourism"className='btn btn-warning' onClick={handleShow}>Explore More!</button>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Home of Ocean Sciences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={layer.current} key={input} style={{width:"100%", height:"100%",Zindex: "auto"}} onClick={makeDog} alt="Loading..."/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={change}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>

  );
};

export default Services;
