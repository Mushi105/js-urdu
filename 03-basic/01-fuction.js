
function myNmame(){
    console.log('M');
    console.log('U');
    console.log('B');
    console.log('A');
    console.log('S');
    console.log('H');
    console.log('I');
    console.log('R');

}

//myNmame()
function addtion(number1, number2){
    let result =number1 + number2;
    return result;
    console.log(number1 + number2);

}
addtion();
const result=addtion(1,3)
//console.log("result "+result);

function isUserLoginName(username){
    if(username === undefined){
        console.log('Please enter the username');
        return;        
    }

    return `${username} is islogin`
}

console.log(isUserLoginName());
