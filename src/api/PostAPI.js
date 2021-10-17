import axios from 'axios'
const post = (data, message, link) => {
  const token = localStorage.getItem('user')
  const _token = token.split('"').join('')
  const config = {
    headers: {
      Authorization: `Bearer ${_token}`,
    },
  }

  const role = localStorage.getItem('user_role')
  if (role == '"customer"') {
    axios
      .post(link, data, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        //console.log(res)
        alert(message)
        window.location.reload()
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
        alert('Error')
      })
  } else {
    alert('দুঃখিত আপনার অরডার করার অনুমতি নেই')
    window.location.reload()
  }
}

export default post
