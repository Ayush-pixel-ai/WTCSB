// setTimeout(() => {
//     console.log("first");
    
// },4000);


// let count=0;
// let id=setInterval(() => {
//     console.log("first");
//     count++;
//     if(count===5){
//         clearInterval(id)
//     }
// },2000);



function roll(num,next){
    if(num===12212){
    setTimeout(() => {
        console.log("Roll no. is "+ num);
        if(next)next();
    },2000)
    }else if(num===12312){
        setTimeout(() => {
        console.log("Roll no. is "+ num);
        if(next)next();
    },3000)
    }
    else{
        setTimeout(() => {
        console.log("Roll no. is "+ num);
        if(next)next();
    },4000)
    }
}
roll(12212,() =>{
    console.log("wait its getting downloaded");
    roll(12312,() =>{
        console.log("wait its getting downloaded");
        roll(12412,()=>{
            console.log(("wait its almost over"));
            roll(12512);
        });
    });
});