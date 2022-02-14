import { isWebp } from "./libs/webpImg.js";

(() => {

    function setBackgroundSize(input) {
        input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
        const precent = document.querySelector(".invest-briefcase__percent");
        precent.querySelector("span").textContent = input.value;
        const risk = document.querySelector(".invest-briefcase__risk");

        if (+input.value < 30) {
            risk.textContent = "Низкий риск";
            document.querySelector(".range-border-top").style.borderRight = "8px solid rgba(64, 85, 72, 1)";
            document.querySelector(".range-border-top").style.borderTop = "8px solid rgba(64, 85, 72, 1)";
        } else if (+input.value > 29 && +input.value < 60) {
            risk.textContent = "Высокий риск";
            document.querySelector(".range-border-top").style.borderTop = "8px solid rgba(106, 219, 131, 1)";
            document.querySelector(".range-border-top").style.borderRight = "8px solid rgba(64, 85, 72, 1)";
        } else {
            risk.textContent = "Пирамида";
            document.querySelector(".range-border-top").style.borderRight = "8px solid rgba(106, 219, 131, 1)";
        }


    }

    function getBackgroundSize(input) {
        const min = +input.min || 0;
        const max = +input.max || 100;
        const value = +input.value;

        const size = (value - min) / (max - min) * 100;

        return size;
    }

    function createTabs(wrapper, btn, item, effect) {
        const tabsWrapper = document.querySelector(`.${wrapper}`);
        tabsWrapper.addEventListener("click", (e) => {
            const target = e.target;
            if (e.target.classList.contains(`${btn}`)) {
                e.target.classList.toggle(`${btn}--active`);
                e.target.parentNode.classList.toggle(`${item}--active`);
                e.target.parentNode.querySelector(".questions__text").classList.toggle(effect);
            }
        });
    }

    document.addEventListener("DOMContentLoaded", () => {

        isWebp();
        const input = document.querySelector("input[name=range]");
        setBackgroundSize(input);
        input.addEventListener("input", () => setBackgroundSize(input));
        const investBtns = document.querySelectorAll(".invest-briefcase__btns-btn");
        investBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (!btn.classList.contains("invest-briefcase__btns-btn--active")) {
                    document.querySelector(".invest-briefcase__btns-btn--active").classList.remove("invest-briefcase__btns-btn--active");
                    btn.classList.add("invest-briefcase__btns-btn--active");
                }
            });
        });

        createTabs("questions__list", "read-more", "questions__item", "tab-transform");
    });
})();










// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);


// import {blurElements} from "./libs/blurElements.js";
// blurElements();


// import {isMobile} from "./libs/isMobile.js";
// if (isMobile.any()) {
//     document.body.classList.add('_mobile');
// } else {
//     document.body.classList.add('_pc');
// }


//import {pagination} from "./libs/pagination.js";
//pagination(list, item, itemCount);


//import Swiper, { Navigation, Pagination } from 'swiper';
//const swiper = new Swiper();