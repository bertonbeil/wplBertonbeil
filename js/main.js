//Slash func
var slWork = $('.work-slash');
var slMore = $('.more-slash');
var slCl = $(".slash");
slWork.on( "mouseenter", function(){ slCl.css({transform: "rotate(45deg)"});});
slWork.on( "mouseleave", function(){ slCl.css({transform: "rotate(90deg)"});});
slMore.on( "mouseenter", function(){ slCl.css({transform: "rotate(125deg)"});});
slMore.on( "mouseleave", function(){ slCl.css({transform: "rotate(90deg)"});});

// nav scroll
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

// modal window
this.body = $('body');
this.modal = $('#modalMore');
this.modalBtn = $('#moreBtn');
this.closeBtn = $('a.close');


modalBtn.on('click',  function () {

  if( body.hasClass('open-modal') || modal.hasClass('open') ) {
    closeModal();
  } else {
    openModal();
  }

  closeBtn.on('click', function () {
    closeModal();
  });
});


function openModal() {
  body.addClass('open-modal');
  modal.addClass('open');
}
function closeModal() {
  body.removeClass('open-modal');
  modal.removeClass('open');
}

console.log(modalBtn);
