const bluecar = document.getElementById('bluelocal')
const reacecar = document.getElementById('reacecar')

bluecar.addEventListener("animationiteration", function(){
    const randomvalue = (Math.floor((Math.random() * 4)) * 130)
    bluecar.style.left = randomvalue + 'px'
})

window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){ var raceCarLeft = parseInt(window.getComputedStyle(reacecar).getPropertyValue("left"))
     if(raceCarLeft < 260){reacecar.style.left = (raceCarLeft + 130) + "px"}
 };
 
     if(e.keyCode == "37"){
         var reacecarLeft = parseInt(window.getComputedStyle(reacecar).getPropertyValue("left"))
         if(reacecarLeft > 0){reacecar.style.left = (reacecarLeft - 130) + "px"

     }
 
     }
 })