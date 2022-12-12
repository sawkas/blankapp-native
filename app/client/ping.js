import Api from '../helpers/api'

export const Ping = {
  index: () => Api.getWithPromise('ping'),
}
