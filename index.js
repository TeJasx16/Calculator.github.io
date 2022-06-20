let mainbg= document.querySelector('.main')
let thems= document.querySelector('.thems')
let chkbtn= document.querySelector('.chkbtn')
let screen= document.querySelector('.screen')
let btns= document.querySelector('.btns')
let buttons= document.querySelectorAll('button')
const blubtns= document.querySelectorAll('.blubtn');
let redbtn= document.querySelector('.redbtn')



const btn1 = () =>{
    mainbg.classList.remove('secbg');
    thems.classList.remove('secthm');
    chkbtn.classList.remove('secchk')
   screen.classList.remove('secscrn')
   btns.classList.remove('secbtns')
   for (const button of buttons) {
       button.classList.remove('secbtnsbg')
    
}
  for (const blubtn of blubtns ) {
    
      blubtn.classList.remove('secblubtn')
  }
   redbtn.classList.remove('secredbtn')


}

const btn2 = () =>{

    
   mainbg.classList.add('secbg');
   thems.classList.add('secthm')
   chkbtn.classList.add('secchk')
   screen.classList.add('secscrn')
   btns.classList.add('secbtns')
for (const button of buttons) {
    button.classList.add('secbtnsbg')
 
}
for (const blubtn of blubtns ) {
    
    blubtn.classList.add('secblubtn')
}

   redbtn.classList.add('secredbtn')
    

    
    
}

const btn3 = () =>{
    console.log("3");
}