
import { httpService } from './http.service'
import { utilService } from './util.service'

const USER_DB = 'loggedinUser'
const USER_FRINDS = 'friends'

export const userService = {
    generateUser,
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getById,
    remove,
    update,
    changeScore,
    updateLocalUserFields,
    getFriends
}

window.userService = userService

await generateFriends()
await generateUser()





 function generateUser(){

    let loggedInUser =  utilService.loadFromStorage(USER_DB)

    if(!loggedInUser)
    {
        let user = {
            "_id":"u101",
            "userName":"admin",
            "fullname":"daniel",
            "password":"123",
            "email":"da@gmail.com",
            "imgUrl":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "followers":[],
            "following":[],
            "saved":[],
        }
        utilService.saveToStorage(USER_DB,user)
    }
}


 async function  generateFriends(){

    let friends = utilService.loadFromStorage(USER_FRINDS)

    if(!friends){
        let url ="https://randomuser.me//api"
        let users = [];

        for(let i=0; i < 6;i++){
            let rb = await fetch(url);
            if (rb.ok) {
                let data = await rb.json();
                let user = {
                    "_id":data.results[0].id.value,
                    "userName":data.results[0].name.first,
                    "fullname":data.results[0].name.first+" "+data.results[0].name.last,
                    "password":"123",
                    "email":data.results[0].email,
                    "imgUrl":data.results[0].picture.medium,
                    "followers":[],
                    "following":[],
                }
                users.push(user);
    
            }
        }
    
        utilService.saveToStorage(USER_FRINDS,users)
    }

}





async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
    // const user = await storageService.get('user', _id)
    // user.score = score
    // await storageService.put('user', user)

    const user = await httpService.put(`user/${_id}`, { _id, score })
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    const user = await httpService.story('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // userCred.score = 10000
    // if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    // const user = await storageService.story('user', userCred)
    const user = await httpService.story('auth/signup', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(USER_DB)
    return await httpService.story('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score }
    sessionStorage.setItem(USER_DB, JSON.stringify(user))
    return user
}

function updateLocalUserFields(user) {
    const currUser = getLoggedinUser()
    const userToSave = { ...currUser, ...user }
    sessionStorage.setItem(USER_DB, JSON.stringify(userToSave))
    return user
}

function getLoggedinUser() {
    return utilService.loadFromStorage(USER_DB) || null
}

 function getFriends() {

    return  utilService.loadFromStorage(USER_FRINDS)
}



// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()



