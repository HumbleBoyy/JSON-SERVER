let elUsersList = document.querySelector(".users_list")


function getUsers(list){
    axios.get("http://localhost:3000/users")
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
            elUsersList.append(elItem)
        })
    })
}

getUsers(elUsersList)