let realName = document.querySelector("#name")
let gender = document.querySelector("#gender")
let country = document.querySelector("#country")
let state = document.querySelector("#state")
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let generateBtn = document.querySelector("#btn")
let image = document.querySelector("#imageMain")
let toggle = document.querySelector(".toggle")
let icon = document.querySelector("#toggleIcon")
let container = document.querySelector(".container")


let a = fetch("https://randomuser.me/api/?nat=in?gender=female")
a.then((resp)=>{
    return resp.json()
}).then((value)=>{
    realName.innerHTML += `${value.results[0].name.first} ${value.results[0].name.last}`
    gender.innerHTML += `${value.results[0].gender}`
    country.innerHTML += `${value.results[0].location.country}`
    state.innerHTML += `${value.results[0].location.state}`
    phone.innerHTML += `${value.results[0].phone}`
    email.innerHTML += `${value.results[0].email}`
    username.innerHTML += `${value.results[0].login.username}`
    password.innerHTML += `${value.results[0].login.password}`
    image.src = value.results[0].picture.large
})

generateBtn.addEventListener("click",function(e){
    window.location.reload()
})

toggle.addEventListener("click",function(e){
    e.preventDefault()
    container.classList.toggle("dark")  
    let isDark = container.classList.contains("dark")
    icon.classList = isDark
    ?"fa fa-toggle-off"
    :"fa fa-toggle-on"
})