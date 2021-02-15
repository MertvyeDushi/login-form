let formElenemt = document.getElementById('loginForm')
let usernameElenemt = document.getElementById('username')
let passwordElenemt = document.getElementById('password')
let buttonElenemt = document.getElementById('submitButton')

formElenemt.addEventListener('submit', e => {
	e.preventDefault()
  
  buttonElenemt.setAttribute('disabled', true)
  
  sendLoginRequest(usernameElenemt.value, passwordElenemt.value)
    .then( () => {
       window.location.pathname = '/home'
    })
    .catch( err => {
       alert(err)
    })
})

function sendLoginRequest(username, password) {
  
  return new Promise( (resolve, reject) => {
    
    let body = `username=${ encodeURIComponent(username) }&password=${ encodeURIComponent(password) }`

    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://example.com/api/user/authenticate', true)
    
    xhr.responseType = 'json'
    
    xhr.onload = e => {          
      if (xhr.status === 200) resolve(xhr.response)
      else reject(xhr.status)
    }
    
    xhr.onerror = e => reject(xhr.status)
    
    xhr.send(body)
  })
}

// Научите играть на барабанах, прошу
