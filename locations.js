const locations = [
    {
      name: "Confidential Client - Multiple Data Centers",
      city: "Undisclosed",
      state: "Confidential",
      region: "United States",
      type: ["Mission Critical", "Data Center"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 3
    },
    {
      name: "Cyxtera Data Center",
      city: "Tukwila",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Mission Critical", "Data Center"],
      lat: 47.4636,
      lng: -122.2565,
      projects: 1
    },
    {
      name: "Hyperscale Data Center Campus",
      city: "Undisclosed",
      state: "Confidential",
      region: "East Coast, U.S.",
      type: ["Mission Critical", "Data Center"],
      lat: 39.8283,
      lng: -77.0369,
      projects: 1
    },
    {
      name: "Infomart Data Center",
      city: "Hillsboro",
      state: "OR",
      region: "Pacific Northwest",
      type: ["Mission Critical", "Data Center"],
      lat: 45.5229,
      lng: -122.9898,
      projects: 1
    },
    {
      name: "Fortuna Data Centers",
      city: "Undisclosed",
      state: "Confidential",
      region: "United States",
      type: ["Mission Critical", "Data Center"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "LitBit Data Center",
      city: "Multiple Locations",
      state: "China",
      region: "Asia",
      type: ["Mission Critical", "Data Center"],
      lat: 35.8617,
      lng: 104.1954,
      projects: 1
    },
    {
      name: "Microsoft Data Center",
      city: "Bothell",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Mission Critical", "Data Center"],
      lat: 47.7623,
      lng: -122.2054,
      projects: 1
    },
    {
      name: "Nuclear Power Plant",
      city: "Undisclosed",
      state: "Confidential",
      region: "United States",
      type: ["Mission Critical", "Power Plant"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "South Hill Data Center (Benaroya)",
      city: "Puyallup",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Mission Critical", "Data Center"],
      lat: 47.1460,
      lng: -122.2920,
      projects: 1
    },
    {
      name: "Vantage Hyperscale Data Center - WA1",
      city: "Quincy",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Mission Critical", "Data Center"],
      lat: 47.2338,
      lng: -119.8520,
      projects: 1
    },
    {
      name: "Yahoo! Enterprise Data Center (Multiple Locations)",
      city: "Multiple",
      state: "United States",
      region: "United States",
      type: ["Mission Critical", "Data Center"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "Anchorage MSC",
      city: "Multiple Locations",
      state: "AK",
      region: "Alaska",
      type: ["Telecommunication", "Mission Critical"],
      lat: 64.2008,
      lng: -149.4937,
      projects: 1
    },
    {
      name: "Aurora MSC Building Expansion",
      city: "Undisclosed",
      state: "GA",
      region: "Southeast",
      type: ["Telecommunication", "Mission Critical"],
      lat: 32.1656,
      lng: -82.9001,
      projects: 1
    },
    {
      name: "Azusa MSC Upgrades",
      city: "Azusa",
      state: "CA",
      region: "West Coast",
      type: ["Telecommunication", "Mission Critical"],
      lat: 34.1336,
      lng: -117.9076,
      projects: 1
    },
    {
      name: "Bloomington MSC",
      city: "Bloomington",
      state: "MN",
      region: "Midwest",
      type: ["Telecommunication", "Mission Critical"],
      lat: 44.8408,
      lng: -93.2983,
      projects: 1
    },
    {
      name: "Bridgeville MSC",
      city: "Bridgeville",
      state: "PA",
      region: "Northeast",
      type: ["Telecommunication", "Mission Critical"],
      lat: 40.3565,
      lng: -80.1109,
      projects: 1
    },
    {
      name: "Cloverdale Landing Station",
      city: "Cloverdale",
      state: "OR",
      region: "Pacific Northwest",
      type: ["Telecommunication", "Mission Critical"],
      lat: 45.2179,
      lng: -123.8960,
      projects: 1
    },
    {
      name: "Comcast Cable Projects",
      city: "Multiple Locations",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Telecommunication", "Mission Critical"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Franklin MSC Greenfield",
      city: "Franklin",
      state: "CA",
      region: "West Coast",
      type: ["Telecommunication", "Mission Critical"],
      lat: 38.4571,
      lng: -121.4461,
      projects: 1
    },
    {
      name: "Global Crossing Projects",
      city: "Multiple Locations",
      state: "United States",
      region: "United States",
      type: ["Telecommunication", "Mission Critical"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "Hermosa Beach Landing Station",
      city: "Hermosa Beach",
      state: "CA",
      region: "West Coast",
      type: ["Telecommunication", "Mission Critical"],
      lat: 33.8622,
      lng: -118.3995,
      projects: 1
    },
    {
      name: "Bakery Nouveau",
      city: "Seattle",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Retail"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Ballard Loft",
      city: "Seattle",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial"],
      lat: 47.6686,
      lng: -122.3848,
      projects: 1
    },
    {
      name: "Best Plaza",
      city: "Federal Way",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.3201,
      lng: -122.3126,
      projects: 1
    },
    {
      name: "Bigfoot Cavern",
      city: "Sea-Tac Airport",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.4502,
      lng: -122.3088,
      projects: 1
    },
    {
      name: "Blochs",
      city: "Seattle",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.6097,
      lng: -122.3331,
      projects: 1
    },
    {
      name: "Explorer Center",
      city: "Estes Park",
      state: "CO",
      region: "Mountain West",
      type: ["Commercial", "Retail"],
      lat: 40.3772,
      lng: -105.5217,
      projects: 1
    },
    {
      name: "Gatlinburg Theater",
      city: "Gatlinburg",
      state: "TN",
      region: "Southeast",
      type: ["Commercial", "Retail"],
      lat: 35.7143,
      lng: -83.5102,
      projects: 1
    },
    {
      name: "Crab Pot Restaurant",
      city: "La Quinta",
      state: "CA",
      region: "West Coast",
      type: ["Commercial", "Retail"],
      lat: 33.6634,
      lng: -116.3100,
      projects: 1
    },
    {
      name: "Aurora Square Redevelopment",
      city: "Shoreline",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.7557,
      lng: -122.3415,
      projects: 1
    },
    {
      name: "Alderwood Mall Redevelopment",
      city: "Lynnwood",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.8279,
      lng: -122.3054,
      projects: 1
    },
    {
      name: "Beaverton Town Center",
      city: "Beaverton",
      state: "OR",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 45.4871,
      lng: -122.8037,
      projects: 1
    },
    {
      name: "Lakewood Towne Center",
      city: "Lakewood",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.1718,
      lng: -122.5185,
      projects: 1
    },
    {
      name: "Lincoln Square South",
      city: "Bellevue",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.6154,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Factoria Mall Redevelopment",
      city: "Bellevue",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.5765,
      lng: -122.1651,
      projects: 1
    },
    {
      name: "The Landing",
      city: "Renton",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.4905,
      lng: -122.2031,
      projects: 1
    },
    {
      name: "Redmond Town Center",
      city: "Redmond",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.6740,
      lng: -122.1215,
      projects: 1
    },
    {
      name: "Park Place Redevelopment",
      city: "Kirkland",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.6797,
      lng: -122.2087,
      projects: 1
    },
    {
      name: "Southcenter Mall Renovation",
      city: "Tukwila",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.4604,
      lng: -122.2595,
      projects: 1
    },
    {
      name: "Northgate Mall Redevelopment",
      city: "Seattle",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.7073,
      lng: -122.3250,
      projects: 1
    },
    {
      name: "Tacoma Mall Renovation",
      city: "Tacoma",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.2066,
      lng: -122.4640,
      projects: 1
    },
    {
      name: "Valley Mall Renovation",
      city: "Union Gap",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 46.5579,
      lng: -120.4756,
      projects: 1
    },
    {
      name: "Alderwood Costco",
      city: "Lynnwood",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Commercial", "Retail"],
      lat: 47.8279,
      lng: -122.3054,
      projects: 1
    },
    {
      name: "Emerald Tech Offices",
      city: "Seattle",
      state: "WA",
      region: "Pacific Northwest",
      type: ["Workplace", "Commercial"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Sunrise Apartments",
      city: "Spokane",
      state: "WA",
      region: "Inland Northwest",
      type: ["Multifamily"],
      lat: 47.6588,
      lng: -117.4260,
      projects: 1
    },
    {
      name: "Evergreen Self Storage",
      city: "Tacoma",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage", "Industrial"],
      lat: 47.2529,
      lng: -122.4443,
      projects: 1
    }, 
    {
      name: "236 Edmonds Modular Apartments Study",
      city: "Edmonds",
      state: "WA",
      region: "North Sound",
      type: ["Modular"],
      lat: 47.8107,
      lng: -122.3774,
      projects: 1
    },
    {
      name: "505 Swift Boulevard Modular Apartments",
      city: "Richland",
      state: "WA",
      region: "Tri-Cities",
      type: ["Modular"],
      lat: 46.2804,
      lng: -119.2752,
      projects: 1
    },
    {
      name: "Blue Ocean Modular Prototype",
      city: "USA",
      state: "",
      region: "National",
      type: ["Modular"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "Buffalo & Montana Street Modular Apartments Study",
      city: "Portland",
      state: "OR",
      region: "Pacific NW",
      type: ["Modular"],
      lat: 45.5051,
      lng: -122.6750,
      projects: 1
    },
    {
      name: "Calgary Modular Condominiums Study",
      city: "Calgary",
      state: "AB",
      region: "Canada",
      type: ["Modular"],
      lat: 51.0447,
      lng: -114.0719,
      projects: 1
    },
    {
      name: "Coast Cranes Office Remodel & Mezzanine Addition",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Cubix North Park Modular Apartments",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Cubix Othello Station Modular Apartments",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.5371,
      lng: -122.2769,
      projects: 1
    },
    {
      name: "Educational Service District Office",
      city: "Yakima",
      state: "WA",
      region: "Central WA",
      type: ["Modular"],
      lat: 46.6021,
      lng: -120.5059,
      projects: 1
    },
    {
      name: "Esteram Modular Apartments",
      city: "Saskatchewan",
      state: "SK",
      region: "Canada",
      type: ["Modular"],
      lat: 52.9399,
      lng: -106.4509,
      projects: 1
    },
    {
      name: "Greenwood Modular Apartments",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.6915,
      lng: -122.3558,
      projects: 1
    },
    {
      name: "Guerdon Modular Office",
      city: "Yakima",
      state: "WA",
      region: "Central WA",
      type: ["Modular"],
      lat: 46.6021,
      lng: -120.5059,
      projects: 1
    },
    {
      name: "Intracorp Lighthouse Modular Apartments",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "La Almenara Affordable Modular Apartments",
      city: "Pittsburg",
      state: "CA",
      region: "Bay Area",
      type: ["Modular"],
      lat: 38.0278,
      lng: -121.8847,
      projects: 1
    },
    {
      name: "Lake City Modular Apartments",
      city: "Seattle",
      state: "WA",
      region: "North Seattle",
      type: ["Modular"],
      lat: 47.7178,
      lng: -122.3121,
      projects: 1
    },
    {
      name: "Linden Modular Apartments",
      city: "Seattle",
      state: "WA",
      region: "North Seattle",
      type: ["Modular"],
      lat: 47.7166,
      lng: -122.3460,
      projects: 1
    },
    {
      name: "Madison 23 Modular Study",
      city: "Seattle",
      state: "WA",
      region: "Central Seattle",
      type: ["Modular"],
      lat: 47.6186,
      lng: -122.3027,
      projects: 1
    },
    {
      name: "Mather Capital Apartments",
      city: "Bismarck",
      state: "ND",
      region: "Midwest",
      type: ["Modular"],
      lat: 46.8083,
      lng: -100.7837,
      projects: 1
    },
    {
      name: "McFarland Modular Office",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Modular Multi-Family Development",
      city: "Minton",
      state: "ND",
      region: "Midwest",
      type: ["Modular"],
      lat: 46.4161,
      lng: -100.5351,
      projects: 1
    },
    {
      name: "Modular Portable Laboratory",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Modular Senior Housing",
      city: "Rancho Cordova",
      state: "CA",
      region: "Sacramento",
      type: ["Modular"],
      lat: 38.5891,
      lng: -121.3027,
      projects: 1
    },
    {
      name: "Ness Cranes Modular Office Relocation",
      city: "Tukwila",
      state: "WA",
      region: "Puget Sound",
      type: ["Modular"],
      lat: 47.4739,
      lng: -122.2600,
      projects: 1
    },
    {
      name: "Oldivai Modular Townhomes",
      city: "Multiple",
      state: "WA",
      region: "Various",
      type: ["Modular"],
      lat: 47.5,
      lng: -120.0,
      projects: 1
    },
    {
      name: "Roosevelt Modular Apartments Study",
      city: "Seattle",
      state: "WA",
      region: "North Seattle",
      type: ["Modular"],
      lat: 47.6808,
      lng: -122.3170,
      projects: 1
    },
    {
      name: "Saskatoon Modular Apartments",
      city: "Saskatoon",
      state: "SK",
      region: "Canada",
      type: ["Modular"],
      lat: 52.1332,
      lng: -106.6700,
      projects: 1
    },
    {
      name: "Stanley Ranch Modular Hotel",
      city: "USA",
      state: "",
      region: "National",
      type: ["Modular"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "Teton Modular Camp & Laundry Building",
      city: "Multiple",
      state: "LA, NM, OK, TX",
      region: "South",
      type: ["Modular"],
      lat: 33.0,
      lng: -98.0,
      projects: 1
    },
    {
      name: "Union 93 Modular Apartments",
      city: "Meridian",
      state: "ID",
      region: "Boise Area",
      type: ["Modular"],
      lat: 43.6126,
      lng: -116.3915,
      projects: 1
    },
    {
      name: "US Prefab Assisted Living Modular Prototype",
      city: "USA",
      state: "",
      region: "National",
      type: ["Modular"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "US Prefab Multifamily Modular Apartment Prototype",
      city: "USA",
      state: "",
      region: "National",
      type: ["Modular"],
      lat: 39.8283,
      lng: -98.5795,
      projects: 1
    },
    {
      name: "Valencia Grove Apartments Study",
      city: "Redlands",
      state: "CA",
      region: "Inland Empire",
      type: ["Modular"],
      lat: 34.0556,
      lng: -117.1825,
      projects: 1
    },
    {
      name: "Westlake Mixed-Use Apartment Study",
      city: "Daly City",
      state: "CA",
      region: "Bay Area",
      type: ["Modular"],
      lat: 37.6879,
      lng: -122.4702,
      projects: 1
    },
    {
      name: "All Saints Lutheran Church",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Beachwood Park",
      city: "Birch Bay",
      state: "WA",
      region: "Northwest",
      type: ["Institutional"],
      lat: 48.9154,
      lng: -122.7457,
      projects: 1
    },
    {
      name: "Bellevue Christian School",
      city: "Bellevue",
      state: "WA",
      region: "Eastside",
      type: ["Institutional"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Boulder City Air Terminal",
      city: "Boulder City",
      state: "NV",
      region: "Southwest",
      type: ["Institutional"],
      lat: 35.9786,
      lng: -114.8318,
      projects: 1
    },
    {
      name: "Christian Bible Fellowship",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "City Church of Puget Sound",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "City Church of the Central Coast",
      city: "San Luis Obispo",
      state: "CA",
      region: "California",
      type: ["Institutional"],
      lat: 35.2828,
      lng: -120.6596,
      projects: 1
    },
    {
      name: "Clyde Hill Police Station Renovation",
      city: "Clyde Hill",
      state: "WA",
      region: "Eastside",
      type: ["Institutional"],
      lat: 47.6307,
      lng: -122.2157,
      projects: 1
    },
    {
      name: "Clyde Hill Town Hall",
      city: "Clyde Hill",
      state: "WA",
      region: "Eastside",
      type: ["Institutional"],
      lat: 47.6307,
      lng: -122.2157,
      projects: 1
    },
    {
      name: "Congregational Church of Mercer Island",
      city: "Mercer Island",
      state: "WA",
      region: "Eastside",
      type: ["Institutional"],
      lat: 47.5707,
      lng: -122.2221,
      projects: 1
    },
    {
      name: "Fire Stations",
      city: "Various",
      state: "WA",
      region: "Statewide",
      type: ["Institutional"],
      lat: 47.7511,
      lng: -120.7401,
      projects: 1
    },
    {
      name: "Grand Canyon Heliport",
      city: "Boulder City",
      state: "NV",
      region: "Southwest",
      type: ["Institutional"],
      lat: 35.9786,
      lng: -114.8318,
      projects: 1
    },
    {
      name: "Hope of the City Church",
      city: "Tukwila",
      state: "WA",
      region: "South Sound",
      type: ["Institutional"],
      lat: 47.4736,
      lng: -122.2566,
      projects: 1
    },
    {
      name: "Islamic Center of the Eastside",
      city: "Kent",
      state: "WA",
      region: "South Sound",
      type: ["Institutional"],
      lat: 47.3809,
      lng: -122.2348,
      projects: 1
    },
    {
      name: "Japanese Baptist Church",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Las Vegas Worldport",
      city: "Las Vegas",
      state: "NV",
      region: "Southwest",
      type: ["Institutional"],
      lat: 36.1699,
      lng: -115.1398,
      projects: 1
    },
    {
      name: "Magnuson Park Marina",
      city: "Sun Valley",
      state: "ID",
      region: "Mountain West",
      type: ["Institutional"],
      lat: 43.6972,
      lng: -114.3514,
      projects: 1
    },
    {
      name: "Mercer Island Christian Church",
      city: "Bellevue",
      state: "WA",
      region: "Eastside",
      type: ["Institutional"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Montessori School",
      city: "Various",
      state: "WA",
      region: "Statewide",
      type: ["Institutional"],
      lat: 47.7511,
      lng: -120.7401,
      projects: 1
    },
    {
      name: "Pacific Maritime Institute",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Papillon Grand Canyon Heliport",
      city: "Grand Canyon",
      state: "AZ",
      region: "Southwest",
      type: ["Institutional"],
      lat: 36.1069,
      lng: -112.1129,
      projects: 1
    },
    {
      name: "Papillon Honolulu Heliport",
      city: "Honolulu",
      state: "HI",
      region: "Pacific",
      type: ["Institutional"],
      lat: 21.3069,
      lng: -157.8583,
      projects: 1
    },
    {
      name: "Papillon Lihue Tourist Facility",
      city: "Kauai",
      state: "HI",
      region: "Pacific",
      type: ["Institutional"],
      lat: 22.0964,
      lng: -159.5261,
      projects: 1
    },
    {
      name: "Pillar of Truth Church",
      city: "Renton",
      state: "WA",
      region: "South Sound",
      type: ["Institutional"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "Seattle Great Wheel",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6071,
      lng: -122.3421,
      projects: 1
    },
    {
      name: "Seattle Waterfront Improvements",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Tam O’Shanter Clubhouse",
      city: "Bellevue",
      state: "WA",
      region: "Eastside",
      type: ["Institutional"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Union Street Tram",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Swedish Health Ballard Emergency Department",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6671,
      lng: -122.3826,
      projects: 1
    },
    {
      name: "Evergreen Health Monroe",
      city: "Monroe",
      state: "WA",
      region: "Eastside",
      type: ["Healthcare"],
      lat: 47.8554,
      lng: -121.9728,
      projects: 1
    },
    {
      name: "Rainier School Nursing Facility",
      city: "Buckley",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare", "Institutional"],
      lat: 47.1618,
      lng: -122.0268,
      projects: 1
    },
    {
      name: "Kaiser Permanente Burien",
      city: "Burien",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.4666,
      lng: -122.3460,
      projects: 1
    },
    {
      name: "Seattle Fire Station 31",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional", "Public Safety"],
      lat: 47.7180,
      lng: -122.3530,
      projects: 1
    },
    {
      name: "Edmonds Maintenance & Admin Center",
      city: "Edmonds",
      state: "WA",
      region: "North Sound",
      type: ["Institutional", "Civic"],
      lat: 47.8107,
      lng: -122.3774,
      projects: 1
    },
    {
      name: "West Sound Skills Center Modernization",
      city: "Bremerton",
      state: "WA",
      region: "Peninsula",
      type: ["Institutional", "Education"],
      lat: 47.5673,
      lng: -122.6326,
      projects: 1
    },
    {
      name: "Northshore Utility District Headquarters",
      city: "Kenmore",
      state: "WA",
      region: "Puget Sound",
      type: ["Institutional", "Civic"],
      lat: 47.7573,
      lng: -122.2446,
      projects: 1
    }, 
    {
      name: "Public Storage SODO",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Self-Storage", "Industrial"],
      lat: 47.5809,
      lng: -122.3273,
      projects: 1
    },
    {
      name: "Public Storage Hilltop",
      city: "Tacoma",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.2485,
      lng: -122.4395,
      projects: 1
    },
    {
      name: "Snapbox Self Storage",
      city: "Lakewood",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1651,
      lng: -122.5185,
      projects: 1
    },
    {
      name: "Acute Pain Therapies",
      city: "Bellevue",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Ascendant Laboratories",
      city: "Bellevue",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Bellevue Surgical Center",
      city: "Bellevue",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Center for Diagnostic Imaging",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Central Washington Hospital",
      city: "Wenatchee",
      state: "WA",
      region: "Central Washington",
      type: ["Healthcare"],
      lat: 47.4235,
      lng: -120.3103,
      projects: 1
    },
    {
      name: "Compounding Pharmacy",
      city: "Federal Way",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.3223,
      lng: -122.3126,
      projects: 1
    },
    {
      name: "Dermatology of Seattle MOHS Surgical Center",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "EPIC/Center for Diagnostic Imaging",
      city: "Portland",
      state: "OR",
      region: "Oregon",
      type: ["Healthcare"],
      lat: 45.5152,
      lng: -122.6784,
      projects: 1
    },
    {
      name: "Everett Surgical Center",
      city: "Everett",
      state: "WA",
      region: "North Sound",
      type: ["Healthcare"],
      lat: 47.9784,
      lng: -122.2021,
      projects: 1
    },
    {
      name: "Evergreen Eye Centers",
      city: "Federal Way",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.3223,
      lng: -122.3126,
      projects: 1
    },
    {
      name: "Garcia Medical Aesthetic",
      city: "Tacoma",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.2529,
      lng: -122.4443,
      projects: 1
    },
    {
      name: "Health Scan",
      city: "Renton",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "Highline Medical Park",
      city: "Burien",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.4704,
      lng: -122.3468,
      projects: 1
    },
    {
      name: "Intelli-Care",
      city: "Bellevue",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "Interventional Radiology – Saint Clare Hospital",
      city: "Lakewood",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.1718,
      lng: -122.5185,
      projects: 1
    },
    {
      name: "Issaquah Medical Building",
      city: "Issaquah",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.5301,
      lng: -122.0326,
      projects: 1
    },
    {
      name: "Kirkland Surgical Center",
      city: "Kirkland",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6815,
      lng: -122.2087,
      projects: 1
    },
    {
      name: "Lakeside Milam",
      city: "Renton",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "Laser Eye Center",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Madigan Army Hospital",
      city: "Fort Lewis",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.1011,
      lng: -122.577,
      projects: 1
    },
    {
      name: "Medical Office Building",
      city: "Derna",
      state: "",
      region: "Libya",
      type: ["Healthcare"],
      lat: 32.7684,
      lng: 22.6397,
      projects: 1
    },
    {
      name: "North Kitsap Surgical Associates",
      city: "Poulsbo",
      state: "WA",
      region: "Peninsula",
      type: ["Healthcare"],
      lat: 47.7359,
      lng: -122.6465,
      projects: 1
    },
    {
      name: "Olympia Surgical Center",
      city: "Olympia",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.0379,
      lng: -122.9007,
      projects: 1
    },
    {
      name: "Pain and Spine Surgery Center",
      city: "Olympia",
      state: "WA",
      region: "South Sound",
      type: ["Healthcare"],
      lat: 47.0379,
      lng: -122.9007,
      projects: 1
    },
    {
      name: "Summit Urgent Care",
      city: "Elma",
      state: "WA",
      region: "Southwest",
      type: ["Healthcare"],
      lat: 47.0045,
      lng: -123.4063,
      projects: 1
    },
    {
      name: "VAMC Boise",
      city: "Boise",
      state: "ID",
      region: "Idaho",
      type: ["Healthcare", "Veteran"],
      lat: 43.6150,
      lng: -116.2023,
      projects: 1
    },
    {
      name: "Washington Center for Pain Management",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Healthcare"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Arbor Gardens Assisted Living Facility",
      city: "Edmonds",
      state: "WA",
      region: "Puget Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.8107,
      lng: -122.3774,
      projects: 1
    },
    {
      name: "Atria Senior Housing",
      city: "Multiple",
      state: "CA",
      region: "California",
      type: ["Senior Housing", "Healthcare"],
      lat: 36.7783,
      lng: -119.4179,
      projects: 1
    },
    {
      name: "Circle of Friends Adult Day-House Facility",
      city: "Renton",
      state: "WA",
      region: "South Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "Cordata Park Senior Cottages",
      city: "Bellingham",
      state: "WA",
      region: "Northwest",
      type: ["Senior Housing", "Healthcare"],
      lat: 48.7519,
      lng: -122.4787,
      projects: 1
    },
    {
      name: "Cornerstone Senior Campus",
      city: "Multiple",
      state: "AK & WA",
      region: "Pacific Northwest",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.7511,
      lng: -120.7401,
      projects: 1
    },
    {
      name: "Fairmont Terrace Assisted Living Facility",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Highgate House Facilities",
      city: "Multiple",
      state: "WA",
      region: "Washington",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.7511,
      lng: -120.7401,
      projects: 1
    },
    {
      name: "Horizons Senior Housing",
      city: "Rancho Cordova",
      state: "CA",
      region: "California",
      type: ["Senior Housing", "Healthcare"],
      lat: 38.5891,
      lng: -121.3027,
      projects: 1
    },
    {
      name: "Lakewood Senior Campus",
      city: "Lakewood",
      state: "WA",
      region: "South Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.1718,
      lng: -122.5185,
      projects: 1
    },
    {
      name: "Las Cortes Senior Housing",
      city: "Oxnard",
      state: "CA",
      region: "California",
      type: ["Senior Housing", "Healthcare"],
      lat: 34.1975,
      lng: -119.1771,
      projects: 1
    },
    {
      name: "Lexington Place Assisted Living Facility",
      city: "Vancouver",
      state: "WA",
      region: "Southwest WA",
      type: ["Senior Housing", "Healthcare"],
      lat: 45.6387,
      lng: -122.6615,
      projects: 1
    },
    {
      name: "Meadow Point Senior Condos",
      city: "Bellingham",
      state: "WA",
      region: "Northwest",
      type: ["Senior Housing", "Healthcare"],
      lat: 48.7519,
      lng: -122.4787,
      projects: 1
    },
    {
      name: "Merrill Gardens",
      city: "Stanwood",
      state: "WA",
      region: "North Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 48.2415,
      lng: -122.3707,
      projects: 1
    },
    {
      name: "Mira Vista Rehabilitation Center",
      city: "Mount Vernon",
      state: "WA",
      region: "North Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 48.4212,
      lng: -122.3341,
      projects: 1
    },
    {
      name: "Montclair Park Assisted Living",
      city: "Poulsbo",
      state: "WA",
      region: "Olympic Peninsula",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.7359,
      lng: -122.6465,
      projects: 1
    },
    {
      name: "Renton Skilled Nursing Facility",
      city: "Renton",
      state: "WA",
      region: "South Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "The Inn at Stanwood Assisted Living Center",
      city: "Stanwood",
      state: "WA",
      region: "North Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 48.2415,
      lng: -122.3707,
      projects: 1
    },
    {
      name: "Vashon Community Care Center",
      city: "Vashon Island",
      state: "WA",
      region: "Puget Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.4473,
      lng: -122.4596,
      projects: 1
    },
    {
      name: "Washington Center Care Facility",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Willows Pond",
      city: "Puyallup",
      state: "WA",
      region: "South Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.1854,
      lng: -122.2929,
      projects: 1
    },
    {
      name: "Wyatt House",
      city: "Bainbridge Island",
      state: "WA",
      region: "Puget Sound",
      type: ["Senior Housing", "Healthcare"],
      lat: 47.6262,
      lng: -122.5212,
      projects: 1
    },
    {
      name: "24th Street Business Park",
      city: "Sumner",
      state: "WA",
      region: "South Sound",
      type: ["Industrial"],
      lat: 47.2034,
      lng: -122.2400,
      projects: 1
    },
    {
      name: "212 Business Park",
      city: "Kent",
      state: "WA",
      region: "South Sound",
      type: ["Industrial"],
      lat: 47.3851,
      lng: -122.2337,
      projects: 1
    },
    {
      name: "Atlas Supply, Inc.",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Industrial"],
      lat: 47.5973,
      lng: -122.3280,
      projects: 1
    },
    {
      name: "Efco Warehouse / Office Addition",
      city: "Kent",
      state: "WA",
      region: "South Sound",
      type: ["Industrial"],
      lat: 47.3851,
      lng: -122.2337,
      projects: 1
    },
    {
      name: "Genie Industries",
      city: "North Bend",
      state: "WA",
      region: "Eastside",
      type: ["Industrial"],
      lat: 47.4932,
      lng: -121.7868,
      projects: 1
    },
    {
      name: "King Manufacturing",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Industrial"],
      lat: 47.6026,
      lng: -122.3331,
      projects: 1
    },
    {
      name: "MV Transit",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Industrial", "Transportation"],
      lat: 47.6738,
      lng: -122.1215,
      projects: 1
    },
    {
      name: "Neuvant Aerospace",
      city: "Everett",
      state: "WA",
      region: "North Sound",
      type: ["Industrial", "Aerospace"],
      lat: 47.9784,
      lng: -122.2021,
      projects: 1
    },
    {
      name: "National Products Inc.",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Industrial"],
      lat: 47.6011,
      lng: -122.3311,
      projects: 1
    },
    {
      name: "Zodiac Aerospace Autoclave",
      city: "Marysville",
      state: "WA",
      region: "North Sound",
      type: ["Industrial", "Aerospace"],
      lat: 48.0518,
      lng: -122.1771,
      projects: 1
    },
    {
      name: "4 Corners Self Storage",
      city: "Maple Valley",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.3673,
      lng: -122.0458,
      projects: 1
    },
    {
      name: "5 Point",
      city: "Seattle",
      state: "WA",
      region: "Seattle",
      type: ["Self-Storage"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "AAA Cool Storage",
      city: "Phoenix",
      state: "AZ",
      region: "Southwest",
      type: ["Self-Storage"],
      lat: 33.4484,
      lng: -112.0740,
      projects: 1
    },
    {
      name: "Armor Storage",
      city: "Poulsbo",
      state: "WA",
      region: "Kitsap Peninsula",
      type: ["Self-Storage"],
      lat: 47.7359,
      lng: -122.6465,
      projects: 1
    },
    {
      name: "Badger Self Storage",
      city: "Bend",
      state: "OR",
      region: "Central Oregon",
      type: ["Self-Storage"],
      lat: 44.0582,
      lng: -121.3153,
      projects: 1
    },
    {
      name: "Ballinger Heated Storage",
      city: "Shoreline",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.7557,
      lng: -122.3415,
      projects: 1
    },
    {
      name: "Bolt Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle",
      type: ["Self-Storage"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Bostian Storage",
      city: "Woodinville",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.7543,
      lng: -122.1635,
      projects: 1
    },
    {
      name: "Camano Self Storage",
      city: "Camano Island",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 48.1665,
      lng: -122.5115,
      projects: 1
    },
    {
      name: "Cascade Self Storage",
      city: "Chehalis",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 46.6629,
      lng: -122.9640,
      projects: 1
    },
    {
      name: "Elliott Bay Self Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6235,
      lng: -122.3510,
      projects: 1
    },
    {
      name: "Extra Space Storage",
      city: "Various",
      state: "CA, HI, OR, WA",
      region: "Multiple",
      type: ["Self-Storage"],
      lat: 36.7783,
      lng: -119.4179,
      projects: 1
    },
    {
      name: "Get Space Self Storage",
      city: "Various",
      state: "OR",
      region: "Oregon",
      type: ["Self-Storage"],
      lat: 44.0582,
      lng: -121.3153,
      projects: 1
    },
    {
      name: "Gillies Heated Self Storage",
      city: "Lynden",
      state: "WA",
      region: "Northwest",
      type: ["Self-Storage"],
      lat: 48.9467,
      lng: -122.4521,
      projects: 1
    },
    {
      name: "Gilman Point Self Storage",
      city: "Issaquah",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.5301,
      lng: -122.0326,
      projects: 1
    },
    {
      name: "Greenlake Self Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6815,
      lng: -122.3285,
      projects: 1
    },
    {
      name: "Guardwell Storage",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.6730,
      lng: -122.1215,
      projects: 1
    },
    {
      name: "Interbay Self Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6451,
      lng: -122.3761,
      projects: 1
    },
    {
      name: "Kent Self Storage",
      city: "Kent",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.3851,
      lng: -122.2337,
      projects: 1
    },
    {
      name: "Leon Self Storage",
      city: "Various",
      state: "WA",
      region: "Washington",
      type: ["Self-Storage"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "Madrona Self Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6139,
      lng: -122.2881,
      projects: 1
    },
    {
      name: "Mall Storage",
      city: "Lynnwood",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.8279,
      lng: -122.3054,
      projects: 1
    },
    {
      name: "Martin Way Self Storage",
      city: "Lacey",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.0457,
      lng: -122.8232,
      projects: 1
    },
    {
      name: "Metropolitan Market Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6392,
      lng: -122.4044,
      projects: 1
    },
    {
      name: "Midway Self Storage",
      city: "Kent",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.3898,
      lng: -122.2965,
      projects: 1
    },
    {
      name: "Mile Hill Self Storage",
      city: "Port Orchard",
      state: "WA",
      region: "Kitsap Peninsula",
      type: ["Self-Storage"],
      lat: 47.5175,
      lng: -122.6557,
      projects: 1
    },
    {
      name: "Moss Bay Self Storage",
      city: "Kirkland",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.6769,
      lng: -122.2060,
      projects: 1
    },
    {
      name: "Mt. Vernon Self Storage",
      city: "Mount Vernon",
      state: "WA",
      region: "Northwest",
      type: ["Self-Storage"],
      lat: 48.4212,
      lng: -122.3341,
      projects: 1
    },
    {
      name: "Newport Hills Storage",
      city: "Bellevue",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.5486,
      lng: -122.1586,
      projects: 1
    },
    {
      name: "North Creek Self Storage",
      city: "Bothell",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.7996,
      lng: -122.1957,
      projects: 1
    },
    {
      name: "North Hill Self Storage",
      city: "Des Moines",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.3751,
      lng: -122.3126,
      projects: 1
    },
    {
      name: "Olympia U-Haul Storage",
      city: "Olympia",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.0379,
      lng: -122.9007,
      projects: 1
    },
    {
      name: "Orcas Street Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.5525,
      lng: -122.3145,
      projects: 1
    },
    {
      name: "Overlake Self Storage",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.6629,
      lng: -122.1270,
      projects: 1
    },
    {
      name: "Pacific Storage",
      city: "Pacific",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.2645,
      lng: -122.2503,
      projects: 1
    },
    {
      name: "Parkland Self Storage",
      city: "Tacoma",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1411,
      lng: -122.4341,
      projects: 1
    },
    {
      name: "Pine Street Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6156,
      lng: -122.3216,
      projects: 1
    },
    {
      name: "Port Angeles Self Storage",
      city: "Port Angeles",
      state: "WA",
      region: "Olympic Peninsula",
      type: ["Self-Storage"],
      lat: 48.1170,
      lng: -123.4307,
      projects: 1
    },
    {
      name: "Poulsbo Self Storage",
      city: "Poulsbo",
      state: "WA",
      region: "Kitsap Peninsula",
      type: ["Self-Storage"],
      lat: 47.7359,
      lng: -122.6465,
      projects: 1
    },
    {
      name: "Puyallup River Storage",
      city: "Puyallup",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1854,
      lng: -122.2929,
      projects: 1
    },
    {
      name: "Queen Anne Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6376,
      lng: -122.3561,
      projects: 1
    },
    {
      name: "Rainier Valley Self Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.5411,
      lng: -122.2786,
      projects: 1
    },
    {
      name: "Ravenna Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6759,
      lng: -122.3022,
      projects: 1
    },
    {
      name: "Redmond Ridge Self Storage",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.6769,
      lng: -121.9820,
      projects: 1
    },
    {
      name: "Renton Highlands Storage",
      city: "Renton",
      state: "WA",
      region: "South King",
      type: ["Self-Storage"],
      lat: 47.4933,
      lng: -122.1561,
      projects: 1
    },
    {
      name: "Roosevelt Self Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6756,
      lng: -122.3175,
      projects: 1
    },
    {
      name: "Sammamish Self Storage",
      city: "Sammamish",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.6089,
      lng: -122.0456,
      projects: 1
    },
    {
      name: "SeaTac Self Storage",
      city: "SeaTac",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.4485,
      lng: -122.3081,
      projects: 1
    },
    {
      name: "Seattle U-District Storage",
      city: "Seattle",
      state: "WA",
      region: "Seattle Metro",
      type: ["Self-Storage"],
      lat: 47.6615,
      lng: -122.3131,
      projects: 1
    },
    {
      name: "Shoreline Self Storage",
      city: "Shoreline",
      state: "WA",
      region: "North King",
      type: ["Self-Storage"],
      lat: 47.7557,
      lng: -122.3415,
      projects: 1
    },
    {
      name: "Southcenter Storage",
      city: "Tukwila",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.4573,
      lng: -122.2590,
      projects: 1
    },
    {
      name: "South Hill Self Storage",
      city: "Puyallup",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1519,
      lng: -122.2901,
      projects: 1
    },
    {
      name: "Spanaway Self Storage",
      city: "Spanaway",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1004,
      lng: -122.4343,
      projects: 1
    },
    {
      name: "Storage Court of Everett",
      city: "Everett",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.9784,
      lng: -122.2021,
      projects: 1
    },
    {
      name: "Storage Court of Lake Stevens",
      city: "Lake Stevens",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 48.0201,
      lng: -122.0630,
      projects: 1
    },
    {
      name: "Storage Court of Mill Creek",
      city: "Mill Creek",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.8507,
      lng: -122.2044,
      projects: 1
    },
    {
      name: "Storage Court of Shoreline",
      city: "Shoreline",
      state: "WA",
      region: "North King",
      type: ["Self-Storage"],
      lat: 47.7557,
      lng: -122.3415,
      projects: 1
    },
    {
      name: "Storage One on 4th",
      city: "Olympia",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.0417,
      lng: -122.8959,
      projects: 1
    },
    {
      name: "Tacoma Central Storage",
      city: "Tacoma",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.2529,
      lng: -122.4443,
      projects: 1
    },
    {
      name: "The Stor-House Self Storage - Bellevue",
      city: "Bellevue",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.6101,
      lng: -122.2015,
      projects: 1
    },
    {
      name: "The Stor-House Self Storage - Renton",
      city: "Renton",
      state: "WA",
      region: "South King",
      type: ["Self-Storage"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "Totem Self Storage",
      city: "Kent",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.3809,
      lng: -122.2348,
      projects: 1
    },
    {
      name: "Trojan Storage - Everett",
      city: "Everett",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.9784,
      lng: -122.2021,
      projects: 1
    },
    {
      name: "Trojan Storage - Lynnwood",
      city: "Lynnwood",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.8279,
      lng: -122.3054,
      projects: 1
    },
    {
      name: "Trojan Storage - Puyallup",
      city: "Puyallup",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1854,
      lng: -122.2929,
      projects: 1
    },
    {
      name: "Trojan Storage - Tacoma",
      city: "Tacoma",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.2529,
      lng: -122.4443,
      projects: 1
    },
    {
      name: "Trojan Storage - Vancouver",
      city: "Vancouver",
      state: "WA",
      region: "SW Washington",
      type: ["Self-Storage"],
      lat: 45.6387,
      lng: -122.6615,
      projects: 1
    },
    {
      name: "Urban Storage - West Seattle",
      city: "Seattle",
      state: "WA",
      region: "Seattle",
      type: ["Self-Storage"],
      lat: 47.5663,
      lng: -122.3860,
      projects: 1
    },
    {
      name: "Urban Storage @ Rainier Brewery",
      city: "Seattle",
      state: "WA",
      region: "Seattle",
      type: ["Self-Storage"],
      lat: 47.5814,
      lng: -122.3078,
      projects: 1
    },
    {
      name: "Value Village Storage Conversion",
      city: "Seattle",
      state: "WA",
      region: "Seattle",
      type: ["Self-Storage", "Adaptive Reuse"],
      lat: 47.6148,
      lng: -122.3206,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - Auburn",
      city: "Auburn",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.3073,
      lng: -122.2285,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - Everett",
      city: "Everett",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 47.9784,
      lng: -122.2021,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - Marysville",
      city: "Marysville",
      state: "WA",
      region: "North Sound",
      type: ["Self-Storage"],
      lat: 48.0518,
      lng: -122.1771,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - Puyallup",
      city: "Puyallup",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.1854,
      lng: -122.2929,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - Seattle",
      city: "Seattle",
      state: "WA",
      region: "Seattle",
      type: ["Self-Storage"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - Shoreline",
      city: "Shoreline",
      state: "WA",
      region: "North Seattle",
      type: ["Self-Storage"],
      lat: 47.7557,
      lng: -122.3415,
      projects: 1
    },
    {
      name: "West Coast Self-Storage - University Place",
      city: "University Place",
      state: "WA",
      region: "South Sound",
      type: ["Self-Storage"],
      lat: 47.2215,
      lng: -122.5415,
      projects: 1
    },
    {
      name: "Woodinville Self Storage",
      city: "Woodinville",
      state: "WA",
      region: "Eastside",
      type: ["Self-Storage"],
      lat: 47.7543,
      lng: -122.1635,
      projects: 1
    },
    {
      name: "Ambaum Townhomes",
      city: "Burien",
      state: "WA",
      region: "South Sound",
      type: ["Multifamily", "Townhomes"],
      lat: 47.4704,
      lng: -122.3468,
      projects: 1
    },
    {
      name: "Burien Townhomes",
      city: "Burien",
      state: "WA",
      region: "South Sound",
      type: ["Multifamily", "Townhomes"],
      lat: 47.4704,
      lng: -122.3468,
      projects: 1
    },
    {
      name: "Director St. Townhomes",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Multifamily", "Townhomes"],
      lat: 47.6062,
      lng: -122.3321,
      projects: 1
    },
    {
      name: "East Retreat Townhomes",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Multifamily", "Townhomes"],
      lat: 47.67399,
      lng: -122.12151,
      projects: 1
    },
    {
      name: "Greenlake Townhomes",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Multifamily", "Townhomes"],
      lat: 47.6829,
      lng: -122.3255,
      projects: 1
    },
    {
      name: "Greenwood Townhomes",
      city: "Seattle",
      state: "WA",
      region: "Puget Sound",
      type: ["Multifamily", "Townhomes"],
      lat: 47.6929,
      lng: -122.3550,
      projects: 1
    },
    {
      name: "Newcastle Townhomes",
      city: "Newcastle",
      state: "WA",
      region: "Eastside",
      type: ["Multifamily", "Townhomes"],
      lat: 47.5388,
      lng: -122.1668,
      projects: 1
    },
    {
      name: "Oldivai Modular Townhomes",
      city: "Spokane",
      state: "WA",
      region: "Eastern WA",
      type: ["Multifamily", "Townhomes", "Modular"],
      lat: 47.6588,
      lng: -117.4260,
      projects: 1
    },
    {
      name: "Renton Village Redevelopment",
      city: "Renton",
      state: "WA",
      region: "South Sound",
      type: ["Multifamily", "Townhomes"],
      lat: 47.4829,
      lng: -122.2171,
      projects: 1
    },
    {
      name: "Retreat Townhomes",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Multifamily", "Townhomes"],
      lat: 47.67399,
      lng: -122.12151,
      projects: 1
    },
    {
      name: "Sawyer Townhomes",
      city: "Redmond",
      state: "WA",
      region: "Eastside",
      type: ["Multifamily", "Townhomes"],
      lat: 47.67399,
      lng: -122.12151,
      projects: 1
    }
                               
                  
    ];  
    