//Slash func
var slWork = $('.work-slash');
var slMore = $('.more-slash');
var slCl = $(".slash");
slWork.on( "mouseenter", function(){ slCl.css({transform: "rotate(45deg)"});});
slWork.on( "mouseleave", function(){ slCl.css({transform: "rotate(90deg)"});});
slMore.on( "mouseenter", function(){ slCl.css({transform: "rotate(125deg)"});});
slMore.on( "mouseleave", function(){ slCl.css({transform: "rotate(90deg)"});});


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

// nav scroll
$('.navbar li').click(function(event) {
  event.preventDefault();
  $('.navbar svg').remove();

  var x = event.pageX;
  var y = event.pageY;
  var clickX = x - $(this).offset().left;
  var clickY = y - $(this).offset().top;
  var block = this;
  var setX = parseInt(clickX);
  var setY = parseInt(clickY);

  $(this).append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="'+0+'"></circle></svg>');

  var circle = $(block).find("circle");
  circle.animate({
      "r": $(block).outerWidth()
  }, {
      duration: 250,
      step: function(val) {
          circle.attr("r", val);
      }
  });
});


var bb = $('#hamburger');
var isAnimate = false;

var hambBg = anime({
  targets: '#hambBg .el',
  backgroundColor: [
    {value: 'hsl(0, 0%, 10%)'}
  ],
  borderRadius: '50%',
  duration: 1000,
  scale: [0, 100],
  easing: [.4, 0, .2, 1]
});
hambBg.pause();
hambBg.reverse();


var hamburger = anime({
  targets: '#hamburger .menu-hamb__inner',
  opacity: function(el) {
    return el.getAttribute('data-o');
  },
  translateX: 0,
  translateY: function(el) {
    return el.getAttribute('data-y');
  },
   scale: 1.5,
   rotate: function(el) {
     return el.getAttribute('data-r');
   },
   duration: 1000
  //  duration: function() { return anime.random(1000, 200); },
  //  delay: function() { return anime.random(0, 1000); }
});
hamburger.pause();
hamburger.reverse();
// hambBtn.click( function(e) {
//   hambBg.play();
//   hambBg.reverse();
// });


bb.on('click',  function () {

  if( body.hasClass('open-modal') || modal.hasClass('open') ) {
    hamburger.play();
    hamburger.reverse();
    hambBg.play();
    hambBg.reverse();
    closeModal();
  } else {
    hambBg.play();
    hambBg.reverse();
    hamburger.play();
    hamburger.reverse();
    openModal();
  }

});


function openModal() {
  // lineMakerModal.animateLinesIn();
  body.addClass('open-modal');
  modal.addClass('open'); //console.log('open');

  setTimeout(function () {
    showModalContent();
  }, 350);
}
function closeModal() {
  closeModalContent();

  setTimeout(function () {
    // lineMakerModal.animateLinesOut();
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
