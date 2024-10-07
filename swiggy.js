/*<button id="round-button1"></button>&nbsp;
            <button id="round-button2"></button>
            for-firstround-button
            */


let roundButton1 = document.getElementById('round-button1');
let roundButton2 = document.getElementById('round-button2');
roundButton2.addEventListener('click',()=>{
    let elements2 = document.getElementsByClassName('for-second-button');
    let elements1 = document.getElementsByClassName('for-firstround-button');
    for(i=0;i<elements2.length|| elements1.length;i++){
        elements2[i].style.display = "flex";
        elements1[i].style.display = "none"; 
    }      
})

roundButton1.addEventListener('click',()=>{
    let elements2 = document.getElementsByClassName('for-second-button');
    let elements1 = document.getElementsByClassName('for-firstround-button');
    for(let i=0;i<elements1.length|| elements2.length;i++){
        elements1[i].style.display="flex";
        elements2[i].style.display = "none";
    }
})