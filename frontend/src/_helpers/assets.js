import config from 'config'
export function assets(place) {
  console.log(config.apiUrl + place)
  return config.apiUrl + place
}
