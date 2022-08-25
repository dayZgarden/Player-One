import axios from 'axios'

async function getGames({page}) {
    console.log(page)
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=86d224c0e8ce481aaf1756921701687d&page=${page}`)
    console.log(data.results)
    return data.results
}

export default getGames;