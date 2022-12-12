// Question 1 

let fetchValue = document.getElementById('text');
console.log(fetchValue);


// Ques 2 

let fetchValueByTagName = document.getElementsByTagName('h1')
console.log(fetchValueByTagName);


//Ques 3 

let fetchValueByClassName = document.getElementsByClassName('box');
console.log(fetchValueByClassName);


// Ques 4 .

let changeHeadingValue = document.getElementById('changeContentForHeading').innerText ="HELLO WORLD";
console.log(changeHeadingValue)

//Ques 5 .

function changeFlexDirection()
{
    console.log("function is invoked");
    document.getElementById('flexContainer').style.flexDirection = 'column';
}


// Ques 6 

// What’s the difference between window vs document?



// Ques 7 . 


document.querySelector('h2').style.color = 'red';
document.querySelector('h2').setAttribute('id','heading') ;


// Ques 8 .


function changetheinnerContent(){

    document.getElementById('chnageInnerText').innerText='WELCOME TO ELEVATION ACADEMY'

}


// Ques 9 .

function time(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if( hours > 12 ){
        hours = hours - 12 ;
    }

    document.getElementById('hr').innerText = hours + " : ";
    document.getElementById('min').innerText = mins + " : ";
    document.getElementById('sec').innerText = secs ;

}

setInterval(time, 1000);



// ques 10 .

function onselectfuinction(){
    console.log("SELECT FUNCTIONIS IS INVOKED");

    let valueyear = document.getElementById('selectyearId').value;
    document.getElementById('selectedYearValue').innerText = 'selected year is : '+ valueyear 
}



