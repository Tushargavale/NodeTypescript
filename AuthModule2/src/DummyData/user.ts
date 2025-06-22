export interface usertype{
    username:string,
    password:string
}


export interface User{
    userID:string,
    username:string,
    password:string,
    email:string,
    role:'USER' | 'ADMIN'
}



export const users:usertype[]=[
    {
        username:'admin',
        password:'$2b$07$kUbgqc3jv8yKr1rP2ncXVugTpRejWYEmL8NzKtpIuE2mTnqITn2ca'
    }
]