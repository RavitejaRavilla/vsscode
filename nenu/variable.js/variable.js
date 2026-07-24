console.log("hello world")
let age = 300
let temperature= -5
let price= 17.99
let distance= 100.5


console.log(age)

console.log(temperature, typeof temperature)
console.log(price, typeof price)
console.log(distance)

let username="deepash"
let city="teja"


console.log(username + " is from " + city)
console.log(`${username} is from ${city}`)

console.log(temperature, typeof temperature)
console.log(price, typeof price)


let a=10
let b=30
console.log(a==b,typeof (a==b))
console.log(a<b)
console.log(a=b)

let p=10
let g="java"
let h=true

let cc=(`${p},${g},${h}`)
console.log(cc,typeof cc)

let y=null
console.log(y, typeof y)
var x;
x=10
console.log(x)
let n=null
n=20
console.log(n, typeof n)

var bigint= 1234567890123456789012345678901234567890
console.log(bigint, typeof bigint)

var ab=[1,"ravi",true,[1,2,3],{name:"deepash",age:20}]
console.log(ab[3][1], typeof ab)
ab.push(4455)
console.log(ab, typeof ab)  

var person={
    Name: "Deepash",
    age: 20,
    city:"hyd",
    Name :"ayagb"
}
console.log(person.Name, typeof person)
console.log(person)
//person.Name="teja"
//console.log(person.Name, typeof person)
//console.log(person)
console.log(person["Name"])

var person={
    Name: "Deepash",
    age: 20,
    city:"hyd",
    Name :"ayagb"
}
console.log(person.Name, typeof person)

const person1={
    Name: "Deepash",
    age: 20,
    city:"hyd",
    Name :"ayagb"
}
console.log(person.Name, typeof person)

person1.Name="ug"
console.log(person1.Name, typeof person1)

var person2="Deepash"
var person3="hyd"

console.log("your name is" +person2 + " and you live in " + person3, typeof person2)

var nb = "100" + 10
console.log(nb, typeof nb)
var nb = 100 + "10"
console.log(nb,typeof nb)
var nb = "100" - 10
console.log(nb,typeof nb)
var nb = 100 - "10"
console.log(nb,typeof nb)

var ab =String("123")
console.log(ab,typeof ab)
var ab =String(123)
console.log(ab,typeof ab)

var nn="10"
var nm=10
console.log(nn==nm)
if(nn==nm){
    console.log("both are equal")
}
else{
    console.log("both are not equal")
}

var numm=10
if(numm % 2 == 0 && numm % 4 == 0){
console.log("its divisible")
}
else
    
    {
console.log("not divisible")
}
x=100
y=500
z=500
if(x>y && x>z){
console.log("x greater")
}
else if(y>x && y>z){
console.log("y greater")
}
else if(z>x && z>y){
console.log("z greater")
} 



var round1="pass"
var round2="pass"
var round3="fail"

if(round1 =="pass"){
console.log("congrats you are selected")
if(round2 =="pass"){
console.log("congrats you are selected")
}
if(round3 =="pass"){
console.log("betturluck next time")
}else{
console.log("bett next tim")
}
}
else{

console.log("betturluck next time")
}

var nb=100
var output=(nb>0)?"positive":"negative"
console.log(output)

var exper = 5;
var output=(exper>=5)?"you will get 20% bonus":"you will notget 20% bonus"
console.log(output)

var exper = 5;
var exper1 = 2;
var output=(exper1>=2) && (exper<=5)?"you will get 30% bonus":"you will notget 20% bonus"
console.log(output)

let units = 250;
let bill = 0;

if (units <= 100) {
    bill = (100-50)*10;
} else if (units <= 200) {
    bill = 100 * 20;
} else {
    bill =(50*10) +(units-200)*10;
}

console.log("Total Bill = ₹" + bill);




