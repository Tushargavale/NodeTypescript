import {users,usertype,User} from '../DummyData/user'
import { sqlpool } from './DBconfiguration'
import rawquery from './Query'

import mysql,{RowDataPacket} from 'mysql2'





export async function finduser(username:string):Promise <User | null>{
    try {
        const query = `SELECT * FROM user WHERE username = ?`;
        let [rows]=await sqlpool.query<(User & RowDataPacket)[]>(query,[username])
        return rows.length>0?rows[0] :null 
        
    } catch (error) {
        console.log(error)
        throw error 
    }
}


export async function getUser(username:string): Promise<User | null>{
    try {
        const query = `SELECT * FROM user WHERE username = ?`;
         const [rows]: [User[], any] = await sqlpool.query<(User & RowDataPacket)[]>(query, [username]);
         return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        throw error
    }
} 




export async function adduser(user:User):Promise <User | null> {
    try {
        let [rows]=await sqlpool.query<(User & RowDataPacket[])>(rawquery.adduser(user))
        return rows
        
    } catch (error) {
        throw error
    }
}