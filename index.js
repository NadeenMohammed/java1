//!TASK ONE
//& Alert
// let alert = window.alert("welcome to my site");
// console.log(alert);

//& Prompt
// var name1 = prompt('enter your name')
// if(typeof name1 === 'string'){
//     let Alerttt = window.alert("welcome " + name1)
// }
// console.log(name1);
//////////////////////////////////////
//!TASK TWO
// & TEMP_FUNCTION
// function Temp( todays_temperature)
// {
// let temp == 30 ? console.log("HOT") : console.log("COLD");
// if(todays_temperature >= 30)
// {
//     console.log("HOT");
// }
// else{
//     console.log("COLD");
// }
// }
// console.log(Temp(20));
////////////////////////////////
//!TASK THREE
//& CALCULATE_AGE


var userName = (prompt('name'))
// const userName = parseInt(prompt('userName'));
// const age = Number(prompt('age'));
const text = /[0-9]/

if (text.test(userName) === true) {
    console.log("No");
    var userName = (prompt('enter valid name'));
    // const age = Number(prompt('age'));
    // var birthyear = prompt;

}
else {
    console.log("yes");
    var birthyear = Number(prompt('enter valid birthyear'));
    // const userName =(prompt('enter valid name'));
    // var userName =prompt;

}


// if(birthyear<2010)
// {
//     var age = 2023-birthyear
// }
// 
if (birthyear < 2010) {
    var age = 2023 - birthyear;
}
console.log(age);
document.write("Name:" + userName + "<br><hr>" + "birthyear:" + birthyear + "<br><hr>" + "age:" + age)

//////////////////////////////
// //!TASK FOUR
// //& Headers----

// for (let i = 1; i <= 6; i++) {
//     document.write("<h" + i + ">this is header number" + i + "<h" + i + ">");
// }