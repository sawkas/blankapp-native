import { isEmpty } from 'ramda'
import queryString from 'query-string'

import { API_URL } from '@env'
import Auth from '../storage/auth'
import { navigate } from './navigation'

const url = (path, method, params = {}) => {
  if (method === 'GET' && !isEmpty(params)) {
    const qs = queryString.stringify(params)
    return `${API_URL}/${path}?${qs}`
  }

  return `${API_URL}/${path}`
}

const requestOptions = (method, params, authToken) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  }

  if ((method === 'POST' || method === 'PATCH') && params) {
    options.body = JSON.stringify(params)
  }

  return options
}

const handle401 = () => {
  navigate('SignIn')
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

        resolve({ data, headers: response.headers, status: 'ok' })
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
  deleteWithPromise: (path) => makeRequestWithPromise('DELETE', path, {})
}
