class Todo{
 
    
    getAll():string{
        return `select * from todo`
    }

    getById(id:number):string{
        return `select * from todo where id=${id}`
    }



}


export const todoQuery=new Todo()
