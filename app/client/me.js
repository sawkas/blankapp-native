import Api from '../helpers/api'

export const Me = {
  index: (params) => Api.getWithPromise('api/me'),
}
