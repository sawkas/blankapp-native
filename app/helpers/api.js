import Auth from '../storage/auth'
import { isEmpty } from 'ramda'
import queryString from 'query-string'

const API_URL = 'http://127.0.0.1:3000'

const url = (path, method, params = {}) => {
  if (method === 'GET' && !isEmpty(params)) {
    const qs = queryString.stringify(params)
    return `${API_URL}/${path}?${qs}`
  }

  return `${API_URL}/${path}`
}

const requestOptions = (method, params, authToken) => {
  const options = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}` || '',
    },
  }

  if ((method == 'POST' || method == 'PATCH') && params) {
    options['body'] = JSON.stringify(params)
  }

  return options
}

const handle401 = () => {
  console.log('401')
}

const makeRequestWithPromise = async (method, path, params) => {
  return new Promise(async function (resolve, reject) {
    try {
      const authToken = await Auth.getToken()
      const response = await fetch(url(path, method, params), requestOptions(method, params, authToken))

      if (response.status == 401) {
        handle401()
        reject({ type: 'error' })
      } else if (response.status == 404) {
        reject({ type: 'error' })
      } else if (response.status == 500) {
        reject({ type: 'error' })
      } else {
        const data = await response.json()

        if (data.success == undefined) {
          resolve(data)
        } else if (data.success) {
          resolve(data.response)
        } else {
          reject({ type: 'fail', ...data })
        }
      }
    } catch (error) {
      reject({ type: 'error', ...error })
    }
  })
}

export default {
  getWithPromise: (path, params) => makeRequestWithPromise('GET', path, params),
  postWithPromise: (path, params) => makeRequestWithPromise('POST', path, params),
  patchWithPromise: (path, params) => makeRequestWithPromise('PATCH', path, params),
  deleteWithPromise: (path) => makeRequestWithPromise('DELETE', path, {}),
}
