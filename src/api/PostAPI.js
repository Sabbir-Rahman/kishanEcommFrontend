import axios from 'axios'
const post = (data, message, link) => {
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }
    axios
      .post(link, data, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert(message)
        window.location.reload()
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
        alert('Error')
      })
  }

  export default post