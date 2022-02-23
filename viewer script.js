
let map, heatmap, myLatLng;
let markers = [];
let myMarker;

let lakeLatLng = {lat: 52.64937, lng: -0.67724};


function getPoints() {
  length = value["Length"];
  i = 1;
  heatData = [];
  while(i < length+1){
    heatData.push(new google.maps.LatLng(value[i]["Lat"], value[i]["Long"]));
    i += 1;
  }
  return heatData;
}



function positionSet(position){
  if(position){
  myLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
  }
  else{
    myLatLng = lakeLatLng;
  }

  map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: myLatLng,
      mapTypeId: "satellite",
    });

  markers = getPoints();
  
  for(i = 0; i < markers.length; i++){
    new google.maps.Marker({
      position: markers[i],
      map: map
    });
  }
  
  myMarker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });

  
    //heatmap = new google.maps.visualization.HeatmapLayer({
   //   data: getPoints(),
   //   radius: 10,
   //   map: map,
   // });

}



function err(error){
  console.log("error: " + error);
  

    myLatLng = lakeLatLng;
  

  map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: myLatLng,
      mapTypeId: "satellite",
    });

  markers = getPoints();
  
  for(i = 0; i < markers.length; i++){
    new google.maps.Marker({
      position: markers[i],
      map: map
    });
  }
  
  myMarker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });

  
    //heatmap = new google.maps.visualization.HeatmapLayer({
    //  data: getPoints(),
   //   radius: 10,
    //  map: map,
    ///});
}

function buff(){
  navigator.geolocation.getCurrentPosition(positionSet,err,{enableHighAccuracy: true});
}

setTimeout(buff, 2000);
console.log(value);


