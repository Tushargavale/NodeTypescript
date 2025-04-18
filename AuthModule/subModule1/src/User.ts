export interface user{
    username:string,
    password:string,
}



let Users:Array<user>=[]

const user1:user={
    username:'admin',
    password:'$2b$10$iFDSYtpgxRaeEEeE/6wTA.4HZaoTnAc2L8J0BjdcUxKpVZa/5WEc2'
}

Users.push(user1)



export default Users