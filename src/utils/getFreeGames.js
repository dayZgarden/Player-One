import axios from "axios";
let a;

function getFreeGames() {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    // params: {id: '452'},
    headers: {
      'X-RapidAPI-Key': '2cce5f48d2msh06734d0ea1a934ep1b51e9jsn2c1f7b2030d1',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
     a =  response.data;
  })
  return a;
}

  export default getFreeGames;