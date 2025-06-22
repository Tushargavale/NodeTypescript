import mysql,{createPool,createConnection} from 'mysql2/promise'




export const sqlpool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    database:'collage'
})




export async function createconnection(){
    try {
       let res=await sqlpool.query('select * from student limit 5');

       console.log(res[0])
    } catch (error) {
        console.log(error)
        throw error
    }
}