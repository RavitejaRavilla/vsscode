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












for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even:", i);
    } else if (i % 2 !==0){
        console.log("Odd:", i);
    }
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even:", i,"multiplication of i =",i**2);
    } else if (i % 2 !==0){
        console.log("Odd:", i,"multiplication of i =",i**2);
    }
}


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even:", i);
    } else
        {
        console.log("Odd:", i);
    }
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even:", i);
    } else
        {
        console.log("Odd:", i);
    }
}

var nume=10
var prime =true

for ( i=2; i<nume; i++) {
    if (nume % i == 0) {
        prime = false;
        break;
    }
    if(prime == true){
        console.log(nume + " is a prime number");
    }else{
        console.log(nume + " is not a prime number");
    }
}

var nume=100
var prime =true

for ( i=2; i<nume; i++) {
    if (nume % i == 0) {
        prime = false;
        break;
    }
}
    if(prime){
        console.log(nume + " is a prime number");
    }else{
        console.log(nume + " is not a prime number");
    }

    var nee=100
    for ( nee=2; i<nee; i++) {
        var prime=true;

    for( i=2; i<nee; i++) {
        if(nee % i == 0) {
            prime = false;
            break;
        }
    }
}
    if(prime){
        console.log(nee + " is a prime number");
    }else{
        console.log(nee + " is not a prime number");
    }


    let nne = 100;

for (let nume = 2; nume <= nne; nume++) {
    let prime = true;

    for (let i = 2; i < nume; i++) {
        if (nume % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime == true) {
        console.log(nume);
    }
}
var values=[1,2,3,4,5,7]

    values.forEach((a,b) =>{
    console.log(a,b)
});

var am="ravi"
console.log("name in:= ",am.toUpperCase())


var am="RAVI"
console.log("name in:= ",am.toLowerCase())


var nm="the way you are typing"
console.log(nm.slice(3,6))
console.log(nm.slice(6))
console.log(nm.slice(0,15))

var nm="the way you are typing"
console.log(nm.indexOf("y"))

var nm="    the way you are typing   "
console.log(nm.trim())
var nm="    the way you are typing   "
console.log(nm.trimStart())
var nm="    the way you are typing   "
console.log(nm.trimEnd())

var nm="    the way you are typing   "
console.log(nm.trimEnd())
var nm="    the way you are typing   "
console.log(nm.includes("waye"))
var nm="    the way you are typing   "
console.log(nm.replace("way","ravi"))

var nm="    the way you are typing way  "
console.log(nm.replaceAll("way","ravi"))

var nm="the way you are typing"
console.log(nm.split("the type"))

var nm="the way you are typing"
console.log(nm.charAt(8))
console.log(nm[6])
var n1 = "programming";
var output = "";

for (var char of n1) {
    if (output.includes(char)) {
        continue;
    } else {
        output = output + char;
    }
}

console.log(output);

var mm="iam the"
console.log(mm.repeat(4))



function orderFood(callback) {
    console.log("Food order placed");

    setTimeout(()=> {
        console.log("Food is prepared");
        callback();
    }, 2000);
}

function notifyCustomer() {
    console.log("Your food is ready. Please collect your order.");
}

orderFood(notifyCustomer);







   var mm="all the javascript is to learn"
   var anm=mm.split(" ")
   var long_word=""
   console.log(anm)
   var long_word
   for(var word of anm){
    var ab=word.length
    //console.log(word,ab)
    if(ab>long_word.length){
        long_word=word

      //console.log(long_word)
    }
    //console.log(ab)
   }
   console.log(long_word)


   
   var rr= "my name is raviou"
   var r1="aeiou"
   var count=0
   var al=0
   for(var char of rr){
    if(r1.includes(char)){
        count += 1

    }
    else{
       // continue
       al += 1
    }
   }
   console.log(count)
   console.log(al)

   var n1="all the javascript is to learn"
   var charcount={}
   for(var char of n1){
    console.log(charcount)
    if(char in charcount){
        charcount[char] += 1
    }else{
        charcount[char] = 1
    }
   }

console.log(charcount)


var ab = "the value is consider";
var result = "";

for (let i = 0; i < ab.length; i++) {
    if (i % 2 === 0) {
        result += ab[i].toUpperCase();
    } else {
        result += ab[i];
    }
}

console.log(result);



   var ab = "the value is consider";

var reversed = ab.split("").reverse().join("")

console.log(reversed);




var anm=[10,20,30,40,50,60]
var anm1=[20,3,70,90]
var anm2="this is my pirade"
console.log(anm.concat(anm1))
console.log(anm.sort())
console.log(anm.reverse())
console.log(anm.length)
console.log(anm.pop())
console.log(anm.unshift(100))
console.log(anm.shift())
console.log(anm.join(""))
  var y1=[4,6,8,9,20,10,0,1,2]

  for(var i=0; i<y1.length; i++){
    for(var j=0; j<y1.length; j++){
        if(y1[i] + y1[j]==0){
            console.log(y1[i],y1[j])
        }
    }
  }

  var l1=["apple","banana","sugaecane","orange","fruit"]
  var lq2=[3,5,7,9,5]
  var lp1=[20,30,40,50,70]
var total=0
  for(i=0;i<l1.length;i++){
    var ml=lq2[i]*lp1[i]
     //total=
    console.log(l1[i] + "quantity:" + lq2[i],lp1[i],ml)
    
    total=total+ml
    //console.log("total=", total)
  }

  console.log("total=", total)

  var bb=[100,120,400,200,250,330]
  for(i=0;i<bb.length;i++){
    if(bb[i]>=100 && bb[i]<200){
        console.log("unit charges is 15",bb[i])
    }else if(bb[i]>200 && bb[i]<300){
        console.log("unit charges is 20",bb[i])
    }else if(bb[i]>300 &&bb[i]< 400){
        console.log("unit charges is 25",bb[i])
    }else if(bb[i]>400){
        console.log("unit charges is 50",bb[i])
    }

  }
  

  var ob={
    Name: "Raviteja",
    class: "10"
  };
  console.log(ob.Name)
  console.log(ob)
  ob.myname="teja"
  console.log(ob)
  delete ob.myname
  console.log(ob)
  //for access keys and values
  console.log(Object.keys(ob))
  console.log(Object.values(ob))
  //it will give sapare like[[name-raviteja][class-10]] likew this
 console.log(Object.entries(ob))
 //if we want to merge two objects
 const ar={am:10,al:20};
const as={an:10,all:20};
var re=Object.assign({},ar,as)
console.log(re)
//if we dodnt want to modify  in object
Object.freeze(ob)
ob.Name="tt"
console.log(ob)
//it will not modify it
//we can update the values but removing and adding will not allow
Object.seal(ob) 

//if we want to check the key like name is available in object or not if available true else false

console.log(Object.hasOwn(ob,"Name"))
// output true

//here is below two object we create a object and use this and create a new another one like below but it only access values entire data we cant access it
var lm={
    Names: "Ravitejaaaaaa",
    Class: "10"
}

var lm1=Object.create(lm)
console.log(lm1.Names)
console.log(lm1.Class)

var lm3=[
    ["Names", "Raviteja1"],
    ["Class",  "101"],
    ["subject","commerse"],
]
console.log(Object.fromEntries(lm3))

//output is:- { Names: 'Raviteja1', Class: '101', subject: 'commerse' }

var im ={ Names: 'Raviteja1', Class: '101', subject: 'commerse' }
for(let k in im){
    if (k=="Class"){
        console.log(k+"|"+im[k])
    }

    
}

var im ={ Names: 'Raviteja1', Class: '101', subject: 'commerse' }
for(let k in im){
    
        console.log(k+"|"+im[k])
}


var frmo={mango: 20,orange:30,banana:50,watermelon:70}
 var purch={mango: 10,orange:15,banana:25}  
 let final=0
 for(let m in purch){
    let bill1=0
    //console.log(m)
    let fruitsname=m
    let fruitsprice=frmo[m]
    //console.log(fruitsprice)
    let pur=purch[m]
    //console.log(pur)
    bill1=pur*fruitsprice
    final=final+bill1
    console.log(fruitsname+"quantity:"+fruitsprice+ "price:"+pur+":"+ bill1)


 } 
console.log(final)


var fruit_inventory = { mango: 200, orange: 300, banana: 500,watermelon:500};
var purch = { mango: 10, orange: 15, banana: 25 };

for (let fruit in fruit_inventory) {
    let pur = purch[fruit] || 0;
    fruit_inventory[fruit] = fruit_inventory[fruit] - pur;
    
}
console.log(fruit_inventory);
//
//console.log(final)
 //console.log(fruit_inventory[fruitsname])
var buy={ mango: 10, orange: 15, banana: 25 };
var pp={mango: 20,orange:30,banana:50,watermelon:70}
var tunt={ mango: 200, orange: 400, banana: 500,watermelon:500};
let after_tt_by=0
//let ty=0
for(let r in buy){
    let fritname=r
    let ir=buy[r]
    let pr=pp[r]
    let total=ir*pr
    
    after_tt_by=after_tt_by+ total
    console.log(r+":"+ir+":"+pr)

     tunt[r]=tunt[r]-pr
    
    //console.log(ty)
    

    
}console.log("this is total"+ after_tt_by)
 console.log(tunt)


 function yui(){
try {
    let result=20/2
    
    console.log(result)
    console.log(b)
    console.log("txghchj")
}
catch(error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
    // code to handle the error
}

}
yui()
console.log("learning")