import axios from 'axios';

function unsplashCollection(collectionsID) {
  return new Promise((resolve, reject) => {
    const baseURL = 'http://localhost:3000';
    axios
      .get(`${baseURL}/api/v1/collections/${collectionsID}`)
      .then(res => {
        const collectionImages = res.data.map(img => {
          const { urls, user, links, width, height } = img;
          return { urls, user, links, width, height };
        });
        resolve(collectionImages);
      })
      .catch(e => reject(e));
  });
}

export { unsplashCollection };
