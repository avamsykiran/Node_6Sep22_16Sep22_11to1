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

const getFactors = async (lb,ub) => {

    let nums = await generate(lb,ub);

    let results = [];
    for(let n of nums){
        let result = {value:n,factors:[]};

        result.factors.push(1);
        for(let i=2;i<=n/2;i++){
            if(n%i==0){
                result.factors.push(i);
            }
        }
        result.factors.push(n);
        results.push(result);
    }

    return results;
}

let promise1 = getFactors(10,19);
let promise2 = getFactors(20,29);
let promise3 = getFactors(29,20);

promise1.then( r => console.log(r)).catch(err => console.error(err.message));
promise2.then( r => console.log(r)).catch(err => console.error(err.message));
promise3.then( r => console.log(r)).catch(err => console.error(err.message));