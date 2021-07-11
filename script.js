calcy=()=>{
let wd=document.getElementById('wd').value
let maths=document.getElementById('maths').value
let comp=document.getElementById('comp').value
let phy=document.getElementById('phy').value
let gradBox=document.getElementById('grad_box')


let totalMark=parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy)

let percent=(totalMark/400)*100;

if (percent<=100 && percent>=80) {
  grade='<h6>Your Grade is "A" Congratulation your are-</h6> <h2> <pre>    [pass]</pre></h2>';
  gradBox.style.color='white'
  
}
else if(percent<80 && percent >=60){
  grade='<h6>Your Grade is "B" Congratulation your are-</h6> <h2> <pre>    [pass]</pre></h2>';
  gradBox.style.color='white'
}
else if (percent<60 && percent>=40){
  grade='<h6>Your Grade is "C" your are-</h6> <h2> <pre>  [pass]</pre></h2><h6>Need Improvement</h6>';
  gradBox.style.color='yellow'
}
else{
  
  grade='<h6>Your Grade is "D" Sorry your are-</h6> <h2> <pre>    [Fail]</pre></h2>';
  gradBox.style.color='red'
}
 


document.getElementById('showData').innerHTML='Out of 400 your  total is '+totalMark+' and percentage is '+Math.floor(percent)+'% ';

gradBox.innerHTML=grade;


}