/*global $, console*/

/* Triger The Glide.js */
var glide = new Glide('#intro', {
  type: 'carousel',
  perView: 2,
  focusAt: '0',
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})

glide.mount();
/* Triger The Glide.js */
/* Triger The Glide.js */

let $btns = $('.gallery .button-group button');


    $btns.click(function (e) {

        $('.gallery .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.gallery .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.gallery .button-group #btn1').trigger('click');


/* Triger The Glide.js */