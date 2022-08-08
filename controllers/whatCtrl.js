const connection = require('../dbConfig');

const whatCtrl = {
  getWhat: async(request, response) => {
    connection.query(`SELECT * FROM trifle_db.what_t`, (error, results) => {
      if(error) return error;
      const randomNumber = Math.floor((Math.random() * (results.length - 1)) + 1);
      console.log(results[randomNumber]);
      response.send(results[randomNumber]);
    })
  }
}

module.exports = whatCtrl;