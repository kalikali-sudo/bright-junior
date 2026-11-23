const filterButtons =
document.querySelectorAll(".filter-btn");

const galleryItems =
document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.onclick=function(){

document
.querySelector(".filter-btn.active")
.classList.remove("active");

button.classList.add("active");

const filter=
button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all" ||
item.dataset.category===filter){

item.style.display="block";

}else{

item.style.display="none";

}

});

};

});

const search=
document.getElementById("gallerySearch");

if(search){

search.addEventListener("keyup",()=>{

const value=
search.value.toLowerCase();

galleryItems.forEach(item=>{

const text=
item.innerText.toLowerCase();

item.style.display=
text.includes(value)
?
"block"
:
"none";

});

});

}

const lightbox=
document.getElementById("lightbox");

const lightboxImage=
document.getElementById("lightboxImage");

galleryItems.forEach(item=>{

item.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=
item.querySelector("img").src;

};

});

document
.getElementById("closeLightbox")
.onclick=function(){

lightbox.style.display="none";

};

