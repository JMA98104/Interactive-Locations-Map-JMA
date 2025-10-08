let map;
let markers = [];
let allBounds;

window.initMap = function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8283, lng: -98.5795 }, // Center of US
    zoom: 4,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: true,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
      { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
      { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
      { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
      { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
      { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
      { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
      { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
      { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
      { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
    ]
  });

  // Force map to render properly after load
  setTimeout(() => {
    google.maps.event.trigger(map, "resize");
    map.panBy(0, 0); // Trigger a tiny pan to force redraw
  }, 500);

  setupFilters();
  placeMarkers();
  setupFilterControls();
  filterMarkersAndTable();
};

function setupFilters() {
  const sectorMap = {};
  locations.forEach(loc => {
    (Array.isArray(loc.type) ? loc.type : [loc.type]).forEach(type => {
      sectorMap[type] = (sectorMap[type] || 0) + loc.projects;
    });
  });

  const sorted = Object.entries(sectorMap).sort((a, b) => a[0].localeCompare(b[0]));
  const filters = document.getElementById('sectorFilters');
  filters.innerHTML = `
    <div>
      <input type="checkbox" id="selectAllSectors" checked>
      <label for="selectAllSectors"><strong>Select All</strong></label>
    </div>
  `;

  sorted.forEach(([type, count]) => {
    const id = type.replace(/\s+/g, '-').toLowerCase();
    filters.innerHTML += `
      <div>
        <input type="checkbox" class="sectorCheckbox" id="${id}" value="${type}" checked>
        <label for="${id}">${type} (${count})</label>
      </div>
    `;
  });
}

function placeMarkers() {
  allBounds = new google.maps.LatLngBounds();
  locations.forEach((location, index) => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.name,
      icon: {
        url: 'https://www.jacksonmain.com/s/droppin2025.png',
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    const popupHTML = `
      <div style="padding:10px; max-width:250px; font-family:Arial; color:#004965;">
        ${location.thumbnail ? `<img src="${location.thumbnail}" style="width:100%; height:auto; border-radius:4px; margin-bottom:8px;" alt="${location.name} thumbnail">` : ""}
        <h3 style="margin:0; font-size:18px;">
          ${location.cutsheet
            ? `<a href="${location.cutsheet}" target="_blank" style="color:#004965; text-decoration:underline;">${location.name}</a>`
            : location.name}
        </h3>
        <p style="margin:5px 0 0; font-size:14px; color:#515866;">
          ${location.city ? location.city : ""}${location.state ? ", " + location.state : ""}
        </p>
      </div>
    `;

    const infoWindow = new google.maps.InfoWindow({ content: popupHTML });

    marker.addListener('click', () => infoWindow.open(map, marker));
    marker.locationData = location;
    marker.type = location.type;
    marker.index = index;
    markers.push(marker);
    allBounds.extend(marker.position);
  });
}

function setupFilterControls() {
  document.getElementById('selectAllSectors').addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('.sectorCheckbox');
    checkboxes.forEach(cb => cb.checked = this.checked);
    filterMarkersAndTable();
  });

  document.getElementById('applyFilters').addEventListener('click', filterMarkersAndTable);
}

function filterMarkersAndTable() {
  const selected = Array.from(document.querySelectorAll('.sectorCheckbox:checked')).map(cb => cb.value.toLowerCase());
  const search = document.getElementById('locationSearch').value.toLowerCase();

  let visible = [], total = 0, bounds = new google.maps.LatLngBounds();

  markers.forEach(marker => {
    const types = Array.isArray(marker.type) ? marker.type.map(t => t.toLowerCase()) : [marker.type.toLowerCase()];
    const data = marker.locationData;
    const searchMatch = `${data.name} ${data.city} ${data.state} ${data.region}`.toLowerCase().includes(search);
    const sectorMatch = types.some(t => selected.includes(t));

    if (sectorMatch && searchMatch) {
      marker.setMap(map);
      visible.push(data);
      total += data.projects;
      bounds.extend(marker.position);
    } else {
      marker.setMap(null);
    }
  });

  if (visible.length === 0 || selected.length === 0) {
    map.fitBounds(allBounds);
  } else {
    map.fitBounds(bounds);
  }

  updateTable(visible);
  updateCount(total);
}

function updateTable(list) {
  const body = document.getElementById('projectLocationsBody');
  body.innerHTML = '';

  if (list.length === 0) {
    body.innerHTML = `<tr><td colspan="4" style="text-align:center;">No results found</td></tr>`;
    return;
  }

  list.forEach((loc) => {
    const nameCell = loc.cutsheet
      ? `<a class="project-link" href="${loc.cutsheet}" target="_blank"><strong>${loc.name}</strong></a>`
      : `<strong>${loc.name}</strong>`;

    const locationLine = `<br><span style="color: #6c757d; font-size: 14px;">${loc.city}${loc.state ? ', ' + loc.state : ''}</span>`;

    const thumbImg = loc.thumbnail
      ? `<br><img src="${loc.thumbnail}" alt="${loc.name} image" style="max-width: 140px; margin-top: 6px; border-radius: 4px;">`
      : '';

    body.innerHTML += `
      <tr>
        <td>${nameCell}${locationLine}${thumbImg}</td>
        <td>${Array.isArray(loc.type) ? loc.type.join(', ') : loc.type}</td>
        <td>${loc.projects || 1}</td>
      </tr>`;
  });

  // Click table to zoom map
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', e => {
      const marker = markers.find(m => m.locationData.name === e.target.textContent.trim());
      if (marker) {
        map.setZoom(10);
        map.panTo(marker.getPosition());
        new google.maps.InfoWindow({
          content: `<strong>${marker.locationData.name}</strong>`
        }).open(map, marker);
      }
    });
  });
}

function updateCount(total) {
  const div = document.getElementById('projectTotal');
  div.innerHTML = `<strong>Total Projects Found:</strong> ${total}`;
}

// Final trigger to load map
window.addEventListener('load', () => {
  if (typeof locations !== 'undefined' && Array.isArray(locations)) {
    initMap();
  } else {
    console.error("Locations data not loaded or improperly formatted.");
  }
});





