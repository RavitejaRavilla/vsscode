 var result=(x,y,z)=>{
    return (x+y+z)
}
console.log(result(10,20,30))



var mari=()=>{
    return 1+5
}
console.log(mari())




for (var i=1;i<=5;i++){

setTimeout(() => {
    console.log("adding  " +result(5,3,7))
    
}, 2000);
}



function  janani(){
    var a=10
var b=30
sum=a+b
for(i=1;i<=b;i++){
    console.log(b)
if(i==3){
    console.log("a+b= " ,sum);
    break;
}
}
}

janani();

function rr(...num){
for(var a of num){
    sum=a+1
    console.log(a**2,sum)
    if(sum==6){
        console.log("limit exceed")
    }
}

} rr(1,2,3,4,5)

function anr(n){
    
    

if(n==0){
    return n
   
}
 console.log("this is n:",n)
anr(n-1)
}
anr(10)

var nr="ttuyfy uyujgyujg"
var an="my"
console.log(nr[1])
console.log(an.length)

console.log("@@@@@@@@@@@@@@@@")

for(var char of nr){
    console.log(nr)
}
console.log("only i")

for(i=0;i<nr.length;i++){
    console.log(nr[i])
}

var n1="iam in the floor of first one please"
var output = ""
for(var char of n1){
    if(output.includes(char)){
        continue
    }else{
       
        output = output + char
    }
}

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
   for(var char of rr){
    if(r1.includes(char)){
        count+=1

    }else{
        continue
    }
   }

     var y1=[4,6,8,9,20,10,0,1,2]

  for(var i=0; i<y1.length; i++){
    for(var j=i+1; j<y1.length; j++){
        if(y1[i] + y1[j] ==10){
            console.log(y1[i],y1[j])
        }
    }
  }

 var y1=[4,6,8,9,20,10,0,1,2]

  for(var i=0; i<y1.length; i++){

   var mm= i + " " +y1[i]
        console.log(mm)
    }
  
   var y1=[4,6,8,9,20,10,0,1,2]
   for(i=0;i<y1.length;i++){
    for(j=0;j<y1.length;j++){
        if (y1[i] + y1[j] ==10)
            {
    console.log(y1[i] ,y1[j])
        }
    }
   } 

   var st=[1,2,3,4,5,6,7,8,9]
   var rr=""
   for(i=0;i<st.length;i++){
    if(i%2==0){
        console.log("students present"," :"+i)
      rr= rr+ "" + i +","
        
        

    }else{
        console.log("students are abscent",": " +i)
    }
   } console.log(rr)

   let movies = ["Inception", "Interstellar", "Avatar", "Titanic"];

//console.log(movies[movies.length - 1]);
console.log(movies[3])