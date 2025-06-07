import{users} from "./module_file1.js"

function getDetails(databaseNam){
    for(let i = 0; i< databaseNam.length; i++){
        
        console.log(`Name: ${databaseNam[i].name} | Email: ${databaseNam[i].email}`);

    }
}

getDetails(users)

//  this is an example where i use module to get the user array from the other file