import { Request,Response } from "express";
import { getClient } from "../DB/dbconfig";
import { todoQuery } from "../DB/Query";


export async function getAll(req:Request,resp:Response):Promise<void>{
    try {
        const client=await getClient()
        const [data]=await client.query(todoQuery.getAll())
        console.log(data)
        resp.status(200).json(data)
     } catch (error) {
        console.log(error)
        resp.status(500).send('Failed to Fetch Rows')
    }
}


export async function getUserById(req:Request,resp:Response):Promise<void>{
    try {
        console.log(req.body)
        const client=await getClient() 
        const [data]=await client.query(todoQuery.getById(1))
        resp.status(200).json(data)
    } catch (error) {
        resp.status(500).send('Failed To Fetch Data')
    }
    
}











