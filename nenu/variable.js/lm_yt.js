var ab = "playwright";

for (var i = ab.length - 1; i >= 0; i--) {
    console.log(ab[i], i);
}

console.log("#########################")

var ab1 = "pllatyywrigghtkkk";


for (var i = 0; i < ab1.length; i++) {
    var count=0
    if(ab1.indexOf(ab1[i]) == i) {
for(var j=0;j<ab1.length;j++){
    if(ab1[i]==ab1[j])
        count++
      }
      console.log(ab1[i] + ": " + count);
    }
      
    }
      
