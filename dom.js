let d = document.querySelector("#id").innerHTML="<h2>ohhooooo....</h2>";
let a = document.getElementById("head");
a.innerHTML="Hello Aman";
a.style.backgroundColor="red";
a.style.fontFamily="vardana";
a.style.padding="20px";
//let c= prompt("Enter your name");
//a.innerHTML = c;*/
let b = parseInt(prompt("Enter the number"));
if(b%2==0){
    document.write('Number is Even');
    a.innerHTML = b;
}
else {
    document.write('Number is  not Even');
    a.innerHTML = b;
}

 
