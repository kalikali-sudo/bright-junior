/* =====================================================
   BRIGHT JUNIOR SCHOOL WEBSITE
   MAIN JAVASCRIPT
===================================================== */



// ==========================================
// PRELOADER
// ==========================================


window.addEventListener("load",()=>{


    const preloader=document.getElementById("preloader");


    if(preloader){

        setTimeout(()=>{

            preloader.style.opacity="0";

            preloader.style.visibility="hidden";


        },800);

    }


});






// ==========================================
// MOBILE MENU
// ==========================================


const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector(".nav-menu");


if(menuBtn){


menuBtn.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


    menuBtn.innerHTML = 
    navMenu.classList.contains("active")
    ?
    '<i class="bi bi-x-lg"></i>'
    :
    '<i class="bi bi-list"></i>';



});



}





// Close mobile menu when clicking a link


document.querySelectorAll(".nav-menu a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(navMenu){

            navMenu.classList.remove("active");


        }


    });


});






// ==========================================
// HERO SLIDER
// ==========================================



const slides=document.querySelectorAll(".slide");

const nextBtn=document.getElementById("next");

const prevBtn=document.getElementById("prev");


let currentSlide=0;



function showSlide(index){


    slides.forEach(slide=>{


        slide.classList.remove("active");


    });


    slides[index].classList.add("active");


}





function nextSlide(){


    currentSlide++;


    if(currentSlide>=slides.length){

        currentSlide=0;

    }


    showSlide(currentSlide);


}




function previousSlide(){


    currentSlide--;


    if(currentSlide<0){

        currentSlide=slides.length-1;

    }


    showSlide(currentSlide);


}




if(nextBtn){


nextBtn.addEventListener("click",nextSlide);


}



if(prevBtn){


prevBtn.addEventListener("click",previousSlide);


}



// automatic slider


if(slides.length>0){


setInterval(()=>{


    nextSlide();


},5000);



}







// ==========================================
// STATISTICS COUNTER
// ==========================================


const counters=document.querySelectorAll(".counter");


let counterStarted=false;



function startCounters(){


    if(counterStarted) return;



    counters.forEach(counter=>{


        const target=+counter.dataset.target;


        let count=0;



        const update=()=>{


            const increment=Math.ceil(target/100);



            if(count<target){


                count+=increment;


                counter.innerText=count;


                setTimeout(update,20);


            }else{


                counter.innerText=target;


            }



        };


        update();



    });



    counterStarted=true;



}




window.addEventListener("scroll",()=>{


    const statistics=document.querySelector(".statistics");


    if(statistics){


        const position=statistics.getBoundingClientRect().top;


        const screenHeight=window.innerHeight;



        if(position < screenHeight-100){


            startCounters();


        }


    }



});








// ==========================================
// BACK TO TOP BUTTON
// ==========================================


const backTop=document.getElementById("backTop");



window.addEventListener("scroll",()=>{


    if(backTop){


        if(window.scrollY>400){


            backTop.style.display="flex";


        }else{


            backTop.style.display="none";


        }


    }



});




if(backTop){


backTop.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });



});



}






// ==========================================
// STICKY HEADER EFFECT
// ==========================================



const header=document.getElementById("header");


window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY>100){


            header.classList.add("sticky");


        }else{


            header.classList.remove("sticky");


        }


    }



});







// ==========================================
// SIMPLE SCROLL REVEAL ANIMATION
// ==========================================



const revealElements=document.querySelectorAll(
".welcome-card,.why-card,.program-card,.facility,.news-card,.testimonial-card"
);



function reveal(){


revealElements.forEach(element=>{


    const position=
    element.getBoundingClientRect().top;



    if(position < window.innerHeight-80){


        element.style.opacity="1";

        element.style.transform="translateY(0)";


    }



});



}




reveal();


window.addEventListener("scroll",reveal);
const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.parentElement.classList.toggle("active");

});

});



const admissionForm =
document.getElementById("admissionForm");

if(admissionForm){

admissionForm.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Application submitted successfully.\n\nThank you for applying to Bright Junior School."
);

admissionForm.reset();

});

}

/* ===============================
ANNOUNCEMENT
=============================== */

const announcement =
document.getElementById("announcementBar");

const closeAnnouncement =
document.getElementById("closeAnnouncement");

if(announcement){

if(localStorage.getItem("announcementClosed")){

announcement.style.display="none";

}

}

if(closeAnnouncement){

closeAnnouncement.onclick=function(){

announcement.style.display="none";

localStorage.setItem(
"announcementClosed",
"true"
);

}

}


const teachers=
document.querySelectorAll(".teacher-card");

const teacherModal=
document.getElementById("teacherModal");

const teacherImage=
document.getElementById("teacherImage");

const teacherName=
document.getElementById("teacherName");

const teacherRole=
document.getElementById("teacherRole");

teachers.forEach(card=>{

card.querySelector(".view-profile")
.onclick=()=>{

teacherImage.src=
card.querySelector("img").src;

teacherName.innerHTML=
card.querySelector("h3").innerHTML;

teacherRole.innerHTML=
card.querySelector("p").innerHTML;

teacherModal.style.display="flex";

};

});

document.getElementById("closeTeacher")
.onclick=function(){

teacherModal.style.display="none";

};

/* =====================================
NEWSLETTER FORM
===================================== */

const newsletter =
document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Thank you for subscribing to Bright Junior School updates!"
);

newsletter.reset();

});

}

/* =====================================
CONTACT FORM
===================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Thank you! Your message has been sent successfully."
);

contactForm.reset();

});

}


/* ==========================
   DARK MODE
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("themeToggle");

    if (!themeButton) return;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

    // Toggle theme
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeButton.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.innerHTML = "🌙";

        }

    });

});