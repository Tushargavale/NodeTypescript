import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

interface userpayload{
    username:string
}

let secret=process.env.JWTSECRET


export function createJWT(obj:userpayload,time:string){
    try {
        if(!secret) 
        throw new Error('Secret Key is not define')
        let token=jwt.sign(obj,secret,{expiresIn:'15s'})
        return token
    } catch (error) {
        throw error
    }   

}



