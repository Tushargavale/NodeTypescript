import { Request, Response} from "express"



export function getUSers(req:Request,resp:Response){
    resp.send([
        {
            name:'Tushar',
            ID:1031055
        },{
            name:'Rohit',
            ID:1546015
        }
    ])
}