import { eventConstants } from '../_constants'

let event = JSON.parse(localStorage.getItem('event'))
const initialState = event ? { selected: true, event } : {}

export function eventInformation(state = initialState, action) {
  switch (action.type) {
    case eventConstants.EVENTS_INFORMATION_REQUEST:
      return {
        selected: false,
        event: action.event,
      }
    case eventConstants.EVENTS_INFORMATION_SUCCESS:
      return {
        selected: true,
        event: action.event,
      }
    case eventConstants.EVENTS_INFORMATION_FAILURE:
      return {}
    default:
      return state
  }
}
