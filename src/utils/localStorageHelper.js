const AUTHED_USER_ID = 'authedUserId'

const saveAuthedUserId = userId => {
  window.localStorage.setItem(AUTHED_USER_ID, userId)
}

const getAuthedUserId = () => (
  window.localStorage.getItem(AUTHED_USER_ID)
)

const removeAuthedUserId = () => {
  window.localStorage.removeItem(AUTHED_USER_ID)
}

export default {
  saveAuthedUserId,
  getAuthedUserId,
  removeAuthedUserId
}