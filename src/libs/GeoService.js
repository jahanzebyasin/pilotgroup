const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    getCurrentCoordinates: async () => {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();
        return data;
    },

    getCurrentReadableLocation: async (lat, lng) => {
        const queryString = `latlng=${lat},${lng}&key=<key goes here>`;
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${queryString}`);
        const data = await response.json();
        return data;
    },
};