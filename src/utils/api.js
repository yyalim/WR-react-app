import {
  _getUsers,
  _getQuestions
} from './_DATA'

export const getUsers = () => _getUsers()

const getUser = (id) => (
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

export const getQuestions = () => _getQuestions()

const getQuestion = (id) => (
  new Promise((resolve, reject) => {
    getQuestions()
      .then(questions => {
        const question = questions[id]

        question
          ? resolve(question)
          : reject('Question not found')
      })
  })
)

export const getUsersAndQuestions = () => (
  Promise.all([
    getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
)

export const getQuestionAndAuthor = (id) => (
  new Promise((resolve, reject) => {
    getQuestion(id).then(question => {
      const authorId = question.author

      getUser(authorId).then(author => {
        resolve({ question, author })
      })
    })
  })
)

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