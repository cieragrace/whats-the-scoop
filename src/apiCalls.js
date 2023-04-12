import API_KEY from "/config"

function getAPIData(category) {
  return fetch (`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`)
  .then((res) => res.json())
}

export default getAPIData