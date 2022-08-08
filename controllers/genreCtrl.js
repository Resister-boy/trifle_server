const connection = require('../dbConfig');

const genreCtrl = {
  getGenre: async(request, response) => {
    connection.query(`SELECT * FROM trifle_db.genre_t`, (error, results) => {
      if(error) return error;
      console.log(results);
      response.send(results);
    })
  }
}


module.exports = genreCtrl;