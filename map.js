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

  // Set initial project count
  document.getElementById("projectCount").textContent = locations.reduce((sum, loc) => sum + Number(loc.projects || 0), 0);
}

function renderMap(list) {
  clearMarkers();

  list.forEach((loc) => {
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
  const body = document.getElementById('projectLocationsBody');
  body.innerHTML = '';

  if (list.length === 0) {
    body.innerHTML = `<tr><td colspan="3" style="text-align:center;">No results found</td></tr>`;
    return;
  }

  list.forEach((loc) => {
    const nameCell = loc.cutsheet
      ? `<a class="project-link" data-name="${loc.name}" href="${loc.cutsheet}" target="_blank"><strong>${loc.name}</strong></a>`
      : `<a class="project-link" data-name="${loc.name}" style="cursor:pointer;"><strong>${loc.name}</strong></a>`;

    const locationLine = `<br><span style="color: #6c757d; font-size: 14px;">${loc.city}${loc.state ? ', ' + loc.state : ''}</span>`;
    const thumbImg = loc.thumbnail
      ? `<br><img src="${loc.thumbnail}" alt="${loc.name} image" style="max-width: 140px; margin-top: 6px; border-radius: 4px;">`
      : '';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${nameCell}${locationLine}${thumbImg}</td>
      <td>${Array.isArray(loc.type) ? loc.type.join(', ') : loc.type}</td>
      <td>${loc.projects || 1}</td>
    `;
    body.appendChild(row);
  });

  // Attach event listener to project links (including ones with cutsheet links)
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const name = e.target.closest('.project-link').dataset.name;
      const marker = markers.find(m => m.locationData.name === name);
      if (marker) {
        map.setZoom(10);
        map.panTo(marker.getPosition());
        infoWindow.setContent(`<strong>${marker.locationData.name}</strong>`);
        infoWindow.open(map, marker);
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

  // Update the project count at top
  document.getElementById("projectCount").textContent = filteredList.reduce((sum, loc) => sum + Number(loc.projects || 0), 0);
}

window.initMap = initMap;
