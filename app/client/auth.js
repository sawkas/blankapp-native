import Api from '../helpers/api'

export const Auth = {
  googleSignIn: (params) => Api.postWithPromise('auth/google', params)
}
