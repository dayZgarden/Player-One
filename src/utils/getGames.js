import axios from 'axios'

async function getGames({page}) {
    console.log(page)
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=8824f695c027467587b877f1225217f2&page=${page}`)
    console.log(data.results)
    return data.results
}

export default getGames;