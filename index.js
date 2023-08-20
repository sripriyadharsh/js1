// intro
console.log("I am Sripriya"); 

//variables

//type 1
var a;
var a = 10;
var a = 20;
console.log(a);
a = 30;
console.log(a);

//type 2
let b = 40;
console.log(b);
b = 30;
console.log(b);
b = 60;
console.log(b);

//type 3
const c = 50;
console.log(c);


//Data types
var s = "blacky"
console.log(typeof(s)); 
d = null
console.log(typeof(d));
e = true;
console.log(typeof(e));
d = undefined
console.log(typeof(d));
d = 89;
console.log(typeof(d));

//error
console.error("syntax error");
//warn
console.warn("you caught");
//group
console.group("group");
console.log("its");
console.log("yippee time");
console.groupEnd();
// //alert
// alert("you are in trouble");
// //prompt
// f= prompt("Enter your name",);
// console.log(f);
// //confirm
// confirm("confirm");

//datatype changing
var g= 80;
console.log(typeof(g));
console.log(typeof(String(g)));

//operators
var h = "6"/"3";
console.log(h);
h +=4;
console.log(h);

l= 10;
m = 20;
//arithmetic
console.log(l+m);
console.log(l-m);
console.log(l/m);
console.log(l%m);
console.log(l*m);
console.log(l^m);
console.log(l**m);

//boolean
//and
o=console.log(l>m && l<m);
//invert
console.log(!o);

//concatenation
console.log(l  + o );
m = 34;
n = "sri";
console.log(m + n);

//condition
//if-else
var x = 20;
if(x>18){
    console.log("ur're eligible for vote");
}
else{
    console.log("ur are not eligible for vote");
}
//if-elif-else
var x = 30;
if (x==20) {
    console.log("20");
  } else if (x==30) {
    console.log("30");
  } else {
    console.log("10");
  }
  
//loop
//for loop
for (let j = 0; j <= 10; j++) {
  console.log(j);
}
//while loop
var j =1;
while (j<5) {
 
  console.log(j);
  j++;
  
}
//do while
// do {
//   j=1;
//   console.log(j);
//   j++;
// } while (j<5);

y=47;
z=31;
const v = y > z ? "hi":
y == z ? "hello":
"exit";

//function
function dot(a,b) {
  console.log(a+b);
  
}
dot(5,10);

//switch
var w = 90;
switch (w) {
  case 90:
    
    break;
    console.log(w);

  default:
    break;
}