let mainbg= document.querySelector('.main')
let thems= document.querySelector('.thems')
let chkbtn= document.querySelector('.chkbtn')
let screen= document.querySelector('.screen')
let btns= document.querySelector('.btns')
let buttons= document.querySelectorAll('button')
const blubtns= document.querySelectorAll('.blubtn');
let redbtn= document.querySelector('.redbtn')



const btn1 = () =>{
    mainbg.classList.remove('secbg' ,'thibg');
    thems.classList.remove('secthm','thithm');
    chkbtn.classList.remove('secchk','thichk')
   screen.classList.remove('secscrn','thiscrn')
   btns.classList.remove('secbtns','thibtns')
   for (const button of buttons) {
       button.classList.remove('secbtnsbg','thibtnsbg')
     }
   for (const blubtn of blubtns ) {
   blubtn.classList.remove('secblubtn','thiblubtn')
   }
   redbtn.classList.remove('secredbtn','thiredbtn')


}

const btn2 = () =>{


    mainbg.classList.remove('thibg');
    thems.classList.remove('thithm')
   chkbtn.classList.remove('thichk')
   screen.classList.remove('thiscrn')
   btns.classList.remove('thibtns')
   for (const button of buttons) {
    button.classList.remove('thibtnsbg')
    }
    for (const blubtn of blubtns ) {
        blubtn.classList.remove('thiblubtn')
        }
    redbtn.classList.remove('thiredbtn')


    
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
    mainbg.classList.add('thibg');
    thems.classList.add('thithm')
   chkbtn.classList.add('thichk')
   screen.classList.add('thiscrn')
   btns.classList.add('thibtns')
   for (const button of buttons) {
    button.classList.add('thibtnsbg')
    }
    for (const blubtn of blubtns ) {
        blubtn.classList.add('thiblubtn')
        }
    redbtn.classList.add('thiredbtn')

    
}