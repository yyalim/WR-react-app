import {
  _getUsers,
} from './_DATA'

export const getUsers = () => _getUsers()

export const login = id => (
  new Promise((resolve, reject) => {
    getUsers()
      .then(users => {
        const user = users[id]
        user
          ? resolve(user)
          : reject('User not found')
      })
  })
)

export const logout = () => (
  new Promise(resolve => {
    setTimeout(() => { resolve('Signed Out') }, 200)
  })
)