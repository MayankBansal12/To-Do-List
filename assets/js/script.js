const checkboxEl=document.querySelectorAll(".checkbox");

checkboxEl.forEach((checkbox)=>{
    checkbox.addEventListener("click",()=>{
        const labelEl=document.querySelector(`label[for="${checkbox.id}"]`);
        labelEl.classList.toggle("checked");
    })
});