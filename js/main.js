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
        navBordaer.animateLinesIn();
    } else {
        $('.header').removeClass('fixed');
        navBordaer.animateLinesOut();
    }
});

// modal window
this.body = $('body');
this.modal = $('#modalMore');
this.modalBtn = $('#moreBtn');
this.closeBtn = $('a#close');
this.portItem = $('.p-box');

// modal
this.aboutUsText = $('.about-us-text');
this.moreLinks = $('.more-links');
this.socialLinks = $('.social-list');

this.hambBtn = $('button.menu-hamb');


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
  lineMakerModal.animateLinesIn();
  body.addClass('open-modal');
  modal.addClass('open'); //console.log('open');

  setTimeout(function () {
    showModalContent();
  }, 350);
}
function closeModal() {
  closeModalContent();

  setTimeout(function () {
    lineMakerModal.animateLinesOut();
    body.removeClass('open-modal');
    modal.removeClass('open'); //console.log('close');
  }, 350);
}

function showModalContent() {
  aboutUsText.addClass('show');
  moreLinks.addClass('show');
  socialLinks.addClass('show');
  // console.log('show content');
}
function closeModalContent() {
  aboutUsText.removeClass('show');
  moreLinks.removeClass('show');
  socialLinks.removeClass('show');
  // console.log('hide content');
}

portItem.hover(
    function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    }
);

// anime
hambBtn.on('click', function() {
  var hamburger = anime({
    targets: '#hamburger .hamb-inner',
    opacity: function(el) {
      return el.getAttribute('data-o');
    },
    translateX: 0,
    translateY: function(el) {
      return el.getAttribute('data-y');
    },
     scale: 3,
     rotate: function(el) {
       return el.getAttribute('data-r');
     },
     duration: function() { return anime.random(1200, 1800); },
     duration: function() { return anime.random(800, 1600); },
     delay: function() { return anime.random(0, 1000); }
  });
});








var lineMaker = new LineMaker({
  parent: {
    element: '#svg-container',
    position: 'absolute'
  },
  lines: [
    {top: 0, left: '0%', width: 1, height: '100vh', color: '#CDCFD0', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'TopBottom' }},
    {top: 0, left: '25%', width: 1, height: '100vh', color: '#CDCFD0', hidden: true, animation: { duration: 1000, easing: 'easeInOutQuad', delay: 100, direction: 'BottomTop' }},
    {top: 0, left: '50%', width: 1, height: '100vh', color: '#CDCFD0', hidden: true, animation: { duration: 500, easing: 'easeInOutQuad', delay: 0, direction: 'BottomTop' }},
    {top: 0, left: '75%', width: 1, height: '100vh', color: '#CDCFD0', hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 400, direction: 'TopBottom' }},
    {top: 0, left: '100%', width: 1, height: '100vh', color: '#CDCFD0', hidden: true, animation: { duration: 800, easing: 'easeOutSine', delay: 300, direction: 'BottomTop' }}
  ]
});

var lineMakerModal = new LineMaker({
  parent: {
    element: '#modalMore',
    position: 'absolute'
  },
  lines: [
    {top: 0, left: '0%', width: '25%', height: '100vh', color: '#097cf3', hidden: true, animation: { duration: 300, easing: 'easeInOutSine', delay: 100, direction: 'TopBottom' }},
    {top: 0, left: '25%', width: '25%', height: '100vh', color: '#097cf3', hidden: true, animation: { duration: 300, easing: 'easeInOutQuad', delay: 50, direction: 'TopBottom' }},
    {top: 0, left: '50%', width: '25%', height: '100vh', color: '#097cf3', hidden: true, animation: { duration: 300, easing: 'easeInOutQuad', delay: 150, direction: 'TopBottom' }},
    {top: 0, left: '75%', width: '25%', height: '100vh', color: '#097cf3', hidden: true, animation: { duration: 300, easing: 'easeOutSine', delay: 0, direction: 'TopBottom' }}
  ]
});


var navBordaer = new LineMaker({
  parent: {
    element: '.header',
    position: 'absolute'
  },
  lines: [
    {top: '100%', left: 0, width: '100%', height: 1, color: '#000', hidden: true, animation: { duration: 300, easing: 'easeOutSine', delay: 0, direction: 'LeftRight' }}
  ]
});

setTimeout(function() {
  lineMaker.animateLinesIn();
}, 250);
