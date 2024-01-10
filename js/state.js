var countries = {
  Aruba: "ABW",
  Afghanistan: "AFG",
  Angola: "AGO",
  Anguilla: "AIA",
  "Aland Islands !Åland Islands": "ALA",
  Albania: "ALB",
  Andorra: "AND",
  "Not Found": "ANT",
  "United Arab Emirates": "ARE",
  Argentina: "ARG",
  Armenia: "ARM",
  "American Samoa": "ASM",
  Antarctica: "ATA",
  "French Southern Territories": "ATF",
  "Antigua and Barbuda": "ATG",
  Australia: "AUS",
  Austria: "AUT",
  Azerbaijan: "AZE",
  Burundi: "BDI",
  Belgium: "BEL",
  Benin: "BEN",
  "Bonaire, Sint Eustatius and Saba": "BES",
  "Burkina Faso": "BFA",
  Bangladesh: "BGD",
  Bulgaria: "BGR",
  Bahrain: "BHR",
  Bahamas: "BHS",
  "Bosnia and Herzegovina": "BIH",
  "Saint Barthelemy !Saint Barthélemy": "BLM",
  Belarus: "BLR",
  Belize: "BLZ",
  Bermuda: "BMU",
  "Bolivia (Plurinational State of)": "BOL",
  Brazil: "BRA",
  Barbados: "BRB",
  "Brunei Darussalam": "BRN",
  Bhutan: "BTN",
  "Bouvet Island": "BVT",
  Botswana: "BWA",
  "Central African Republic": "CAF",
  Canada: "CAN",
  "Cocos (Keeling) Islands": "CCK",
  Switzerland: "CHE",
  Chile: "CHL",
  China: "CHN",
  "Cote d'Ivoire !Côte d'Ivoire": "CIV",
  Cameroon: "CMR",
  "Congo (Democratic Republic of the)": "COD",
  Congo: "COG",
  "Cook Islands": "COK",
  Colombia: "COL",
  Comoros: "COM",
  "Cabo Verde": "CPV",
  "Costa Rica": "CRI",
  Cuba: "CUB",
  "Curacao !Curaçao": "CUW",
  "Christmas Island": "CXR",
  "Cayman Islands": "CYM",
  Cyprus: "CYP",
  "Czech Republic": "CZE",
  Germany: "DEU",
  Djibouti: "DJI",
  Dominica: "DMA",
  Denmark: "DNK",
  "Dominican Republic": "DOM",
  Algeria: "DZA",
  Ecuador: "ECU",
  Egypt: "EGY",
  Eritrea: "ERI",
  Spain: "ESP",
  Estonia: "EST",
  Ethiopia: "ETH",
  Finland: "FIN",
  Fiji: "FJI",
  "Falkland Islands (Malvinas)": "FLK",
  France: "FRA",
  "Faroe Islands": "FRO",
  "Micronesia (Federated States of)": "FSM",
  Gabon: "GAB",
  "United Kingdom of Great Britain and Northern Ireland": "GBR",
  Georgia: "GEO",
  Guernsey: "GGY",
  Ghana: "GHA",
  Gibraltar: "GIB",
  Guinea: "GIN",
  Guadeloupe: "GLP",
  Gambia: "GMB",
  "Guinea-Bissau": "GNB",
  "Equatorial Guinea": "GNQ",
  Greece: "GRC",
  Grenada: "GRD",
  Greenland: "GRL",
  Guatemala: "GTM",
  "French Guiana": "GUF",
  Guam: "GUM",
  Guyana: "GUY",
  "Hong Kong": "HKG",
  "Heard Island and McDonald Islands": "HMD",
  Honduras: "HND",
  Croatia: "HRV",
  Haiti: "HTI",
  Hungary: "HUN",
  Indonesia: "IDN",
  "Isle of Man": "IMN",
  India: "IND",
  "British Indian Ocean Territory": "IOT",
  Ireland: "IRL",
  "Iran (Islamic Republic of)": "IRN",
  Iraq: "IRQ",
  Iceland: "ISL",
  Israel: "ISR",
  Italy: "ITA",
  Jamaica: "JAM",
  Jersey: "JEY",
  Jordan: "JOR",
  Japan: "JPN",
  Kazakhstan: "KAZ",
  Kenya: "KEN",
  Kyrgyzstan: "KGZ",
  Cambodia: "KHM",
  Kiribati: "KIR",
  "Saint Kitts and Nevis": "KNA",
  "Korea (Republic of)": "KOR",
  Kuwait: "KWT",
  "Lao People's Democratic Republic": "LAO",
  Lebanon: "LBN",
  Liberia: "LBR",
  Libya: "LBY",
  "Saint Lucia": "LCA",
  Liechtenstein: "LIE",
  "Sri Lanka": "LKA",
  Lesotho: "LSO",
  Lithuania: "LTU",
  Luxembourg: "LUX",
  Latvia: "LVA",
  Macao: "MAC",
  "Saint Martin (French part)": "MAF",
  Morocco: "MAR",
  Monaco: "MCO",
  "Moldova (Republic of)": "MDA",
  Madagascar: "MDG",
  Maldives: "MDV",
  Mexico: "MEX",
  "Marshall Islands": "MHL",
  "Macedonia (the former Yugoslav Republic of)": "MKD",
  Mali: "MLI",
  Malta: "MLT",
  Myanmar: "MMR",
  Montenegro: "MNE",
  Mongolia: "MNG",
  "Northern Mariana Islands": "MNP",
  Mozambique: "MOZ",
  Mauritania: "MRT",
  Montserrat: "MSR",
  Martinique: "MTQ",
  Mauritius: "MUS",
  Malawi: "MWI",
  Malaysia: "MYS",
  Mayotte: "MYT",
  Namibia: "NAM",
  "New Caledonia": "NCL",
  Niger: "NER",
  "Norfolk Island": "NFK",
  Nigeria: "NGA",
  Nicaragua: "NIC",
  Niue: "NIU",
  Netherlands: "NLD",
  Norway: "NOR",
  Nepal: "NPL",
  Nauru: "NRU",
  "New Zealand": "NZL",
  Oman: "OMN",
  Pakistan: "PAK",
  Panama: "PAN",
  Pitcairn: "PCN",
  Peru: "PER",
  Philippines: "PHL",
  Palau: "PLW",
  "Papua New Guinea": "PNG",
  Poland: "POL",
  "Puerto Rico": "PRI",
  "Korea (Democratic People's Republic of)": "PRK",
  Portugal: "PRT",
  Paraguay: "PRY",
  "Palestine, State of": "PSE",
  "French Polynesia": "PYF",
  Qatar: "QAT",
  "Reunion !Réunion": "REU",
  Romania: "ROU",
  "Russian Federation": "RUS",
  Rwanda: "RWA",
  "Saudi Arabia": "SAU",
  Sudan: "SDN",
  Senegal: "SEN",
  Singapore: "SGP",
  "South Georgia and the South Sandwich Islands": "SGS",
  "Saint Helena, Ascension and Tristan da Cunha": "SHN",
  "Svalbard and Jan Mayen": "SJM",
  "Solomon Islands": "SLB",
  "Sierra Leone": "SLE",
  "El Salvador": "SLV",
  "San Marino": "SMR",
  Somalia: "SOM",
  "Saint Pierre and Miquelon": "SPM",
  Serbia: "SRB",
  "South Sudan": "SSD",
  "Sao Tome and Principe": "STP",
  Suriname: "SUR",
  Slovakia: "SVK",
  Slovenia: "SVN",
  Sweden: "SWE",
  Swaziland: "SWZ",
  "Sint Maarten (Dutch part)": "SXM",
  Seychelles: "SYC",
  "Syrian Arab Republic": "SYR",
  "Turks and Caicos Islands": "TCA",
  Chad: "TCD",
  Togo: "TGO",
  Thailand: "THA",
  Tajikistan: "TJK",
  Tokelau: "TKL",
  Turkmenistan: "TKM",
  "Timor-Leste": "TLS",
  Tonga: "TON",
  "Trinidad and Tobago": "TTO",
  Tunisia: "TUN",
  Turkey: "TUR",
  Tuvalu: "TUV",
  "Taiwan, Province of China[a]": "TWN",
  "Tanzania, United Republic of": "TZA",
  Uganda: "UGA",
  Ukraine: "UKR",
  "United States Minor Outlying Islands": "UMI",
  Uruguay: "URY",
  "United States of America": "USA",
  Uzbekistan: "UZB",
  "Holy See": "VAT",
  "Saint Vincent and the Grenadines": "VCT",
  "Venezuela (Bolivarian Republic of)": "VEN",
  "Virgin Islands (British)": "VGB",
  "Virgin Islands (U.S.)": "VIR",
  "Viet Nam": "VNM",
  Vanuatu: "VUT",
  "Wallis and Futuna": "WLF",
  Samoa: "WSM",
  Kosovo: "XKS",
  Yemen: "YEM",
  "South Africa": "ZAF",
  Zambia: "ZMB",
  Zimbabwe: "ZWE",
};

var countryArray = Object.entries(countries);

countryArray.sort(function (a, b) {
  return a[0].localeCompare(b[0]);
});

var sortedCountries = Object.fromEntries(countryArray);

// console.log(sortedCountries);

var States = {
  ARE: {
    Dubai: "Dubai",
    "Dubai Jabel Ali": "Dubai-JBL",
  },
  ESP: {
    "Calle Miguel Angel 16, 28010": "Madrid",
  },
  IRQ: {
    Baghdad: "Baghdad",
  },
  POL: {
    Koscierzyn: "Koscierzyn",
    MAZOWIECKI: "MAZOWIECKI",
  },
  SDN: {
    Khartoum: "Khartoum",
  },
  USA: {
    Alaska: "AK",
    Alabama: "AL",
    Arkansas: "AR",
    "American Samoa": "AS",
    Arizona: "AZ",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    "District of Columbia": "DC",
    Delaware: "DE",
    Florida: "FL",
    "Federated States of Micronesia": "FM",
    Georgia: "GA",
    Guam: "GU",
    Hawaii: "HI",
    Iowa: "IA",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Massachusetts: "MA",
    Maryland: "MD",
    Maine: "ME",
    "Marshall Islands": "MH",
    Michigan: "MI",
    Minnesota: "MN",
    Missouri: "MO",
    "Northern Mariana Islands": "MP",
    Mississippi: "MS",
    Montana: "MT",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Nebraska: "NE",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    Nevada: "NV",
    "New York": "NY",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Puerto Rico": "PR",
    Palau: "PW",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennesee: "TN",
    Texas: "TX",
    Utah: "UT",
    Virginia: "VA",
    "Virgin Islands": "VI",
    Vermont: "VT",
    Washington: "WA",
    Wisconsin: "WI",
    "West Virginia": "WV",
    Wyoming: "WY",
  },
};

// window.onload = function () {
//   var countrySel = document.querySelector(".zf-form-sBox");
//   var stateSel = document.querySelector(".Address_Region");
//   let output = "";
//   for (var country in countries) {
//     output += `<option value="${countries[country]}">${country}</option>`;
//   }
//   countrySel.innerHTML = output;

//   countrySel.onchange = function () {
//     stateSel.length = 1;
//     if (this.selectedIndex < 1) {
//       stateSel.length = 1;
//     }
//     let outputState = "";

//     for (var state in States[this.value]) {
//       console.log(state);
//       outputState += `<option value="${
//         States[this.value][state]
//       }">${state}</option>`;
//     }
//     stateSel.innerHTML = outputState;
//   };
// };

// **************************************

// window.onload = function () {
//   var countySel = document.querySelector(".zf-form-sBox"),
//     stateSel = document.querySelector(".Address_Region");

//   for (var country in countries) {
//     countySel.options[countySel.options.length] = new Option(
//       country,
//       countries[country]
//     );
//   }

//   countySel.onchange = function () {
//     stateSel.length = 1;

//     if (this.selectedIndex < 1) return;
//     for (var state in States[this.value]) {
//       stateSel.options[stateSel.options.length] = new Option(
//         state,
//         States[this.value][state]
//       );
//     }
//   };
// };

// **************************************

var countriesWithState = ["ARE", "ESP", "IRQ", "POL", "SDN", "USA"];

var original_zf_MandArray = [
  "Name_Last",
  "Email",
  "SingleLine",
  "Address_AddressLine1",
  "Address_City",
  "Address_Region",
  "Address_ZipCode",
  "Address_Country",
];
var zf_MandArray = original_zf_MandArray.slice();

window.onload = function () {
  var countySel = document.querySelector(".zf-form-sBox"),
    stateDropdown = document.querySelector(".state-dropdown"),
    stateText = document.querySelector(".state-text"),
    star = document.querySelector(".star");

  // Populate country dropdown on page load
  for (var country in sortedCountries) {
    countySel.options[countySel.options.length] = new Option(
      country,
      sortedCountries[country]
    );
  }

  // Handle change event on country dropdown
  countySel.onchange = function () {
    updateStateDropdown();
    updateArray();
  };

  function updateStateDropdown() {
    // Clear existing options
    stateDropdown.length = 1;

    if (countySel.selectedIndex < 1) {
      // Hide both state dropdown and state text input if no country is selected
      stateDropdown.style.display = "none";
      star.style.display = "none";
      stateText.style.display = "block";
      return;
    }

    // Show either state dropdown or state text input based on the selected country
    if (countriesWithState.includes(countySel.value)) {
      stateDropdown.style.display = "block";
      star.style.display = "inline-block";
      stateText.style.display = "none";
      for (var state in States[countySel.value]) {
        console.log(States[countySel.value]);
        stateDropdown.options[stateDropdown.options.length] = new Option(
          state,
          States[countySel.value][state]
        );
      }
    } else {
      stateDropdown.style.display = "none";
      star.style.display = "none";
      stateText.style.display = "block";
    }
  }

  function updateArray() {
    // setTimeout(function () {
    var isDropdownVisible = stateDropdown.style.display === "block";

    // Remove "Address_Region" if the dropdown is hidden
    zf_MandArray = original_zf_MandArray.filter(function (element) {
      return element !== "Address_Region" || isDropdownVisible;
    });

    // console.log(zf_MandArray);
    // }, 100); // Adjust the delay as needed
  }

  // Initial setup
  updateStateDropdown();
  updateArray();
};

// window.onload = function () {
//   var countySel = document.querySelector(".zf-form-sBox"),
//     stateDropdown = document.querySelector(".state-dropdown"),
//     stateText = document.querySelector(".state-text");

//   for (var country in countries) {
//     countySel.options[countySel.options.length] = new Option(
//       country,
//       countries[country]
//     );
//   }

//   countySel.onchange = function () {
//     // Clear existing options
//     stateDropdown.length = 1;
//     console.log(this.value);

//     if (this.selectedIndex < 1) {
//       // Hide both state dropdown and state text input if no country is selected
//       stateDropdown.style.display = "block";
//       stateText.style.display = "none";
//       return;
//     }

//     // Show either state dropdown or state text input based on the selected country
//     if (countriesWithState.includes(this.value)) {
//       stateDropdown.style.display = "block";
//       stateText.style.display = "none";
//       for (var state in States[this.value]) {
//         stateDropdown.options[stateDropdown.options.length] = new Option(
//           state,
//           States[this.value][state]
//         );
//       }
//     } else {
//       stateDropdown.style.display = "none";
//       stateText.style.display = "block";

//       // Populate state dropdown
//     }
//   };
// };
// **************************************

// document.addEventListener("DOMContentLoaded", () => {
//   const selectDrop = document.querySelector(".zf-form-sBox");
//   // const selectDrop = document.getElementById('countries');

//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let output = "";
//       data.forEach((country) => {
//         console.log(country);
//         output += `
//         <option value="${country.altSpellings[0]}">${country.altSpellings[1]}</option>`;
//         // console.log(output);
//       });

//       selectDrop.innerHTML = output;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const dropdownList = $(".dropdown-list");
const addressInfo = $(".addressInfo");

function fetchData(query, callback) {
  $.get(query, callback);
}

// Function to handle the search input
function searchDropdown() {
  const query = `http://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws?Key=TT94-AT81-MN48-CE66&Countries=USA&Limit=10&Text=${$(
    "#searchInput"
  ).val()}`;

  // Call the API to get data based on the search query
  fetchData(query, (data) => {
    const filteredOptions = data.Items;
    dropdownList.empty();
    filteredOptions.forEach((option) => {
      if (option.Type === "Container") {
        dropdownList.append(
          `<div class="dropdown-item"> ${option.Text} <span id="${option.Id}" onclick="callback(event, this);">see all ${option.Description}</span></div>`
        );
      } else {
        dropdownList.append(
          '<div class="dropdown-item">No matching results</div>'
        );
      }
    });
  });
}
function callback(e, thisObj) {
  let id = thisObj.id;
  const query = `http://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws?Key=TT94-AT81-MN48-CE66&Countries=USA&Limit=10&Container=${id}`;
  fetchData(query, (data) => {
    const filteredOptions = data.Items;
    dropdownList.empty();
    dropdownList.css({ "max-height": "300px", "overflow-y": "auto" });

    filteredOptions.forEach((option) => {
      if (option.Type === "Container") {
        dropdownList.append(
          `<div class="dropdown-item"> ${option.Text} <span id="${option.Id}" onclick="callback(event, this);">see all ${option.Description}</span></div>`
        );
      } else {
        dropdownList.append(
          `<div class="dropdown-item" id="${option.Id}" onclick="getAddressDetail(event, this);"> ${option.Text}</div>`
        );
      }
    });
  });
}
function getAddressDetail(e, thisObj) {
  let id = thisObj.id;
  const query = `https://api.addressy.com/Capture/Interactive/Retrieve/v1.2/json3.ws?Key=TT94-AT81-MN48-CE66&Id=${id}`;
  fetchData(query, (data) => {
    const filteredOptions = data.Items;
    filteredOptions.forEach((option) => {
      $("#city").val(option.City);
      $(".street").val(option.Line1);
      $("#country").val(option.CountryName);
      dropdownList.empty();
    });
  });
}
