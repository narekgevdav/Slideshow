let imagelist = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg"]
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let image = document.getElementById("images")
start.addEventListener("click", slidshow)



function slidshow(){
    start.style.visibility = "hidden"
    stop.style.visibility = "visible"
    stop.addEventListener("click", stopSlide)    
    let imgNumber = 0
    let div = document.getElementById("slidshow")      
    image.src = imagelist[0]
    div.appendChild(image)
    let myInterval = setInterval(changeImage,3000)
    function changeImage(){
        if (imgNumber<imagelist.length-1){
            imgNumber++
            image.src = imagelist[imgNumber]
        } else{
            
            clearInterval(myInterval)
            image.src = ""
            start.style.visibility = "visible"
            stop.style.visibility = "hidden" 
            
        }

    }
    function stopSlide(){
        clearInterval(myInterval)
        image.src = ""
       
        start.style.visibility = "visible"
        stop.style.visibility = "hidden" 
    }
   
    
    

  
}

