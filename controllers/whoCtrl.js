const connection = require('../dbConfig');

const whoCtrl = {
  getWho: async(request, response) => {
    connection.query(`SELECT * FROM trifle_db.who_t`, (error, results) => {
      if(error) return error;
      const randomNumber = Math.floor((Math.random() * (results.length - 1)) + 1);
      console.log(results[randomNumber]);
      response.send(results[randomNumber]);
    })
  }
}

module.exports = whoCtrl;