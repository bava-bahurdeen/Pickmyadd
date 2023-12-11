
function togglechange(selectid){

        var content = document.getElementById(selectid);
    
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    
       
        var allSections = document.querySelectorAll('.sub-info');
        allSections.forEach(function(section) {
          if (section!== selectid && section.style.display !== 'none') {
            section.style.display = 'none';
          }

        })
      }

var image_container_1=document.querySelector(".influncer-image-container-1")
image_container_1.addEventListener("mouseover",()=>{
    image_container_1.classList.add("paused")
})
image_container_1.addEventListener("mouseout",()=>{
    image_container_1.classList.remove("paused")
})

var influncer_image_container_2=document.querySelector(".influncer-image-container-2")
influncer_image_container_2.addEventListener("mouseover",()=>{
    influncer_image_container_2.style. animationPlayState="paused";
})
var influncer_image_container_2=document.querySelector(".influncer-image-container-2")
influncer_image_container_2.addEventListener("mouseout",()=>{
    influncer_image_container_2.style. animationPlayState="running";
})

