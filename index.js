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

var Name = prompt("enter your name");
console.log(Name, typeof Name);


if (Name == 'string'){
    var Name = prompt("enter your name");
    console.log(prompt, typeof prompt);
    var birthyear = prompt;
}

var birthyear = Number(prompt("please enter your year"))
console.log(birthyear, typeof birthyear);
if (birthyear === Number ||  birthyear < 1900 ||
    birthyear >= 2010) {

    console.log(prompt, typeof prompt);
    var birthyear = Number(prompt("please enter valid year"))
}

if(birthyear<2010)
{
    var age = 2023-birthyear
}
console.log(age);
document.write("Name:"+Name+"<br><hr>"+"birthyear:"+birthyear+"<br><hr>"+"age:"+age)



//////////////////////////////
//!TASK FOUR
//& Headers----

for (let i = 1; i <= 6; i++) {
    document.write("<h" + i + ">this is header number" + i + "<h" + i + ">");
}