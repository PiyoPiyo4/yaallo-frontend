// const backendServer = `http://localhost:5000`
// const serve = 'https://yaallo-backend-988400dc7b44.herokuapp.com'

// General API-call boilerplate function
const APICall = (requestBody, path, methodType, headersData) => {
  if (requestBody !== null) requestBody = JSON.stringify(requestBody);
    return new Promise((resolve, reject) => {
      const init = {
        method: methodType,
        headers: headersData,
        body: requestBody,
      }
      fetch(`https://yaallo-backend-988400dc7b44.herokuapp.com${path}`, init)
        .then(response => {
          if (response.status === 200) {
            return response.json().then(resolve);
          } else if (response.status === 400) {
            return response.json().then(obj => {
              reject(obj.message);
            });
          } else if (response.status === 403) {
            return response.json().then(obj => {
              reject(obj.message);
            });
          } else {
            throw new SyntaxError(`Error with API call`);
          }
      });
    })
}

export { APICall };