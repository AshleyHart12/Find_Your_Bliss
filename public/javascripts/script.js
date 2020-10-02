const api_helper = require('./API_helper')

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    api_helper.make_API_call('https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_RoadBasic_01/MapServer/0/query?where=1%3D1&outFields=ID,NAME,SYMBOL_CODE,SEG_LENGTH,JURISDICTION,SYSTEM,ROUTE_STATUS,OPER_MAINT_LEVEL,OBJECTIVE_MAINT_LEVEL,FUNCTIONAL_CLASS,SURFACE_TYPE,LANES,COUNTY,PFSR_CLASSIFICATION,GIS_MILES,SYMBOL_NAME,LEVEL_OF_SERVICE&outSR=4326&f=json')
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