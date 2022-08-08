const connection = require('../dbConfig');

const adjective_opponent = {
  getAdjective_opponent: async(request, response) => {
    connection.query(`SELECT * FROM trifle_db.opponent_adjective_t`, (error, results) => {
      if(error) return error;
      const randomNumber = Math.floor((Math.random() * (results.length - 1)) + 1)
      console.log(results[randomNumber])
      response.send(results[randomNumber])
    })
  },
}

module.exports = adjective_opponent