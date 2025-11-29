class TouristSpot {
  constructor(name, lat, lng, visitors) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.visitors = visitors;
  }
}

// data
const spots = [
  new TouristSpot("2v Aqua Water Refilling Station", 8.358536, 124.864436),
  new TouristSpot("G & M Water Surface Refilling Station",8.372324, 124.853815),
  new TouristSpot("Dsd Water Refilling Station",  8.367918, 124.866781),
  new TouristSpot("JAPH FUEL Refilling Station", 8.375316, 124.900563),
  new TouristSpot("TJ Water Refilling Station", 8.414914, 124.811522),
  new TouristSpot("LRJ Water Refilling Station", 8.405282, 124.829181),
  new TouristSpot("RYSAX Water Refilling Station", 8.414967, 124.828589)
];

//initialize map
const map = L.map('map').setView([8.367981, 124.866250], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// chart
const ctx = document.getElementById('visitorChart');
let visitorChart;

function updateChart(spot) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: `Visitors - ${spot.name}`, 
      data: spot.visitors,
      borderColor: '#a78bfa',
      backgroundColor: 'rgba(167,139,250,0.3)',
      fill: true,
      tension: 0.3
    }]
  };
}
 

//Markers 
spots.forEach(spot => {
  const marker = L.marker([spot.lat, spot.lng]).addTo(map);
  marker.bindPopup(`<b>${spot.name}</b>`); 
  marker.on('click', () => updateChart(spot));
});

updateChart(spots[0]);
