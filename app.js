var nname=document.getElementById('name');
var fname=document.getElementById('fname');
var email=document.getElementById('mail');
var cnic=document.getElementById('cnic');
var numb=document.getElementById('number');
var output=document.getElementById('output1');
var output1=document.getElementById('output2');
var output2=document.getElementById('output3');
var output3=document.getElementById('output4');
var output4=document.getElementById('output5');


function getvalue(){
var f=nname.value;
var b=fname.value;
var c=email.value;
var d=cnic.value;
var e=numb.value;
 if(f==""||b==""||c==""||d==""||e==""){
    alert("Plz fill the form complete!!!"); 

 }
 else{
   output.innerHTML=f;
   output1.innerHTML=b;
   output2.innerHTML=c;
   output3.innerHTML=d;
  output4.innerHTML=e;
        
      

 }
 
}

