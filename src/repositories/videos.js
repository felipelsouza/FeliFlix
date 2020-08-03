import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`

function create(videoObj) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(videoObj)
    })
        .then(async (res) => {
            if(res.ok) {
                const response = await res.json()
                return response
            }

            throw new Error('Unable to register data :(')
        })
}

export default {
    create
}