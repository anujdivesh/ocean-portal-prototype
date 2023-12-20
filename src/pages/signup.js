import React, { useEffect, useRef, useState } from 'react';
import * as L from "leaflet";
import "leaflet-side-by-side";
import "./L.TileLayer.BetterWMS";
import {addaccesss, addEEZ} from "./helper";
import Menu from '../components/Navbar/menu';
import './button.css';
import './range.css';
import './style.css';
import {
  Button,Modal
} from "react-bootstrap";


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const SignUp = () => {
  const ipAddress="services.gsd.spc.int:8080";
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [address, setAddress] = useState();
  const [step, setStep] = useState(0);
  const handleClose = () => setShow(false);
  const handleClose2 = () => {
    setShow2(false)
  console.log(show2)
  };
  const checked = useRef();
  const [input, setInput] = useState(true);
  const mapContainer = useRef(null);
  const layer = useRef();
  let [unitState, setUnitState] = React.useState('')
  const layer2 = useRef();
  const legendRef = useRef();
  const baseLayer = useRef();
  const [data,setData] = useState([]);
  const pointerRef = useRef(0);
  const [pointer, setPointer] = useState(pointerRef.current);
  const [ value, setValue ] = React.useState(pointerRef.current);

  const handleShow = (e) => {
    setInput(!input);
    const url = "http://"+ipAddress+"/cgi-enabled/map.py?time="+data[pointer];
    console.log(url)

    setAddress(url)

    setShow(true) 
    e.currentTarget.blur()
  };

  const handleShow2 = (e) => {
    if (e.target.checked){
    setUnitState('click on the map to view chart')
    }
    else{
      setUnitState('')
    }
  //  console.log(e.target.checked)
  checked.current = e.target.checked;
    if(e.target.checked){
      mapContainer.current.on('click', function (f) {
      //  mapContainer.current.closePopup();
        //console.log(e)
      //  mapContainer.current.on('click', function (e) {
        //  L.popup({ maxWidth: 800})
        //.setLatLng(e.latlng)
        //.setContent("<p>Value</p>")
        //.openOn(mapContainer.current);
        //});
        console.log(f.latlng)
        setShow2(checked.current)
      });
      console.log('checked')
    }
    else{
      handleClose2()
       console.log('unchecked')
       
    }
    console.log(checked.current)
  };

  const download = (e) => {
    fetch(address, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "sst.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
      e.currentTarget.blur();
  };
  

  //FUNCTION
  const init_map = async (pointer)=> {
    const ds = ['2022-05-16T12:00:00.000Z','2022-06-16T12:00:00.000Z','2022-07-16T12:00:00.000Z','2022-08-16T12:00:00.000Z'];
    setData(ds)
    setStep(ds.length-1)
 
    if(mapContainer.current._containerId == null){
        baseLayer.current = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution: '&copy; Pacific Community (OSM)',
          detectRetina: true
      });


      mapContainer.current = L.map('map', {
        zoom: 4,
        center: [-8, 179.3053]
      });
      baseLayer.current.addTo(mapContainer.current); 

      //marker test
 let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
// L.marker([-9.4783,	147.1392])
  // .addTo(mapContainer.current)
  layer2.current = L.marker([-18.23355, 177.76918]).addTo(mapContainer.current).bindPopup("<img style='width:800px' src="+require('./Figure_1.png')+">",{
    maxWidth: "auto"
});


  
      var marker2 = L.marker([-9.4783,	147.1392]).addTo(mapContainer.current);
      var popupp2 = marker2.bindPopup('<b>Port Moresby TideGuage!</b>');
          popupp2.openPopup();

   //end
    }
    
    if(layer.current == null){
      layer.current = addaccesss(mapContainer.current, ds[pointer])
      layer2.current = addEEZ(mapContainer.current)
      //LEGENDD
  
  legendRef.current = L.control({ position: "topright", id:12 });

  legendRef.current.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
          div.innerHTML += "<h4>Legend</h4>";
          div.innerHTML += '<img src="http://149.28.173.12/thredds/wms/Oceans/Cosppac/sst.forecast.anom.monthly.nc?version=1.3.0&request=GetLegendGraphic&LAYERS=sst&STYLES=default-scalar/div-Spectral-inv&numcolorbands=250&transparent=TRUE&width=50&height=200&colorscalerange=-2,2" alt="Legend">';
         return div;
};
  legendRef.current.addTo(mapContainer.current);
    }
    else{

    mapContainer.current.removeLayer(layer.current);
    layer.current = addaccesss(mapContainer.current, ds[pointer])
    layer2.current = addEEZ(mapContainer.current)
    
    const redIcon2 = new L.Icon({
      iconUrl:
        "http://"+ipAddress+"/marker-icon-2x-blue.png",
      shadowUrl:
        "http://"+ipAddress+"/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    /*
    layer2.current = L.marker([-18.23355, 177.76918],{icon: redIcon2}).addTo(mapContainer.current).bindPopup("<img style='width:800px' src="+require('./Figure_1.png')+">",{
      maxWidth: "auto"
  });


    
        var marker2 = L.marker([-9.4783,	147.1392],{icon: redIcon2}).addTo(mapContainer.current);
        var popupp2 = marker2.bindPopup('<b>Port Moresby TideGuage!</b>');
            popupp2.openPopup();
            */
    }


  
  }

useEffect(() => {  
  async function loadDataAsync(pointer) {
    try {
      await init_map(pointer);
    } catch (e) {
      console.warn(e);
    }
  }
loadDataAsync(pointer);

},[pointer]);

const handleClick = (e) => {
  pointerRef.current = pointerRef.current +1;
  
  if (pointerRef.current <= step){

  setValue(pointerRef.current)
    setPointer(pointerRef.current);
  }
  else{
    pointerRef.current = pointerRef.current -1;
  }
  e.currentTarget.blur()
};
const handleClickPrev = (e) => {
  pointerRef.current = pointerRef.current -1;
  if (pointerRef.current >= 0){
    setValue(pointerRef.current)
    setPointer(pointerRef.current);
    
  }
  else{
    pointerRef.current = pointerRef.current +1;
  }
  e.currentTarget.blur()
};
const slider = (e) => {
  setValue(e.target.value)
  setPointer(e.target.value)
}
  return (

    <div className="d-flex" id="wrapper">
    <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading" style={{"paddingBottom":13, "color": "#FFF", "backgroundColor":"#003366"}}>Pacific Ocean Portal</div>
        <div className="list-group list-group-flush">
         
        <div className="row" style={{padding:10}}>
    <div className="col-sm-4">

    <p>Dataset:</p>
      </div>

      <div className="col-sm-8">
      <select className="form-select form-select-sm" aria-label=".form-select-sm example" id="Year1" name="Year1">
  <option value="5">Sea Surface Temperature</option>
  <option value="10">Sea Level Anomoly</option>
</select>
</div>
<div className="row" style={{padding:10}}>
<div className="col-sm-6">

<button type="button" className="btn btn-primary" onClick={handleClickPrev}>Previous</button>
</div>
<div className="col-sm-6">
<button type="button" className="btn btn-primary" onClick={handleClick}>Next</button>
</div>

</div>
<p style={{fontSize:15}}>Time:{data[pointer]}</p>
<div className="row">
<div className="col-sm-12">
<button type="button" className="btn btn-primary" onClick={handleShow}>Generate Image</button>
</div>
</div>
<div className="row" style={{padding:10}}>

      <div className="col-sm-6">
        
              <div className="col-md-6">
                <div className="form-check m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="year"
                    value="2019"
                    id="flexCheckDefault"
                    onChange={handleShow2}
                    key={input}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Timeseries
                    
                  </label>
                </div>
              </div>
  
</div>
<div className="col-sm-12">  <p style={{fontSize:"12px"}}>{unitState}</p></div>

      </div>
      </div>
        </div>
    </div>
    <div id="page-content-wrapper">
  <Menu/>
        <div className="container-fluid" style={{"backgroundColor":"red", height:"94vh", padding:"0"}}>
        <div id="map" ref={mapContainer} style={{width:"100%", height:"100%",Zindex: "auto"}}></div>

<div className="slidecontainer">
        <input type="range" className="form-range" min={0} max={3} step={1} id="refreshButton" value={value} onChange={slider}/>
        </div>
        <p  id="refreshButton2">Timestamp:{data[value]}</p>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Get Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={address} key={input} style={{width:"100%", height:"100%",Zindex: "auto"}} alt="Loading..."/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={download}>
            Download
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} size="lg">
        <Modal.Header>
          <Modal.Title>Get Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src="http://services.gsd.spc.int:8080/wb.html" title="W3Schools Free Online Web Tutorials" width="100%" height="500px"></iframe> 
        
        {/*  
        <Plot
            data={[{
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},]}
            layout={ {width: '100%', height: '100%', title: 'Timeseries'} }
            />
          */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
     
</div>
  );
};

export default SignUp;
