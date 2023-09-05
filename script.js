const isStatus = document.querySelector("h5");
const addbtn = document.querySelector("#addbtn");

let addFriend = 0;

addbtn.addEventListener("click",()=>{
   if(addFriend){
    isStatus.innerHTML="Stranger";
    isStatus.style.color="red";
    addbtn.innerText="Add Friend";
    addbtn.style.color = "green"
    addFriend = 0;
   }
  else{
    isStatus.innerHTML="Friends";
    isStatus.style.color="green";
    addbtn.innerText="Remove";
    addbtn.style.color = "red"
    addFriend = 1;
  }
})