
loginform.addEventListener("submit", mylogin)
var reguser = JSON.parse(localStorage.getItem("savedata"))

function mylogin(event){
   event.preventDefault();
   var email= document.querySelector("input").value
   console.log(reguser)
   if(reguser === null){
       alert("check your email")
   }
   else{
       for(var i=0; i<reguser.length; i++){
           if(reguser[i].resemail == email){
              window.location.href="index.html"
              break;
               
           }
           else{
               alert("check your email")
               break;
               
           }
       }
   }
  

}