//PLATFORMA
var platform = new H.service.Platform({
    'apikey': window.HEREAPIs.JSkey
});
var defaultLayers = platform.createDefaultLayers();
//KARTE
var map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        center: { lat: 57, lng: 24.5 },
        zoom: 8
    }
);
//stils 'mapstyle.yaml',
var provider=map.getBaseLayer().getProvider();
var mapStyle= new H.map.Style(window.STYLES.base, window.STYLES.lnk);
provider.setStyle(mapStyle);
//saskarsme ar lietotāju
var ui = H.ui.UI.createDefault(map, defaultLayers);
//notikumi
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));



//SIMBOLI
var personIcon=window.ICONS.person;
var socIcon=window.ICONS.socdien;
var polIcon=window.ICONS.police;
var vpolIcon=window.ICONS.vpolice;
var ccentreIcon=window.ICONS.crisis;
//const

//LIETOTĀJA ATZĪME
function getPosition(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      console.log(position.coords);
      let browserPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
      let posIcon = new H.map.Icon(personIcon);
      let personMarker = new H.map.Marker(browserPosition, {icon: posIcon});
      personMarker.setData("Tu esi šeit.");
      map.addObject(personMarker);
    });
  }
  else{
    alert("Diemžēl nevaram uzzināt tavu ģeolokāciju!");
  }
}

//UZ MOBILĀ
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //?true ja telefons
console.log(isMobile);

 //DATI
 let DataIcon;
 requests =[window.HEREAPIs.socREQUEST, window.HEREAPIs.polREQUEST, window.HEREAPIs.vpolREQUEST, window.HEREAPIs.criREQUEST];
 icons =[socIcon, polIcon, vpolIcon, ccentreIcon];
 function getData(id){
     fetch(requests[id])
     .then(res =>{
       return res.json();
     })
     .then(res =>{
       console.log(res);
       console.log(res.features[0]);
       res.features.forEach(feature =>{
         let DataPosition={lat:feature.geometry.coordinates[1], lng:feature.geometry.coordinates[0]};

         if(isMobile==true){DataIcon=new H.map.Icon(icons[id], {size: {w: 60, h: 60}});}
         else{DataIcon=new H.map.Icon(icons[id]);}
         let DataMarker = new H.map.Marker(DataPosition, {icon: DataIcon});
         let DataData = `<div class="bublis"; width: 320px> <h2>${feature.properties.Nosaukums}</h2>`;
         //console.log(feature.properties.TelefonaNr);
         if(feature.properties.Adrese != undefined){DataData=DataData+`<p>${feature.properties.Adrese}</p>`;}
         if(feature.properties.TelefonaNr != undefined){DataData=DataData+`<p>${feature.properties.TelefonaNr}</p>`;}
         if(feature.properties.Epasts != undefined){DataData=DataData+`<p>${feature.properties.Epasts}</p>`;}
         if(feature.properties.Mājaslapa != undefined){DataData=DataData+`<p><a href=${feature.properties.Mājaslapa}>${feature.properties.Mājaslapa}</a></p>`;}
         DataData+=`</div>`;
         DataMarker.setData(DataData);
            map.addObject(DataMarker);

       });
     })
     .catch(e =>{
       console.error(e);
     });
 }

 //INFO LOGI
 function onClick(){
     let bubble;
     let position;
     map.addEventListener('tap', function(evnt) {
         if(evnt.target instanceof H.map.Marker){
           position = map.screenToGeo(evnt.currentPointer.viewportX, evnt.currentPointer.viewportY),
           data = evnt.target.getData();
           if (!bubble) {
               bubble = new H.ui.InfoBubble(position, { content: '' })
               ui.addBubble(bubble);
           }
           bubble.setContent(data);
           bubble.setPosition(position);
           bubble.open();
           map.setCenter(position, true);
         }
     });
  }

 onClick();
 getPosition();
 getData(0); //SOCIALIE DIENESTI
 getData(1); //PASVALDIBAS POLICIJAS
 getData(2); //VALSTS POLICIJAS
 getData(3); //KRĪZES CENTRI
