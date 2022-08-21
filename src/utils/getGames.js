import axios from 'axios'

async function getGames({page}) {
    console.log(page)
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=950ecb52769e4a53b647742fff1a1226&page=${page}`)
    console.log(data.results)
    return data.results
}

export default getGames;