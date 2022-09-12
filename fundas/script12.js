const generate = (lb,ub) => {
    let i = lb;
    let handle = setInterval(()=>{
        console.log(i);        
        i++;
        if(i>ub){
            clearInterval(handle);
        }
    },500);
}

generate(10,20);
generate(110,120);