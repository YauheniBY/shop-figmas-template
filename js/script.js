window.addEventListener('load',function(){

    let $menuBtn = document.querySelector('.header__menu-button'),
    $nav = document.querySelector('.nav'),
    $menuCross = document.querySelector('.nav__cross'),
    $body = document.querySelector('body'),
    $subFilters = document.querySelectorAll('.filters__sub-filter'),
    $filter = document.querySelector('.filters__filter'),
    $filterUnits = document.querySelectorAll('.filters__box-item'),
    $productFilters = document.querySelectorAll('.product-desk__filter'),  
    flagMenu = false;



    //------------Open-close main-Filters
    
    if($filter){

        $filter.addEventListener('click', function(event){
            if(!event.target.classList.contains('filters__box-title') && !($filter.querySelector('.filters__box').classList.contains('filters__box_active'))) {
                $filter.querySelector('.filters__box').classList.add('filters__box_active');
            } else if(event.target.classList.contains('filters__box-title')){
                $filter.querySelector('.filters__box').classList.remove('filters__box_active');
            };
        });

    }


    //------------- Open-close hints of main-filters

    Array.from($filterUnits).forEach( function(unit) {
        unit.addEventListener('click', event => {

            if(event.target.classList.contains('filters__box-item-name') && unit.querySelector('.filters__box-item-links').classList.contains('filters__box-item-links_active')) {
                unit.querySelector('.filters__box-item-links').classList.remove('filters__box-item-links_active');
            } else if (event.target.classList.contains('filters__box-item-name') && !(unit.querySelector('.filters__box-item-links').classList.contains('filters__box-item-links_active'))){
                unit.querySelector('.filters__box-item-links').classList.add('filters__box-item-links_active');
            }
        });
    });



    //-----------Open-close Sub-filteres
    openCloseForms($subFilters, 'filters__sub-filter-items');



    //-----------Open-close Product-filteres

    openCloseForms($productFilters, 'product-desk__filter-items'); 



    //-----------Open-close Menu

    $menuBtn.addEventListener('click', e => {
        flagMenu = true;       
    },true);

    $nav.addEventListener('click', e => {
        flagMenu = true;       
    },true);
    
    $menuCross.addEventListener('click', e => {
        flagMenu = false;       
    }, true);

    $body.addEventListener('click', event => {
    
        if(flagMenu == false) {
            $nav.classList.remove('nav__active');
        } else {
            $nav.classList.add('nav__active');
        }
        flagMenu = false;
    
    }, false );

    // ---------------- S L I D E R

    new Slider('.slider');  


    //   -----------   F U N C T I O N S

    function openCloseForms (filters, nameClass) {

        Array.from(filters).forEach (function(filter){

            filter.addEventListener('click', event => {
                if(event.target.querySelector(`.${nameClass}`)){
                    if(event.target.querySelector(`.${nameClass}`).classList.contains(`${nameClass}_active`)){
                        filter.querySelector(`.${nameClass}`).classList.remove(`${nameClass}_active`);
                    } else {
                        filter.querySelector(`.${nameClass}`).classList.add(`${nameClass}_active`);
                    }
                }
                
            });

    });

} 
    
});


class Slider{
    constructor(selector) {
        this.root = document.querySelector(selector);
        this.btnPrev = this.root.querySelector('.slider__prev-btn');
        this.btnNext = this.root.querySelector('.slider__next-btn');

        this.images = this.root.querySelectorAll('.slider__img');
        this.i = 0;
        this.animated = false;

        this.btnPrev.addEventListener('click', () => { this.prev() });
        this.btnNext.addEventListener('click', () => { this.next() });

        this.leftAnim = [
            {transform: 'translateX(-100%)', opacity: 0},
            {transform: 'translateX(0%)', opacity: 1}
        ];

        this.rightAnim = [
            {transform: 'translateX(100%)', opacity: 0},
            {transform: 'translateX(0%)', opacity: 1}
        ];
    }

        prev(){
            if(!this.animated){
                let imgHide = this.images[this.i];
                this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
                this.toggleSlides(imgHide, this.images[this.i], false);                
            }
        };

        next(){
            if(!this.animated){
                let imgHide = this.images[this.i];
                this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
                this.toggleSlides(imgHide, this.images[this.i]);                
            }
        };

        toggleSlides(imgHide, imgShow, isNext = true) {

            imgShow.classList.add('slider__img_active');
            imgShow.animate(isNext ? this.rightAnim : this.leftAnim, { duration:500 });

            let hideAnimate = imgHide.animate(isNext ? this.leftAnim : this.rightAnim, { 
                duration:500,
                direction: 'reverse'
            });

            hideAnimate.addEventListener('finish', () => {
                imgHide.classList.remove('slider__img_active');
                this.animated = false;
            });


        }

    
}
