import axios from 'axios'

async function getGames({page}) {
    console.log(page)
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=93c589388c5f4142a0afda5bbf82bd99&page=${page}`)
    console.log(data.results)
    return data.results
}

export default getGames;