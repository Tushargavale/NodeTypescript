// import { Client } from "pg";
import mysql,{createConnection} from "mysql2/promise"





export async function getClient():Promise<mysql.Connection>{
 
  try {
    const connection=await mysql.createConnection("mysql://root:@localhost:3306/todos")
    return connection
  } catch (error) {
    console.log('Error in Connection',error)
    throw new Error(`message: ${error}`)
  }
}

