import _ from 'lodash'
import { FETCH_USERS } from '@/src/actions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data)
    default:
      return state
  }
}
