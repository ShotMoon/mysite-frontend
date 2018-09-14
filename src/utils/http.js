import axios from 'axios'

const baseUrl = process.env.API_BASE || 'http://localhost:8080'

const queryString = (url, json) => {
  const str = Object.keys(json).reduce((result, key) => {
    result += `${key}=${json[key]}&`
    return result
  }, '')
  return `${url}?${str.substr(0, str.length - 1)}`
}

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    console.log(`${baseUrl}---------------`)
    axios.get(queryString(`${baseUrl}${url}`, params))
      .then(resp => {
        resolve(resp.data)
      }).catch(reject)
  })
}

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}${url}`, data)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(reject)
  })
}

export default {
  get, post
}

