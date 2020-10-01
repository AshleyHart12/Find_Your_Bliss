const api_helper = require('./API_helper')

const express = require('express');
const app = express();
const port = 3000;


app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://enterprisecontentnew-usfs.hub.arcgis.com/datasets/10342a0126564b0fb468b8dcb1b94b3a_0/geoservice?geometry=-105.637%2C39.974%2C-105.417%2C40.020')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

//  $(document).ready(function() {
   
//         fetch('https://enterprisecontentnew-usfs.hub.arcgis.com/datasets/10342a0126564b0fb468b8dcb1b94b3a_0/geoservice?geometry=-105.637%2C39.974%2C-105.417%2C40.020')
//     .then(response => response.json())
//     .then(data => console.log(data));
    
// });