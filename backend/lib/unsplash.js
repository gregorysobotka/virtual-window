const debug = require('debug')('lib:unsplash');
const axios = require('axios');

async function collectionImages(collectionId) {
    
    try {
        
        const unsplashAPIDomain = 'https://api.unsplash.com';
        const collectionsResourcePath = `/collections/${collectionId}/photos`;

        const reqConfig = {
            baseURL: unsplashAPIDomain,
            method: 'get',
            url: collectionsResourcePath,
            timeout: 4000,
            headers: {'Authorization': `Client-ID ${process.env.AccessKey}`}
            };

        debug(reqConfig)

        const collectionImages = await axios(reqConfig);

        return collectionImages.data;

    } catch(e) {
        
        debug('collection-error: ', e);
        return { error: true };

    }

}

module.exports = {
    collectionImages
}