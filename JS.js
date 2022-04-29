console.log("OK")
const a=prompt("A ni kiritimg")
const b= prompt("B ni kiritimg")
const amal=prompt("Amalni kiriting")
function calc(x,y,z=amal){
    // const x=Number(prompt("X ni kiriting"))
    // if (x)
    if(a){
        if(z=="+"){
    return x+y
}
else if(z=="-"){
    return x-y
}
else if(z=="*"){
    return x*y
}
else if(z=="/"){
    if(y==o){
        return"B-ga 0 qiymat kiritmang"
    }
    return x/y
}
else {
    return "Bunday amal mavjud emas"
}
}
}
document.write(calc(a,b))

// // let summa= Number(a)+b*1
// // document. write(summa)
// function qosh(x,y){
//     x=a*1
//     y=b*1
//     return a*1+b*1
// }
// // let summa=qosh(a*1,b*1);
// console.log(qosh(a*1,b*1))