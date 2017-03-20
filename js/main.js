//Slash func
var slWork = $('.work-slash');
var slMore = $('.more-slash');
var slCl = $(".slash");
slWork.on( "mouseenter", function(){ slCl.css({transform: "rotate(45deg)"});});
slWork.on( "mouseleave", function(){ slCl.css({transform: "rotate(90deg)"});});
slMore.on( "mouseenter", function(){ slCl.css({transform: "rotate(125deg)"});});
slMore.on( "mouseleave", function(){ slCl.css({transform: "rotate(90deg)"});});

// nav scroll
var jsHeader = $('section.main-cover');
var $shadower = $('.shadower');
var jsNav = $('header.header');

$(window).bind('scroll', function () {
    var hW = $(jsHeader).outerHeight();
    var wScroll = $(this).scrollTop();
    var navTop = $(jsNav).height();
    var headScroll = (wScroll / 2);
    var faderScroll = ( wScroll / hW );
    var fadeToColor = Math.min(10, faderScroll);




    // console.log(wScroll);
    console.log(wScroll);

    if ( navTop > 100 || wScroll < 500) {
      console.log(wScroll);
      jsNav.css({
        'background': "rgba(0, 0, 0, " + fadeToColor * 2 + " )",
        'height': 200 - (fadeToColor * 180),
        'line-height': 200 - (fadeToColor * 180) + 'px',
        'top': 150 - (fadeToColor * 260)
      });
    }
    if ( navTop < 100 || wScroll > 500 ) {
      console.log(wScroll);
      jsNav.css({
        'top': 0,
        'height': 100,
        'line-height': '100px'
      });
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


// #######
function scrollFooter(scrollY, heightFooter) {
    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    } else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}

$(window).ready( function() {
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) + 160;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('section.main-cover').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        // $('section.main-cover').css({
        //     'background-position-y' : 50 + (scroll * 1000 / heightDocument) + '%'
        // });

        // $('#bgvid').css({
        //     'transform' : 'translateX(-50%) translateY(-' + 5 + (scroll * 10 / heightDocument) + '%' + ')'
        // });

        scrollFooter(scroll, footerHeight);
    }
});
