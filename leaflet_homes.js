var map = L.map("map").setView([40.252924, -43.204301], 1.75);

const tiles = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
).addTo(map);

// St Johns Wood popup
var stjohns = L.marker([51.534661, -0.173812]).addTo(map);
stjohns.bindPopup("<b>St. John's Wood</b><br>London, UK");

// Cary popup
var cary = L.marker([35.791709, -78.782489]).addTo(map);
cary.bindPopup("<b>Cary</b><br>North Carolina, USA");

// Alexandria popup
var alexandria = L.marker([38.805854, -77.046749]).addTo(map);
alexandria.bindPopup("<b>Alexandria</b><br>Virginia, USA");

// Waterville popup
var waterville = L.marker([44.564083, -69.661862]).addTo(map);
waterville.bindPopup("<b>Waterville</b><br>Maine, USA");

// Breck popup
var breck = L.marker([39.482163, -106.046143]).addTo(map);
breck.bindPopup("<b>Breckenridge</b><br>Colorado, USA");

// Cope popup
var cope = L.marker([55.669204, 12.55343]).addTo(map);
cope.bindPopup("<b>Vesterbro</b><br>Copenhagen, DK");

// Cope popup
var salamanca = L.marker([40.973056, -5.657125]).addTo(map);
salamanca.bindPopup("<b>Barrio Garrido</b><br>Salamanca, ES");