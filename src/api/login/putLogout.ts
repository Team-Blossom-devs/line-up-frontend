import axios from 'axios'

export const putLogout = async () => {
  const response = await axios.put(`${import.meta.env.VITE_APP_BACKEND_ADDRESS}/api/logout`, {}, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`
    }
  })
  localStorage.clear();
  window.location.reload();
  return response
}
