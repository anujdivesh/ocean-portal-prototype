import L from 'leaflet';

const geoserverAddress = "http://services.gsd.spc.int:8089/";

export function addaccesss(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://149.28.173.12/thredds/wms/Oceans/Cosppac/sst.forecast.anom.monthly.nc", {
        layers: "sst",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'default-scalar/div-Spectral-inv',
        colorscalerange: '-2, 2',
        abovemaxcolor: "extend",
        belowmincolor: "extend",
        numcolorbands: 260,
        time: time,
    }).addTo(mapContainer);
    return layer;
}

export function addaccesssugridcon(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://192.168.4.128:7002/wms/datasets/ugridd", {
        layers: "max_salt",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'filledcontours_jet',
        colorscalerange: '-10,20',
        numcolorbands: 254,
        time: '2015-04-28T083000Z',
    }).addTo(mapContainer);
    return layer;
}


export function addaccesssu(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://149.28.173.12/thredds/wms/Oceans/Cosppac/selfe_ugrid.nc", {
        layers: "max_temp",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'default-scalar/div-Spectral-inv',
        colorscalerange: '-10,40',
        abovemaxcolor: "extend",
        belowmincolor: "transparent",
        numcolorbands: 254,
        time: '2015-04-28T08:15:00.000Z',
    }).addTo(mapContainer);
    return layer;
}

export function addaccesss2(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://192.168.4.128:7002/wms/datasets/kk", {
        layers: "ssh",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'filledcontours_jet',
        colorscalerange: '0.04,0.05',
        abovemaxcolor: "extend",
        belowmincolor: "extend",
        numcolorbands: 254,
        time: '2001-01-03T120000Z',
    }).addTo(mapContainer);
    return layer;
}


export function addaccessskkkk(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://149.28.173.12/thredds/wms/Oceans/Cosppac/kk.nc", {
        layers: "ssh",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'default-scalar/div-Spectral-inv',
        colorscalerange: '0.04,0.05',
        abovemaxcolor: "extend",
        belowmincolor: "extend",
        numcolorbands: 254,
        time: '2001-01-02T12:00:00.000Z',
    }).addTo(mapContainer);
    return layer;
}


export function addaccessskk(mapContainer, time){
    var layer = L.tileLayer.betterWms("https://geoport.whoi.edu/wms/datasets/estofs", {
        layers: "zeta",
        format: 'image/png',
        transparent: true,
        NUMCONTOURS:60,
        colorscalerange:'-3.00,6.0',
        opacity: 1,
        styles: 'filledcontours_jet',
        time:'2015-11-20T010000Z'
    }).addTo(mapContainer);
    return layer;
}

export function addaccessswork(mapContainer, time){
    var layer = L.tileLayer.betterWms("https://geoport.whoi.edu/wms/datasets/coawst", {
        layers: "temp",
        format: 'image/png',
        transparent: true,
        NUMCONTOURS:64,
        colorscalerange:'10,30',
        opacity: 1,
        styles: 'filledcontours_jet',
        elevation:15
    }).addTo(mapContainer);
    return layer;
}

export function addgrant(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://opendap.bom.gov.au:8080/thredds/wms/seasonal_prediction/access-s/ocean/sst/emn/s_doa_sst_20220423_emn.nc", {
        layers: "temp",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'boxfill/reeftempng_sses',
        colorscalerange: '-2, 2',
        abovemaxcolor: "extend",
        belowmincolor: "extend",
        numcolorbands: 254,
        time: time,
    }).addTo(mapContainer);
    return layer;
}

export function addaccesssback(mapContainer, time){
    var layer = L.tileLayer.betterWms("http://149.28.173.12/thredds/wms/Oceans/Cosppac/sst.forecast.anom.monthly.nc", {
        layers: "sst",
        format: 'image/png',
        transparent: true,
        opacity: 1,
        styles: 'default-scalar/div-Spectral-inv',
        colorscalerange: '-2, 2',
        abovemaxcolor: "extend",
        belowmincolor: "extend",
        numcolorbands: 254,
        time: time,
    }).addTo(mapContainer);
    return layer;
}


export function mayFlyer(map, site) {
    //fly
    map.eachLayer(function (lyr) {
        console.log(lyr);
        if (site === "Nanumaga"){
        map.flyTo([-6.287321, 176.320346], 15);
        }
        if (site === "Nanumea"){
        map.flyTo([-5.669055, 176.110211], 14);
        }
    });
    }
    
    
    export function addEEZ(mapContainer){
        var url = geoserverAddress+'geoserver/spc/wms';
          
        var layer = L.tileLayer.wms(url, {
          layers: 'spc:COSPPac_EEZs',
          transparent: true,
          format: 'image/png'
        }).addTo(mapContainer);
      
        return layer;
      }


