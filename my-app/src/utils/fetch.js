const API_KEY =  "pFeIsX0RCm0RgkLjtX94ymki5I9cNzzIY8DuPBXG" 
const API_URL = "https://api.nasa.gov/planetary/apod"

async function fetchApi(urlParams){

    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams?.length >0 ? urlParams:""}`)
        const data = await response.json()
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default fetchApi