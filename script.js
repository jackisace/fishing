console.log("OK");


let lakeLatLng = {lat: 52.64937, lng: -0.67724};
function submit(){
  type = "";
  
  var ele = document.getElementsByName("a");
    for(var i=0;i<ele.length;i++){
      if(ele[i].checked){
        console.log(ele[i].value);
        type += ele[i].value + ", ";
      }
      ele[i].checked = false;
    }
      
  var ele = document.getElementsByName("b");
  for(var i=0;i<ele.length;i++){
      if(ele[i].checked){
        console.log(ele[i].value);
        type += ele[i].value
      }
      ele[i].checked = false;
    }
  navigator.geolocation.getCurrentPosition(dbAdd,err,{enableHighAccuracy: true});
}


function drift(){
  
  
  var ele = document.getElementsByName("a");
    for(var i=0;i<ele.length;i++){
      ele[i].checked = false;
    }
      
  var ele = document.getElementsByName("b");
  for(var i=0;i<ele.length;i++){
      ele[i].checked = false;
    }
  
  type = "Drift";
  navigator.geolocation.getCurrentPosition(dbAdd,err,{enableHighAccuracy: true});
}


//document.documentElement.requestFullscreen();