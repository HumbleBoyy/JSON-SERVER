let elUsersList = document.querySelector(".users_list")
let elUsersForm = document.querySelector(".usersForm")

let elModalWrapper = document.querySelector(".modal_wrapper")
let elModalInnerWrapper = document.querySelector(".modal_inner")


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
        res.data.map((item, index)=> {
            let elItem = document.createElement("li")
            elItem.className = "w-[300px] p-2 rounded-md bg-slate-200"

            elItem.innerHTML = `
                <span class="text-[20px]">ID: ${index + 1}</span>
                <h2 class="text-[20px]">Name: ${item.username}</h2>
                <h3 class="text-[20px]">Age: ${item.age}</h3>  
                <h3 class="text-[20px]">Study: ${item.study}</h3>    
                <div class="flex items-center gap-2">
                   <button onclick="handleEditBtn('${item.id}')" class="w-[100px] bg-green-500 text-white text-[18px] rounded-md">Edit</button>
                   <button onclick="handleDeleteBtn('${item.id}')" class="w-[100px] bg-red-500 text-white text-[18px] rounded-md">Delete</button>
                </div>
            `
            list.append(elItem)
        })
    })
}

getUsers(elUsersList)
// Get Users end


// Delete Part start
function handleDeleteBtn(id){
    axios.delete(`${HTTP}/${id}`)
}
// Delete Part end

elModalWrapper.addEventListener("click", (e)=> {
    if(e.target.id === "wrapper"){
        elModalWrapper.classList.add("scale-0")
    }
})

// Edit Part start 
function handleEditBtn(id){
   elModalWrapper.classList.remove("scale-0")

   elModalInnerWrapper.innerHTML = `
       <form class="usersEditForm bg-slate-300 p-2 rounded-md flex justify-center flex-wrap gap-2">
         <input required class="w-[50%] h-[40px] p-2 text-[18px] rounded-xl outline-none" name="username" type="text" placeholder="Enter your name">
         <input required class="w-[40%] h-[40px] p-2 text-[18px] rounded-xl outline-none" name="age" type="number" placeholder="Enter your age">
         <input required class="w-[50%] h-[40px] p-2 text-[18px] rounded-xl outline-none" name="study" type="text" placeholder="Enter your study">
         <button class="w-[40%] h-[40px] p-2 bg-green-600 text-white font-semibold text-[18px] rounded-xl" type="submit">EDIT USER</button>
      </form>
   `
}