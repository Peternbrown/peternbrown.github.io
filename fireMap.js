var map2 = L.map("fireMap").setView([38.475707, -97.662876], 3.3);

const tiles2 = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
).addTo(map2);

// add fire map
const wildfires = L.esri
  .featureLayer({
    url: "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/WFIGS_Interagency_Perimeters_Current/FeatureServer/0/",

    style: (featureLayer) => {
      let style = {
        fillColor: "#ff0000",
      };
      return style;
    },
  })
  .addTo(map2);

wildfires.bindPopup(function (layer) {
  return L.Util.template(
    "<p>Incident Name: <strong>{attr_IncidentName}</strong><br>Acres: {poly_GISAcres}</br></p>",
    layer.feature.properties
  );
});

let fires_provider = L.esri.Geocoding.featureLayerProvider({
  url: 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/WFIGS_Interagency_Perimeters_Current/FeatureServer/0/',
  searchFields: ['attr_IncidentName'], // Search these fields for text matches
  label: 'Fires', // Group suggestions under this header
  formatSuggestion: function (feature) {
      return feature.properties.attr_IncidentName; // format suggestions like this.
  }
});

const searchControl = L.esri.Geocoding.geosearch({
  position: "topright",
  placeholder: "Begin searching an active fire",
  useMapBounds: false,

  providers: [fires_provider]

}).addTo(map2);