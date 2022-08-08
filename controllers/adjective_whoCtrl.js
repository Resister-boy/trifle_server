const connection = require('../dbConfig');

const adjective_whoCtrl = {
  getAdjectvie_who: async(request, response) => {
    connection.query(`SELECT * FROM trifle_db.who_adjective_t`, (error, results) => {
      if(error) return error;
      const randomNumber = Math.floor((Math.random() * (results.length - 1)) + 1)
      console.log(results[randomNumber])
      response.send(results[randomNumber])
    })
  },  

}

module.exports = adjective_whoCtrl