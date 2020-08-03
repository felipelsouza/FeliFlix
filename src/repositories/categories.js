import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (res) => {
            if(res.ok) {
                const response = await res.json()
                return response
            }

            throw new Error('Unable to fetch data :(')
        })
}

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (res) => {
            if(res.ok) {
                const response = await res.json()
                return response
            }

            throw new Error('Unable to fetch data :(')
        })
}

export default {
    getAllWithVideos,
    getAll
}