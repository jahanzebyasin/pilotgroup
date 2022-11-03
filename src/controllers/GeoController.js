
const GeoService = require('../libs/GeoService');
module.exports = {
    getCurrentLocation: async (req,res) => {
        //  //fetch books online from an api
        //  fetch('http://api.open-notify.org/iss-now.json')
        //  .then((response) => response.json())
        //  .then((data) => {
        //      console.log(data)
        //   //   res.send(data);
        //  }
        //  );

        let cords = await GeoService.getCurrentLocation();
        let readablePosition = null;
        if(cords && cords.iss_position) {
            readablePosition = await GeoService.getCurrentReadableLocation(cords.iss_position.latitude, cords.iss_position.latitude);
        }
        console.log(readablePosition);
    }
};