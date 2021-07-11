"use strict";
(function () {
  document.addEventListener('DOMContentLoaded', function () {



    let fillEffectList = document.querySelectorAll('.--circle-fill');

    fillEffectList.forEach(function (el) {
      let curBtnFiller = el.querySelector('.btn-circle-fill__filler');
      el.addEventListener('mouseenter', function (e) {
        let target = e.target;
        let rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        curBtnFiller.style.left = x + 'px';
        curBtnFiller.style.top = y + 'px';
      });

      el.addEventListener('mouseout', function (e) {
        let target = e.target;
        let rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        curBtnFiller.style.left = x + 'px';
        curBtnFiller.style.top = y + 'px';
      });
    });



    if (typeof window.getComputedStyle(document.body).mixBlendMode === 'undefined') {
      //on ie is true
      document.querySelector('.btn-circle-fill__text').classList.add('alternative');
    }



  });
})();