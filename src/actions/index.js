import axios from 'axios'

export const FETCH_REPOS = 'fetch_repos'
export const FETCH_USERS = 'fetch_users'


const API_URL = 'https://api.github.com/users'

export const fetchRepos = (user) => {
  const request = axios.get(`${API_URL}/${user}/repos`)
    .catch(err => { return err.message })
  return {
    type: FETCH_REPOS,
    payload: request
  }
}

export const fetchUsers = (user) => {
  const request = axios.get(`${API_URL}/${user}`)
    .catch(err => { return err.message })
  return {
    type: FETCH_USERS,
    payload: request
  }
}

