const Rollbar = require("rollbar")

let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    Rollbar.log('this is an error')
    console.log('should not have pressed that')})
