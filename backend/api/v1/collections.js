var express = require('express');
var router = express.Router();
const debug = require('debug')('api:v1:collections');

const Unsplash = require('../../lib/unsplash');

router.get('/', function(req, res, next) {
  res.json({ resource: 'collections' });
});

router.get('/:id', function(req, res, next) {

    const collectionsID = req.params.id;
    debug(`collectionsID: ${collectionsID}`);
    
    Unsplash.collectionImages(collectionsID)
      .then((collection) => {
        res.send(collection);
      })
      .catch((e) => {
        console.error(e);
        res.send(e);
      }); 

});

function getCollection(collectionId) {
  const unsplashAPIDomain = 'https://api.unsplash.com';
  const collectionsResourcePath = `/collections/${collectionId}`;
  debug(`collectionsResourcePath: ${collectionsResourcePath}`);
  
  const reqConfig = {
    baseURL: unsplashAPIDomain,
    method: 'get',
    url: collectionsResourcePath,
    timeout: 4000,
    headers: {'Authorization:': `Client-ID ${process.env.AccessKey}`}
  };

  return axios(reqConfig);

}


module.exports = router;
