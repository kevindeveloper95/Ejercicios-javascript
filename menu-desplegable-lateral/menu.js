let desplegar = document.querySelectorAll('.list-click')

desplegar.forEach(desple =>{
desple.addEventListener('click',()=>{

desple.classList.toggle('arrow')    

let height = 0;
let menu = desple.nextElementSibling;
if(menu.clientHeight == '0'){
    height= menu.scrollHeight; 
   

}

menu.style.height = `${height}px`;
})


});