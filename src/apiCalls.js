
function getAPIData() {
  return fetch ('https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=BbLtA2ebhIHX1hgePOP0CJGLPAV0CkhL')
  .then((res) => res.json())
}

export default getAPIData