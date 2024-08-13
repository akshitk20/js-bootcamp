const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint) // fetch returns a promise so you need to do then to proceed.
.then(blob => blob.json()) // returns promise of json
.then(data => cities.push(...data)); // spread the array data into cities

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we have to figure out if the cities or state matches what was searched.
        const regex = new RegExp(wordToMatch, 'gi') // global case insensitive regex
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    //console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    //console.log(matchArray);
    const regex = new RegExp(this.value, 'gi'); // case insensitive and global
    const html = matchArray.map(place => {
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName} </span>
            <span class="population">${place.population}</span>
        </li>    
        `;
    }).join(''); // convert array with multiple items to a string
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);