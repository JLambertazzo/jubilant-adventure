function sendReq () {
    return fetch("/tryMe")
    .then((res) => { //res is what you get from server
      if (res.ok) { //will check if request was successful
        return res.json()
      } else {
        console.log('we got', { message: 'unknown error' });
      }
    })
    .then(json => {
        console.log('finally', json)
        document.querySelector('h2').innerText = json.message
    })
    .catch((error) => console.error(error)); //catch unexpected errs
}
