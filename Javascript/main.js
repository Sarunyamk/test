/*
    console.log('Hello World 55')
    let firstname = 'Sarunya'
    let age = 30
    let isWoman = true
    console.log('My name is',firstname,'and I am',age,'years old and I am',true)
*/
/*let number1 = 5
let number2 = 10
let sorce = number1 == number2
console.log(sorce)


//***เรียนเรื่อง if else condition statment***
let score = prompt('ใส่คะแนนของคุณ')

if (score >= 80) {
    console.log('Your grade is A')
} else if (score >= 70) {
    console.log('Your grade is B')
} else if (score >= 60) {
    console.log('Your grade is C')
} else {
    console.log('Your grade is D')
}*/
/*let age = 30
let gender ='Male'
if (age >= 19 && gender || 'Male')
    {
        console.log('I am male adult')
    }
    else
    {
    console.log('i am gay')        
    }*/

/*let number1 = 5
let number2 = 10
let condition = !(number1 <=0 && number2 >=10)
console.log(condition)*/

/*let number = 20
if(sorce = number % 2 == 0)
    {
        console.log('นี่คือเลขคู่')
    }*/

//เรียนเรื่อง loop whike for
/*let count = 0
while (count <= 10) {
    console.log('Hello mink')
    count = count + 2
}
for(let count = 0 ; count <12 ;count++)
    { console.log('Hello sarunya')}*/


//***เรียนเรื่อง array***

/*let ages = [30,25,40]
console.log(ages)
ages.push(12,15,18,19,25,35,25)
console.log(ages)
ages.pop(0)
console.log(ages)

let ages = [30,25,40,12,15,18,19,25,35,25]
if(ages.includes(20))
    {console.log('You have this number 40')}
else
{console.log('You Dont have this')} 


***การใช้ array และการใช้  loop for***
let namelist = ['mink','chaw','mint','arty','mui','mam']
for (let index = 0 ; index < namelist.length ; index++ )
    { console.log(namelist[index])}

***การใช้ object ได้***
let students = [
    { age:30,name:'mink',grade:'A'},
    { age:15,name:'arty',grade:'A'},
    { age:31,name:'chaw',grade:'B'}]
    console.log(students[2].name)



   *** การใช้ object paremeter***

score1 = 50
score2 = 85

let calgrade = (score) =>    ** arrow function
{
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
       grade = 'C'
    } else {
        grade = 'F'
    }
    return grade
}
function calgrade (score)      **ใช้ฟังชั่น พารามิเตอร 
{
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
       grade = 'C'
    } else {
        grade = 'F'
    }
    return grade
}

let grade1 = calgrade(score1)
let grade2 = calgrade(score2)
console.log('grade',grade1,grade2)*/

prompt('are you ok')
let scores = [30, 15, 22]
for (let index = 0; index < scores.length; index++) {
    console.log(scores[index])
}
scores.forEach((A) => {
    console.log(A)

})