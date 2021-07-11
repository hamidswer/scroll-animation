const row1=document.querySelector(".row-1-span ");
const row2=document.querySelector(".row-2-span");
const row3=document.querySelector(".row-3-span");
const row4=document.querySelector(".row-4-span");
const row5=document.querySelector(".row-5-span");
const allRows=document.querySelectorAll(".row-select");

window.addEventListener("scroll", (e)=> {
        lastKnownScrollPosition=window.scrollY;
        console.log(lastKnownScrollPosition);

        if (lastKnownScrollPosition > 400) {
            row2.classList.add("left-to-right-transform");
        }

        if (lastKnownScrollPosition > 1000) {
            row3.classList.add("right-to-left-transform");
        }

        if (lastKnownScrollPosition > 1600) {
            row4.classList.add("left-to-right-transform");
        }

        if (lastKnownScrollPosition > 2200) {
            row5.classList.add("right-to-left-transform");
        }
    }

);