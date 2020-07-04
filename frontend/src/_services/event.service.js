import config from 'config'
import { authHeader } from '../_helpers'

export const eventService = {
  create,
  getAll,
  getById,
  update,
  delete: _delete,
  join,
  unjoin,
}

function create(event) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  }
  return fetch(`${config.apiUrl}/events/new`, requestOptions).then(
    handleResponse
  )
}
function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }
  return fetch(`${config.apiUrl}/events`, requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }
  return fetch(`${config.apiUrl}/events/${id}`, requestOptions).then(
    handleResponse
  )
}
function update(event) {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(event),
  }
  return fetch(`${config.apiUrl}/events/${event.id}`, requestOptions).then(
    handleResponse
  )
}
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  }
  return fetch(`${config.apiUrl}/events/${id}`, requestOptions).then(
    handleResponse
  )
}
function join(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }
  return fetch(`${config.apiUrl}/events/${id}/join`, requestOptions).then(
    handleResponse
  )
}

function unjoin(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  }
  return fetch(`${config.apiUrl}/events/${id}/unjoin`, requestOptions).then(
    handleResponse
  )
}
function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}