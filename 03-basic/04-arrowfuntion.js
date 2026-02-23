const user={
    uname:"Mubashir",
    price:100,
    wellcome:function(){
        console.log(`this ${this.uname}`);
        
    }
}

// user.wellcome();
// user.name='same';
// user.wellcome();

// console.log(this);


const arrow = (num1, num2)=>{
    return num1 +num2
}

console.log(arrow(2,4));

const arrow2 = (num1,num2) =>(num1, num2)

const arrow3 = (num1,num2) =>({uname:'mubashir'})

console.log(arrow3(2,4));


const myarray=[2,4,5,6]

