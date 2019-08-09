document.onclick=foo;
function rel(){
  
location.reload(true);
}
 


var block= document.getElementsByClassName('block');
 
var count=0;
function foo(event){
  
if(event.target.className==='block' && event.target.innerHTML=="" ){
if(count %2 ==0  ){
    event.target.innerHTML='x';
   count++;
   }
    
    else if(count %2 !=0 ){
       event.target.innerHTML='o';
      count++;
    }

  }
setTimeout(check, 3000);



}

foo();

function check(){

 if (block[0].innerHTML=='x' && block[1].innerHTML=='x' && block[2].innerHTML=='x'){
   
 alert("Победили крестики");
 rel();
 }
 if (block[3].innerHTML=='x' && block[4].innerHTML=='x' && block[5].innerHTML=='x'){
 alert("Победили крестики");
 rel();
  }
  if (block[6].innerHTML=='x' && block[7].innerHTML=='x' && block[8].innerHTML=='x'){
 alert("Победили крестики");
  rel();}
   if (block[0].innerHTML=='x' && block[3].innerHTML=='x' && block[6].innerHTML=='x'){
 alert("Победили крестики");
   rel();}
    if (block[1].innerHTML=='x' && block[4].innerHTML=='x' && block[7].innerHTML=='x'){
 alert("Победили крестики");
    rel();}
    if (block[2].innerHTML=='x' && block[5].innerHTML=='x' && block[8].innerHTML=='x'){
 alert("Победили крестики");
    rel();}
    if (block[0].innerHTML=='x' && block[4].innerHTML=='x' && block[8].innerHTML=='x'){
 alert("Победили крестики");
    rel();}
    if (block[2].innerHTML=='x' && block[4].innerHTML=='x' && block[6].innerHTML=='x'){
 alert("Победили крестики");
    rel();}
//победили крестики
 if (block[0].innerHTML=='o' && block[1].innerHTML=='o' && block[2].innerHTML=='o'){
 alert("Победили нолики");
 rel();}
 if (block[3].innerHTML=='o' && block[4].innerHTML=='o' && block[5].innerHTML=='o'){
 alert("Победили  нолики");
 rel();}
  if (block[6].innerHTML=='o' && block[7].innerHTML=='o' && block[8].innerHTML=='o'){
 alert("Победили  нолики");
  rel();}
   if (block[0].innerHTML=='o' && block[3].innerHTML=='o' && block[6].innerHTML=='o'){
 alert("Победили  нолики");
   rel();}
    if (block[1].innerHTML=='o' && block[4].innerHTML=='o' && block[7].innerHTML=='o'){
 alert("Победили  нолики");
    rel();}
    if (block[2].innerHTML=='o' && block[5].innerHTML=='o' && block[8].innerHTML=='o'){
 alert("Победили  нолики");
    rel();}
    if (block[0].innerHTML=='o' && block[4].innerHTML=='o' && block[8].innerHTML=='o'){
 alert("Победили  нолики");
    rel();}
    if (block[2].innerHTML=='o' && block[4].innerHTML=='o' && block[6].innerHTML=='o'){
 alert("Победили  нолики");
    rel();}  


}