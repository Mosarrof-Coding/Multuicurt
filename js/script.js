// sticky navbar & toping---------------------
let naving = document.getElementById('navbar');
let toping = document.querySelector('.toping');

window.addEventListener('scroll', function(){
  let scroll_value = window.scrollY;
  if (scroll_value > 160) {
      naving.classList.add('sticky');
      toping.classList.add('top');
  } else {
      naving.classList.remove('sticky');
      toping.classList.remove('top');
  };
});

// drk-light frj----------------
$(function(){
    let dmode = document.querySelector('#d-mode');
    let body = document.querySelector('body');

    dmode.addEventListener('click', function(){
    body.classList.toggle('dark');
  });
});

// off-canvas--------------------------------
  function show() {
    document.getElementById('sd-overlay').style.width = '100%'
    document.getElementById('off-canbdy').style.width = '300px';
    document.getElementById('off-canbdy').style.marginLeft = '300px';
  };

  function hide() {
    document.getElementById('sd-overlay').style.width = '0%'
    document.getElementById('off-canbdy').style.width = '0';
    document.getElementById('off-canbdy').style.marginLeft= '0';
  };

  // right-canvas-------------------------------
  function openMe(){
    document.getElementById('right-canv').style.width = '350px';
    document.getElementById('right-canv').style.marginRight = '350px';
  };
  function clsMe(){
    document.getElementById('right-canv').style.width = '0';
    document.getElementById('right-canv').style.marginRight = '0';
  };
  // right-canvas sm-----------------
  function smNav1(){
    document.querySelector('.right_nav_sm').style.width = '50%';
    document.querySelector('.right_nav_sm').style.marginRight = '50%';
  };
  function smNav2(){
    document.querySelector('.right_nav_sm').style.width = '0%';
    document.querySelector('.right_nav_sm').style.marginRight = '0%';
  };

  // right-canvas sm-md-fa-bars -----------------
  function sm_mdNave1(){
    document.querySelector('.sm_mdNave').style.width = '50%';
    document.querySelector('.sm_mdNave').style.marginRight = '50%';
  };
  function sm_mdNave2(){
    document.querySelector('.sm_mdNave').style.width = '0%';
    document.querySelector('.sm_mdNave').style.marginRight = '0%';
  };

/* ban-slider..............-------------------*/
$(function(){
  $('.ban_slider').slick({
    infinite: true,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left prv_arr"></i>',
    nextArrow:'<i class="fas fa-chevron-right nxt_arr"></i>',
  });
});

// collect-img-slide---------------------------
$(function(){
    $('.collect-img').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows:false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });

    // collection mouseenter--------------------
    const displayArray = Array.from(document.querySelectorAll('.display .dimg'));
    const thumbnailArray = Array.from(document.querySelectorAll('.min_img .thumbimg'));
    const dotarray = Array.from(document.querySelectorAll('.fdots .lidot'));

    thumbnailArray.map((item, index)=> {
      item.addEventListener('mouseenter', function(){

        // catch all thumbtn & remove active-
        let allListArr = Array.from(item.parentElement.parentElement.querySelectorAll('.thumbimg'));
        allListArr.map((thumbtn)=> {
            thumbtn.classList.remove('actv');
        });
        // Catch all Display images
        let parentDiv = displayArray[index].parentElement;
        let displayImgArr = Array.from(parentDiv.querySelectorAll('.dimg'));
        displayImgArr.map((me) => {
            me.classList.remove('active');
        });
        // Active class add--------
        thumbnailArray[index].classList.add('actv');
        displayArray[index].classList.add('active');
      });
    });
    // Colors circle eventListener
      dotarray.map((color, index) => {
    color.addEventListener('click', () => {
      // catch all display image
      let displayImages = color.parentElement.parentElement;
      let img =  Array.from(displayImages.querySelectorAll('.display .dimg'));
      img.map(item => {
      item.classList.remove("active")
      })
      // catch all thumbnail image
      let thumbnailImages = color.parentElement.parentElement;
      let thumb =  Array.from(thumbnailImages.querySelectorAll('.min_img .thumbimg'));
      thumb.map(item => {
      item.classList.remove("actv")
      });
      // Active class add
      thumbnailArray[index].classList.add("actv")
      displayArray[index].classList.add("active")
      // dotarray[index].classList.add("active")
    })
  })
});

// exclusive filter gallery------------
const btnArray = Array.from(document.querySelectorAll('.xclusive_btn li'));
const filterArray = Array.from(document.querySelectorAll('.me12 .imgstore'));

btnArray.map((item, index)=> {
  item.addEventListener('click', (e)=> {
    // remove from class all item---
    btnArray.map((item)=> {
        item.classList.remove('active');
    })
    filterArray.map((index)=> {
        index.classList.remove('active');
    })
    // add indivisual class item-------
    btnArray[index].classList.add('active');
    filterArray[index].classList.add('active');
  });
});
// exclusive click event------------------
let bigimgArr = Array.from(document.querySelectorAll('.xclusiv_dimg'));
let btnArr = Array.from(document.querySelectorAll('.dot-ul .xclusive_Cbtn'));
btnArr.map((color, index) => {
  color.addEventListener('click', () => {
    // catch all display image--------------
    let displayImages = color.parentElement.parentElement;
    let img =  Array.from(displayImages.querySelectorAll('.xclusiv_dimg'))
    img.map(item => {
    item.classList.remove('active')
    })
    // catch all circle btn--------------
    let parentCircle = color.parentElement;
    let allColorCircle = parentCircle.querySelectorAll('.xclusive_Cbtn');
    let allColorCircleArr = Array.from(allColorCircle);
    allColorCircleArr.map((item) => {
    item.classList.remove('active')
    })
    // Active class add-------------------
    bigimgArr[index].classList.add('active')
    btnArr[index].classList.add('active')
  });
});

//blog part slider------------------------------
$(function(){
  // img slider-------------------------
  $('.blog-store').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      // autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1198,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 667,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ]
  });
  // art slider---------
  $('.art-slider').slick({
      infinite: true,
      arrows:false,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 766,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ]
  });
});
// trim babyslider-------------------------
$(function(){
    $('.timplate').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'#mearrow .fa-chevron-left',
        nextArrow:'#mearrow .fa-chevron-right',
        DragEvent:true,
    });

    $('.babybtn').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false,
        DragEvent:true,
        // asNavFor:'.boby1',
    });

    $('.boby1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        cssEase: 'linear',
        // asNavFor:'.babybtn',
    });
});

// trim pages toggle------------------------
$(function(){
  $('.tglbtn').click(function(){
      $('.trimul').toggle();
  });
  $('.tglbtn1').click(function(){
      $('.trimul_sw1').toggle();
  });
  $('.tglbtn2').click(function(){
      $('.trimul_sw2').toggle();
  });
  $('.tglbtn3').click(function(){
      $('.trimul_sw3').toggle();
  });
  $('.tglbtn4').click(function(){
      $('.trimul_sw4').slideToggle(500);
  });
  $('.tglbtn5').click(function(){
      $('.trimul_sw5').toggle();
  });
  // chatboot toggle--------------
  $('.cboot').click(function(){
      $('.popboard').toggle();
  });
  // visit facebook------------
  $('.faellipse').click(function(){
      $('.visit_f').toggle();
  });
});

// chatboot------------
let meminus = document.querySelector('.faminus');
let dnoneminus = document.querySelector('.popboard');
meminus.onclick = ()=>{
    dnoneminus.style.display = 'none';
};

// input range oninput(1000)------------
// $(function(){
//   const Sslider = document.getElementById('vol');
//   const rup = document.getElementById('rangeup');
//   const pSortq = document.querySelector('.p_sort');
//   rup.innerHTML = Sslider.value;

//   Sslider.oninput = function() {
//     rup.innerHTML = Sslider.value + '$';
//     if (Sslider.value >= 300) {
//         pSortq.style.display = 'none';
//     } else {
//         pSortq.style.display = 'block';
//     }
//   };
// });

// shadow active btn-------------------------
let activbtn = Array.from(document.querySelectorAll('.SML_btn .shadow_btn'));
activbtn.map((item, index)=> {
    item.addEventListener('click', (e)=> {
        // remove class all item-------
        activbtn.map((item)=> {
            item.classList.remove('active');
        })
        // add class indivisual item--------
        activbtn[index].classList.add('active');
    });
});

// add to cart onclick-----------------------
$(function(){
  let chevronleft = document.querySelector('#forprevbtn');
  let chevronright = document.querySelector('#fornextbtn');
  let InStock = document.querySelector('.InStock');
  let crtbutton = document.querySelector('.crtbutton');
  let crtbtns2 = document.querySelector('.crtbtns2');
  let input = document.querySelector('#input');

  let i=1;
  chevronright.addEventListener('click', function(){
    if (i<100) {
    input.value = [i+1];
    i++;
    };
    if(i>5){
      InStock.innerHTML='Out of Stock';
      crtbutton.style.opacity = .5;
      crtbutton.classList.add('disabled');
      crtbtns2.classList.add('disabled');
      crtbtns2.style.opacity = .5;
    };
  });
  chevronleft.addEventListener('click', function(){
    if (i>1) {
      input.value = [i-1];
      i--;
    }
    if(i<5){
      InStock.innerHTML='In stock';
      crtbutton.style.opacity = 1;
      crtbtns2.style.opacity = 1;
      crtbutton.classList.remove('disabled');
      crtbtns2.classList.remove('disabled');
    };
  });
});

// descriptive listener--------------------
let reviewbtn = Array.from(document.querySelectorAll('.d_ancor .btn5a'));
let viewpage = Array.from(document.querySelectorAll('.dsply3 .demo'));

reviewbtn.map((item, index)=> {
  item.addEventListener('click', (e)=> {
    // remove from class all item-------
    reviewbtn.map((item)=> {
        item.classList.remove('active');
    })
    // Catch all Display images---------
    let source = viewpage[index].parentElement;
    let viewpageArr = Array.from(source.querySelectorAll('.demo'));
    viewpageArr.map((me) => {
        me.classList.remove('active');
    });
    // add class indivisual item--------
    reviewbtn[index].classList.add('active');
    viewpage[index].classList.add('active');
  });
});

// releted product eventListener-------------- 
const displayArray = Array.from(document.querySelectorAll('.rp_div .display .dimg'));
const colorsArray = Array.from(document.querySelectorAll('.dot-ul .lidot'));

colorsArray.map((color, index) => {
  color.addEventListener('click', () => {
      // catch all display image--------------
      let displayImages = color.parentElement.parentElement;
      let img =  Array.from(displayImages.querySelectorAll('.rp_div .display .dimg'))
      img.map(item => {
      item.classList.remove('active')
      })
      // catch all circle color--------------
      let parentCircle = color.parentElement;
      let allColorCircle = parentCircle.querySelectorAll('.lidot');
      let allColorCircleArr = Array.from(allColorCircle);
      allColorCircleArr.map((item) => {
      item.classList.remove('active')
      })
      // Active class add-------------------
      displayArray[index].classList.add('active')
      colorsArray[index].classList.add('active')
  });
});

// trim product click event---------------
let firstbtn = Array.from(document.querySelectorAll('.tim_img'));
let next_dore = Array.from(document.querySelectorAll('.baby1_slider .babybtn'));

firstbtn.map((item, index)=> {
    item.addEventListener('click', (e)=> {
      // remove from class all item-------
      firstbtn.map((item)=> {
          item.classList.remove('active');
      })
      // Catch all Display images---------
      let source1 = next_dore[index].parentElement.parentElement;
      let doreArr = Array.from(source1.querySelectorAll('.babybtn'));
      doreArr.map((me) => {
          me.classList.remove('active');
      });
      // add class indivisual item--------
      firstbtn[index].classList.add('active');
      next_dore[index].classList.add('active');
   });
});

// voucher pass validation------------------
let fname_err= document.querySelector('.fame_err');
let lname_err= document.querySelector('.lname_err');
let phone_err= document.querySelector('.phone_err');
let email_err= document.querySelector('.email_err');
let country_err= document.querySelector('.country_err');
let address_err= document.querySelector('.address_err');
let city_err= document.querySelector('.city_err');
let state_err= document.querySelector('.state_err');
let pcode_err= document.querySelector('.pcode_err');

function vfname() {
  let fname = document.querySelector('.fname').value;
  if (fname.length == 0){
    fname_err.innerHTML = 'fname is required';
    return false;
  }
  fname_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vlname() {
  let lname = document.querySelector('.lname').value;
  if (lname.length == 0){
    lname_err.innerHTML = 'lname is required';
    return false;
  }
  lname_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vpnum() {
  let phone = document.querySelector('.phone').value;
  if (phone.length == 0){
    phone_err.innerHTML = 'phone is required';
    return false;
  }
  if (phone.length!== 11){
    phone_err.innerHTML = 'it must 11 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)){
    phone_err.innerHTML = 'only digits please';
    return false;
  }
  phone_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function validateEmail() {
  let email = document.querySelector('.email').value;
  if (email.length == 0){
    email_err.innerHTML = 'email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    email_err.innerHTML = 'email invalid';
    return false;
  }
  email_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vcountry() {
  let country = document.querySelector('.country').value;
  if (country.length == 0){
    country_err.innerHTML = 'country is required';
    return false;
  }
  country_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vaddress() {
  let address = document.querySelector('.address').value;
  if (address.length == 0){
    address_err.innerHTML = 'address is required';
    return false;
  }
  address_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vcity() {
  let city = document.querySelector('.city').value;
  if (city.length == 0){
    city_err.innerHTML = 'city is required';
    return false;
  }
  city_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vstate() {
  let state = document.querySelector('.state').value;
  if (state.length == 0){
    state_err.innerHTML = 'state is required';
    return false;
  }
  state_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

function vpcode() {
  let pcode = document.querySelector('.pcode').value;
  if (pcode.length == 0){
    pcode_err.innerHTML = 'pcode is required';
    return false;
  }
  pcode_err.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// // cursore style--------------
const hgfr = document.querySelector('.hgfr');
window.addEventListener('click', function(m){
  hgfr.style.left = (m.pageX-5) + 'px';
  hgfr.style.top = (m.pageY-5) + 'px';
  hgfr.style.display = 'block';
  setTimeout(() => {
      hgfr.style.display = 'none';
  }, 500);
});

// mobile_nav toggleFunk-----------
mobtglbtn = Array.from(document.querySelectorAll('.nav_pageBtn'));
toggleFunck = Array.from(document.querySelectorAll('.toggleFunck'));

mobtglbtn.map((x, y) =>{
  x.addEventListener('click', ()=>{
    // catch all target element-------
    let tElement = toggleFunck[y].parentElement;
    let telementArray = Array.from(tElement.querySelectorAll('.toggleFunck'));
    telementArray.map((ok)=>{
      ok.classList.toggle('active');
    });
  });
});