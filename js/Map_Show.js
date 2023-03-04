
var layersContainer = [];
var layersContainerProprty = [];

/*===================================================================
                              Map Options
 ==================================================================== */
let zoom = 5.49;
let site = [25.033333, 45.233334];
let map = L.map('map',{
  minZoom: 5.49,
  maxZoom: 15,
  position: 'bottomleft'
}).setView(site, zoom );
// NavBar To navigate Home or forward or back
L.control.navbar().addTo(map);
/*===================================================================
                            TileLayer {BaseMap}
 ==================================================================== */

//osm layer
let osmLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osmLayer.addTo(map);

//Google Street
let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
// googleStreets.addTo(map);

//Google Satalight
let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
// googleSat.addTo(map);

// Control 2: This add a scale to the map
    L.control.scale().addTo(map);
/*===================================================================
                              Geo Jason {Layers}
 ==================================================================== */

/* --------------------   to add Touristic_Landmarks_MOC_Data layer    ------------------------------*/

 // to create  create Custom Icon
function mocCustomIcon (feature, latlng) {
  
    let myIcon = L.icon({
      iconUrl: './Imge/redLocationIcon.png',
      iconSize:     [15, 15], // width and height of the image in pixels
      shadowSize:   [35, 20], // width, height of optional shadow image
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
    return L.marker(latlng, { icon: myIcon })
  }
  
  // create an options object that specifies which function will called on each feature
  let  mocOptions = {
    pointToLayer: mocCustomIcon,
    onEachFeature : (feature, layer) =>
    {
        // layer.bindPopup(` <b style ="color : black"> Name  : </b> ${feature.properties.name}`);
        layer.bindPopup(
          ` 
          <div class="p-0 fs-6" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-light text-dark"> Name : ${feature.properties.Name}</li>
              <li class="list-group-item"> Gov_name : ${feature.properties.Gov_name}</li>
              <li class="list-group-item"> Province_Name : ${feature.properties.Province_N}</li>
            </ul>
          </div>
          `
        );
    }
  }
  
  // create the GeoJSON layer
  layersContainer[1] = L.geoJSON(Touristic_Landmarks_MOC_Data, mocOptions);
  layersContainerProprty[1] = "Name";
// moc.addTo(map);
/* --------------------   to add Touristic_Landmarks_MOT_Data layer    ------------------------------*/

  // create an options object that specifies which function will called on each feature
function MotCustomIcon (feature, latlng) {
  
  let myIcon = L.icon({
      iconUrl: './Imge/blueLocationIcon.png',
      iconSize:     [15, 15], // width and height of the image in pixels
      shadowSize:   [35, 20], // width, height of optional shadow image
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  })
    return L.marker(latlng, { icon: myIcon })
}

  let  MotOptions = {
    pointToLayer: MotCustomIcon,
    onEachFeature : (feature, layer) =>
    {
        layer.bindPopup(
          ` 
          <div class="p-0 fs-6" style="width: 18rem;">

            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-light text-dark"> Name_Arabic : ${feature.properties.الاسم}</li>
              </hr>
              <li class="list-group-item"> Name_English : ${feature.properties.الاس_1}</li>
              <li class="list-group-item"> Description : ${feature.properties.الوصف}</li>
              <li class="list-group-item"> Gov_name : ${feature.properties.Gov_name}</li>
              <li class="list-group-item"> Province_Name : ${feature.properties.Province_N}</li>
              </ul>

          </div>
          `
        );
    }
  }

  layersContainer[0] = L.geoJSON(Touristic_Landmarks_MOT_Data , MotOptions)
  layersContainerProprty[0] = "الاسم";
/* --------------------   to add KSA_Airports layers    ------------------------------*/

  // create an options object that specifies which function will called on each feature
  function airCustomIcon (feature, latlng) {
  
    let myIcon = L.icon({
        iconUrl: './Imge/airport1.png',
        iconSize:     [15, 15], // width and height of the image in pixels
        shadowSize:   [35, 20], // width, height of optional shadow image
        iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
        shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
      return L.marker(latlng, { icon: myIcon })
  }
  
    let  airOptions = {
      pointToLayer: airCustomIcon,
      onEachFeature : (feature, layer) =>
      {
          layer.bindPopup(
            ` 
            <div class="p-0 fs-6" style="width: 18rem;">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-light text-dark"> Name : ${feature.properties.Airport_Na}</li>
                  </hr>
                  <li class="list-group-item"> Type : ${feature.properties.Type}</li>
                </ul>
            </div>
            `
          );
      }
    }
  
    layersContainer[2] = L.geoJSON(KSA_Airports , airOptions);
  layersContainerProprty[2] = "Airport_Na";

/* --------------------   to add KSA_Railways layers    ------------------------------*/
    let  RailwaysOptions = {
      // pointToLayer: airCustomIcon,
      onEachFeature : (feature, layer) =>
      {
          layer.bindPopup(
            ` 
            <div class="p-0 fs-6" style="width: 18rem;">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item"> Name : ${feature.properties.Name}</li>
                </ul>
            </div>
            `
          );
      },
      style : {color: "red"}
    }
  
  layersContainer[3] = L.geoJSON(KSA_Railways , RailwaysOptions);
  layersContainerProprty[3] = "Name";

 /* --------------------   to add KSA_Regions layers    ------------------------------*/

let RegionsLayerOptions = {
  
  onEachFeature : (feature, layer) =>
  {
      layer.bindPopup(` <div><b style ="color : dark"> اسم المحافظة  : </b> ${feature.properties.NAME}</div>
      `);
  },
  style :
  {
      fillColor : "gray",
      fillOpacity : .3 ,
      color:"black", // border
      opacity : 0.2 // obacity border
  }
}

  layersContainer[4] = L.geoJSON(KSA_Regions , RegionsLayerOptions)
layersContainerProprty[4] = "NAME";
layersContainer[4].addTo(map);
/* --------------------   to add governorates layers    ------------------------------*/

let governoratesLayerOptions = {
  
  onEachFeature : (feature, layer) =>
  {
      layer.bindPopup(` <div><b style ="color : dark"> اسم المحافظة  : </b> ${feature.properties.NAME}</div>
      <div> <b style ="color : black"> اسم المنطقة  : </b> ${feature.properties.Region_Nam}</div>
      `);
  },
  style :
  {
    fillColor : "yellow",
    fillOpacity : .3 ,
    color:"black", // border
    opacity : 0.2 // obacity border
      
  }
}

  layersContainer[5]= L.geoJSON(governorates , governoratesLayerOptions);
  layersContainerProprty[5] = "NAME";
/* --------------------   to Hide BaseMap ------------------------------*/
let empty = L.geoJSON()
// empty.addTo(map);
 /*===================================================================
                              Layer Control 
 ==================================================================== */
/*
    *** collapsed = true Defult {Show Icon Have All Detiles}
    *** collapsed = false {Show list direct without icon container }
*/

let baseMaps = {
    "OSM": osmLayer,
    "googleStreets" : googleStreets,
    "googleSat" : googleSat,
    "empty" : empty

};

let overlayMaps = {
    "KSA_Regions" : layersContainer[4],
    "KSA_Governorates" : layersContainer[5],
    "KSA_Airports" : layersContainer[2],
    "KSA_Touristic_Landmarks_MOC" : layersContainer[1] ,
    "KSA_Touristic_Landmarks_MOT" : layersContainer[0],
    "KSA_Railways" : layersContainer[3]
};

// let baseMap = L.control.layers(baseMaps ,overlayMaps, {collapsed : true});
// baseMap.addTo(map);

// BasmapSwitcher Best Style 
new L.basemapsSwitcher([
  {
    layer: osmLayer.addTo(map), //DEFAULT MAP
    icon: './Imge/img1.PNG',
    name: 'OSM'
  },
  {
    layer: googleStreets,
    icon: './Imge/img2.PNG',
    name: 'googleStreets'
  },
  {
    layer: googleSat,
    icon: './Imge/img3.PNG',
    name: 'googleSat'
  },
  {
    layer: empty,
    icon: './Imge/icons8-hide-67.png',
    name: 'Hide map'
  },
], { position: 'bottomright' , maxLayersInRow: 5 }).addTo(map);

// osmLayer.addTo(map),
//Layer Controller Group
// let layers = L.control.layers( "",overlayMaps, {collapsed : true});
// layers.addTo(map);
/*===================================================================
                              Search  
 ==================================================================== */
//  Control in world: This add a Search bar
// var searchControl = new L.esri.Controls.Geosearch().addTo(map);

// var results = new L.LayerGroup().addTo(map);

// searchControl.on('results', function(data){
//   results.clearLayers();
//   for (var i = data.results.length - 1; i >= 0; i--) {
//     results.addLayer(L.marker(data.results[i].latlng));
//   }
// });

let layerSearch ;
var searchControl;
function change()
{
  if (typeof(searchControl) == "object")
  {
    remove();
  }
  layerSearch = document.getElementById('Search').value;

  if (layerSearch == 4 || layerSearch == 5)
  {
    searchControl = new L.Control.Search({
      position:'topleft',
      layer: layersContainer[layerSearch],                //layer name to search
      propertyName: layersContainerProprty[layerSearch],   
      marker:false  ,
      moveToLocation: function(latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
          map.setView(latlng, zoom); // access the zoom
      }
    //Search field
    });
    searchControl.on('search:locationfound', function(e) {
      
      //console.log('search:locationfound', );
  
      //map.removeLayer(this._markerSearch)
  
      e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
      if(e.layer._popup)
        e.layer.openPopup();
    });
  }
else
{
  searchControl = new L.Control.Search({
    position:'topleft',
    layer: layersContainer[layerSearch],                //layer name to search
    propertyName: layersContainerProprty[layerSearch],   
    zoom : 15,
    marker:false   
  });
  searchControl.on('search:locationfound', function(e) {
      
    //console.log('search:locationfound', );

    //map.removeLayer(this._markerSearch)
    if(e.layer._popup)
      e.layer.openPopup();
  })
}

  map.addControl(searchControl);
}

function remove() {
  map.removeControl(searchControl)
  map.removeLayer(layersContainer[layerSearch]);
}
/*===================================================================
                              Routing  
 ==================================================================== */
let routing = L.Routing.control({
  position:'topleft',
  routeWhileDragging: true,
  geocoder: L.Control.Geocoder.nominatim()
})
/*===================================================================
                              Layers Panel   
 ==================================================================== */
// Layers Panel 
function iconByName(name) {
	return `<i class="bi bi-${name}"></i>`;
}
var overLayers = [
	{
		name: "KSA_Touristic_Landmarks_MOT",
		icon: iconByName('geo-alt-fill text-info'),
		layer: layersContainer[0]
	},
	{
		name: "KSA_Touristic_Landmarks_MOC",
		icon: iconByName('geo-alt-fill text-danger'),
		layer: layersContainer[1]
	},
	{
		name: "KSA_Airports",
		icon: iconByName('airplane-fill text-brown'),
		layer: layersContainer[2]
	},
	{
		name: "KSA_Railways",
		icon: iconByName('train-freight-front-fill text-success'),
		layer: layersContainer[3]
	},
  {
		name: "KSA_Regions",
		icon: iconByName('octagon-fill text-muted'),
		layer: layersContainer[4]
	},
  {
		name: "KSA_Governorates",
		icon: iconByName('octagon-fill text-warning'),
		layer: layersContainer[5]
	},

];
var panelLayers = new L.Control.PanelLayers("", overLayers, {
	collapsibleGroups: true,
	collapsed: true
});
map.addControl(panelLayers);


let ContainerPanel = document.querySelector('#map > div.leaflet-control-container > div.leaflet-top.leaflet-right > div > form');

// add Tools title in container
let ContainerTools = document.querySelector('.Tools');
ContainerPanel.appendChild(ContainerTools);

// add routing Tool
let ContainerRouting = document.querySelector('.Routing');
let ContainerRoutingChecked = document.querySelector('.form-check-input');
ContainerPanel.appendChild(ContainerRouting);

// Add Search Tool 
let ContainerSearch = document.querySelector('.Search');
let ContainerSearchChecked = document.querySelector('.form-check-input');
ContainerPanel.appendChild(ContainerSearch);

function RoutingApper() 
{
  if (ContainerRoutingChecked.checked) 
  {
    routing.addTo(map);
  }
  else
  {
    map.removeControl(routing);
  }
}

function SearchApper() {
  if (ContainerSearchChecked.checked) 
  {
    document.getElementById('Search').style.visibility = "visible";
  } else {
    
    document.getElementById('Search').style.visibility = "hidden";
  }
}
