import { createContext, useContext, useReducer } from 'react'

const UserContext = createContext()

function UserProvider ({ ...props }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'set': {
          return { ...state, user: action.user }
        }
        case 'remove': {
          return { ...state, user: null }
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`)
        }
      }
    },
    { user: null }
  )

  const value = [state, dispatch]

  return <UserContext.Provider value={value} {...props} />
}

function useUser () {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext')
  }
  return context
}

const setUser = (dispatch, user) => dispatch({ type: 'set', user })
const removeUser = (dispatch) => dispatch({ type: 'remove' })

export { UserProvider, useUser, setUser, removeUser }
