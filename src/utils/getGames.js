import axios from 'axios'

async function getGames({page}) {
    console.log(page)
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=b856ad245b7a4d40affdcba24da8dc7b&page=${page}`)
    console.log(data.results)
    return data.results
}

export default getGames;