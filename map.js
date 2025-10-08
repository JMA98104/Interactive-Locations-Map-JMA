let map;
let markers = [];
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.6062, lng: -122.3321 },
    zoom: 7,
    mapTypeControl: false,
  });

  infoWindow = new google.maps.InfoWindow();

  renderMap(locations);
  renderTable(locations);
}

function renderMap(filteredList) {
  clearMarkers();

  filteredList.forEach((loc) => {
    const marker = new google.maps.Marker({
      position: loc.latLng,
      map,
      title: loc.name,
    });

    marker.locationData = loc;

    marker.addListener("click", () => {
      infoWindow.setContent(`<strong>${loc.name}</strong><br>${loc.city}${loc.state ? ', ' + loc.state : ''}`);
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });
}

function clearMarkers() {
  markers.forEach((marker) => marker.setMap(null));
  markers = [];
}

function renderTable(list) {
  const body = document.querySelector("#projectTable tbody");
  body.innerHTML = "";

  if (list.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="3" style="text-align:center;">No results found</td>`;
    body.appendChild(row);
    return;
  }

  list.forEach((loc, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a class="project-link" data-index="${i}"><strong>${loc.name}</strong></a><br>
          <span style="color: #6c757d; font-size: 14px;">${loc.city}${loc.state ? ', ' + loc.state : ''}</span></td>
      <td>${Array.isArray(loc.type) ? loc.type.join(', ') : loc.type}</td>
      <td>${loc.projects}</td>
    `;
    body.appendChild(row);
  });

  document.querySelectorAll(".project-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const name = e.target.closest('a').textContent.trim();
      const marker = markers.find((m) => m.locationData.name === name);
      if (marker) {
        map.setZoom(10);
        map.panTo(marker.getPosition());
        new google.maps.InfoWindow({
          content: `<strong>${marker.locationData.name}</strong>`,
        }).open(map, marker);
      }
    });
  });
}

function applyFilters() {
  const checkedTypes = Array.from(document.querySelectorAll(".type-filter:checked")).map(cb => cb.value);
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  const filteredList = locations.filter(loc => {
    const matchesType = checkedTypes.includes("All") || (Array.isArray(loc.type)
      ? loc.type.some(type => checkedTypes.includes(type))
      : checkedTypes.includes(loc.type));

    const matchesSearch = loc.name.toLowerCase().includes(searchText)
      || loc.city.toLowerCase().includes(searchText)
      || (loc.state && loc.state.toLowerCase().includes(searchText));

    return matchesType && matchesSearch;
  });

  renderMap(filteredList);
  renderTable(filteredList);

  document.getElementById("projectCount").textContent = filteredList.reduce((sum, loc) => sum + Number(loc.projects || 0), 0);
}

window.initMap = initMap;
