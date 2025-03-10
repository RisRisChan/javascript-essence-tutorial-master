// try{
//     throw new Error("error message");

// }catch(e){
//     console.error(e);
// }finally{
//     console.log("finally");
// }

async function fetchUsers() {
  const response = await fetch('users.json');
  if(response.ok){
    const json = await response.json();
    if(!json.length){
        throw new NoDataError("no data found");
    }
    return json;
  }
}

//カスタムエラー
class NoDataError extends Error{
    constructor(message){
        super(message);
        this.name = "NoDataError";
    } 
}

async function getUsers(){
    try{
        const users = await fetchUsers();
        for(const user of users) {
            console.log(`I'm ${user.name}, ${user.age} years old`)
        }
    }catch(e){
        if(e instanceof NoDataError){
            console.error(e);
        }else{
            console.error("something is wrong");
        }
        
    }finally{
        console.log("finally");
    }

    console.log("end");
}

getUsers();
