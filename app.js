let elUsersList = document.querySelector(".users_list")
let elUsersForm = document.querySelector(".usersForm")
const HTTP = "http://localhost:3000/users"


// ADD Form start
elUsersForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const data = {
        username:e.target.username.value,
        age:e.target.age.value,
        study:e.target.study.value
    }

    axios.post(HTTP, data).then(res => {
        e.target.reset()
    })
})
// ADD Form end

// Get Users start
function getUsers(list){
    axios.get(HTTP)
    .then(res => {
        res.data.map(item => {
            let elItem = document.createElement("li")
            elItem.className = "w-[300px] p-2 rounded-md bg-slate-200 "

            elItem.innerHTML = `
                <span>ID: ${item.id}</span>
                <h2>Name: ${item.username}</h2>
                <h3>Age: ${item.age}</h3>  
                <h3>Study: ${item.study}</h3>    
            `
            list.append(elItem)
        })
    })
}

getUsers(elUsersList)
// Get Users end