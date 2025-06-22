
import { User } from "../DummyData/user"
class Query{

    constructor(){

    }

     getById(username:string):string{
        return `select * from user where username="${username}"`
    }

    getAll():string{
        return  `select * from user`
    }


    adduser(user:User):string{
    return `
INSERT INTO user (userID, email, password, role, username) 
VALUES ('${user.userID}', '${user.email}', '${user.password}', '${user.role}', '${user.username}');
` 
  }

   

 
}


let rawquery=new Query()
export default rawquery