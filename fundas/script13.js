const generate = async (lb,ub) => {

    if(lb>ub){
        throw new Error("Invalid boundaries");
    }

    let results=[];
    for(let i=lb;i<=ub;i++){
        results.push(i);    
    }    
    return results;
}

let promise1 = generate(10,20);
let promise2 = generate(110,120);
let promise3 = generate(110,10);

promise1.then( r => console.log(r)).catch(err => console.error(err.message));
promise2.then( r => console.log(r)).catch(err => console.error(err.message));
promise3.then( r => console.log(r)).catch(err => console.error(err.message));