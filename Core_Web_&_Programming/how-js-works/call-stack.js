// call stack in js
let x = 1;
setTimeout(()=>{
    console.log(`value of x1 is ${x}`);
}, 0)

console.log(`value of x2 is ${x}`);

// why line number three's code is execute at last ?

// description-
{
    /*

pahla code ma IDE check karta hai ki koi syntex error hai kya uska bad wo JS engine ka pas jata hai aur phir wo sabsa pahla ek call stack create karta hai aur ek uska under ma sara global execution context ko handel karta hai aur uska ander memory phase aur code phase hota hai aur sara code line by line run hota hai lekin jab koi non-syquence code atta hai tab js engine ek WEB APIs nam ka content ko create karta hai aur uska under timer ka sath usko rakh deta hai aur jaisa hi timer khatam hot hai uska bad agar code promises ka related kuch hai toh wo microtask queue ma jata hai aur uska alawa wo macrotask queue ma jata hai aur phir event loop ki madat sa wo code execute hota hai lekin microtaskqueue ka jada importance hai 

    */
}
