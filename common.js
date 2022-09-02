// AOS
AOS.init();

// 리사이즈 새로고침

$(document).ready(function () {
  let areaWidth = $("#sc2", "#sc5").width();
  $("#sc2", "#sc5").css("width", areaWidth);

  $(window).resize(function () {
    location.reload();
  })
})

// 슬라이드(스와이퍼)


if (window.innerWidth > 1200) {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
  });
} else if (window.innerWidth > 800) {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
  });
} else {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
  });
}

var swiper3 = new Swiper(".mySwiper3", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  pagination: {
    el: ".swiper-pagination3",
  },
});

// 슬라이드 구현

$(function () {
  let w = $('.slide_banner>div').width()
  let intv = setInterval(function () {
    nextAni()
  }, 5000)

  $('.slide_txt ul').click(function () {
    let nth = $(this).index()

    clearInterval(intv)
    numAni(nth)
    intv = setInterval(function () {
      nextAni()
    }, 5000)

  })

  function nextAni() {
    $('.slide_banner').stop().animate({
      marginLeft: -100 + '%'
    }, 700, function () {
      $('.slide_banner>div').eq(0).appendTo('.slide_banner')
      $('.slide_banner').css({
        marginLeft: 0
      })

      $('.slide_txt ul').eq(0).appendTo('.slide_txt')
    })
  }

  function numAni(Bnth) {
    for (let x = 0; x < Bnth; x++) {
      $('.slide_banner>div').eq(0).appendTo('.slide_banner')
      $('.slide_txt ul').eq(0).appendTo('.slide_txt')
    }
  }

  // nav 투뎁스
  if (window.innerWidth > 1000) {
    $('nav').on('mouseover', function () {
      $('.depth2').slideDown(100)
    })
    $('nav').on('mouseleave', function () {
      $('.depth2').slideUp(100)
    })
  } else {
    $(function () {
      $('.ham').click(function () {
        $(this).toggleClass('on')
        $('nav').toggleClass('on')
      })
      $('.gnb>li>a').click(function (e) {
        e.preventDefault()
      })

      $('.gnb>li').click(function () {
        let i = $(this).index()

        $('.gnb>li').removeClass('on')
        $(this).addClass('on')
        $('.gnb>li .depth2').removeClass('on')
        $('.gnb>li .depth2').eq(i).addClass('on')
      })
    })
  }

  $('.gnb').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  // 탭 메뉴
  $('.sec2 .day>div').click(function () {
    let i = $(this).index()

    $('.sec2 .day>div').removeClass('on')
    $(this).addClass('on')
    $('.sec2_slide>li').eq(-1).prependTo('.sec2_slide')
  })


  // sec3 탭
  $('.sec3_hd span').click(function () {
    let i = $(this).index()

    $('.sec3_hd span').removeClass('on')
    $(this).addClass('on')
    $('.sec3_vw>div').removeClass('on')
    $('.sec3_vw>div').eq(i).addClass('on')
  })
})

// 맨위로가기

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});