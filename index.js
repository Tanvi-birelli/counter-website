const increaseBtn = document.getElementById("increasebtn")
const resetBtn = document.getElementById("resetbtn")
const decreaseBtn = document.getElementById("decreasebtn")
const value=document.getElementById("value")
let count=0;
increaseBtn.addEventListener("click", ()=>{
    count++
    value.textContent = count
})
decreaseBtn.addEventListener("click", ()=>{
    if (Number(value.textContent)>0){
        count--
        value.textContent = count
    }
})
resetBtn.addEventListener("click", ()=>{
    if (value.textContent !=0){
        count=0;
        value.textContent=0
    }
})
