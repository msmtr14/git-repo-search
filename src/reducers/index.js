import { combineReducers } from 'redux'
import FetchRepos from './reducer_repos'
import FetchUsers from './reducer_users'

const rootReducer = combineReducers({
  repos: FetchRepos,
  users: FetchUsers
})

export default rootReducer
