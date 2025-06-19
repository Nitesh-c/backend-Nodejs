function getInfo(id){
    let pro1 = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    let pro2 = pro1.then((res)=>{
        console.log(res);
        return res.json()
    })

    pro2.then((data)=>{
        console.log(data)
    })
}

getInfo(5)