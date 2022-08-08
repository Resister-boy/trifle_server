const connection = require('../dbConfig');

const whereCtrl = {
  getWhere: async(request, response) => {
    connection.query(`SELECT * FROM trifle_db.where_t`, (error, results) => {
      if(error) return error;
      const randomNumber = Math.floor((Math.random() * (results.length - 1)) + 1);
      console.log(results[randomNumber]);
      response.send(results[randomNumber]);
    })
  }
}

module.exports = whereCtrl;