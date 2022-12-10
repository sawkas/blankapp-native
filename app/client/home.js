import Api from '../helpers/api'

export const Home = {
  index: () => Api.getWithPromise('home'),
}
