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

/* ban-slider..............-------------------*/
$(function(){
    $('.slider-img').slick({
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow:'<i class="fas fa-chevron-right nxt_arr"></i>',
    });
});
// collect-img-slide---------------------------
$(function(){
    $('.collect-img').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        // autoplay: true,
        autoplaySpeed: 2000,
    });

    // collection mouseenter--------------------
    const displayArray = Array.from(document.querySelectorAll('.display .dimg'));
    const thumbnailArray = Array.from(document.querySelectorAll('.min_img .thumbimg'));

    thumbnailArray.map((item, index)=> {
        item.addEventListener('mouseenter', function(){

            // catch all thumbtn & remove active-
            let allListArr = Array.from(item.parentElement.querySelectorAll('.thumbimg'));
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
});

// blog slider-------------------------
$(function(){
    $('.blog-store').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
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

// art-slider------------------------------
$(function(){
    $('.art-slider').slick({
        infinite: true,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 3,
    });
});

// trim babyslider-------------------------
$(function(){
    $('.baby1_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

// trim pages toggle------------------------
$(function(){
    $('.tglbtn').click(function(){
        $('.trimul').slideToggle(1000);
    });
});

// trim slider------------------------------
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
});
// shadow active btn-------------------------
let activbtn = Array.from(document.querySelectorAll('.SML_btn .shadow_btn'));
activbtn.map((item, index)=> {
    item.addEventListener('click', (e)=> {
        // remove from class all item-------
        activbtn.map((item)=> {
            item.classList.remove('active');
        })
        // add class indivisual item--------
        activbtn[index].classList.add('active');
    });
});

// add to cart onclick-----------------------
let chevronleft = document.getElementById('forprevbtn');
let chevronright = document.getElementById('fornextbtn');
let input = document.getElementById('input');

let i=0;
chevronright.onclick = function(){
    if (i<10) {
        input.value = [i+1];
        i++;
    }else{
        input.value = 'out of stock';
    }
};
chevronleft.onclick = function(){
    if (i>0) {
        input.value = [i-1];
        i--;
    }else{
        input.value = 'skip';
    }
};

// descriptive listener--------------------
let reviewbtn = Array.from(document.querySelectorAll('.d_ancor .btn5a'));
let viewpage = Array.from(document.querySelectorAll('.dsply3 .demo'));

reviewbtn.map((item, index)=> {
    item.addEventListener('click', (e)=> {
        // remove from class all item-------
        reviewbtn.map((item)=> {
            item.classList.remove('active');
        })

        // Catch all Display images
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
// Colors circle eventListener----------------
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
    })
});