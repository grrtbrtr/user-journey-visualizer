const HTTP_STATUS = {
  'OK': 200
};

const READY_STATE = {
  'UNSENT': 0,
  'OPENED': 1,
  'HEADERS_RECEIVED': 2,
  'LOADING': 3,
  'DONE': 4
}

class JSONLoader {

  /**
   * Load a JSON file.
   *
   * @public
   * @param {String} filePath The path to the data JSON file to load.
   *
   * @return {Promise} Return a Promise object.
   */
  static load(filePath) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', filePath);

      xhr.onload = () => {
        if (
          xhr.readyState === READY_STATE.DONE &&
          xhr.status === HTTP_STATUS.OK
        ) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (err) {
            reject(err);
          }
        } else {
          reject(Error(xhr.statusText));
        }
      }

      xhr.onerror = () => {
        reject(Error(xhr.statusText));
      }

      xhr.send(null);
    });
  }

}

export default JSONLoader;
