$(function(){

    $('.navbar-section li').click(function (){

        $(this).addClass('active').siblings().removeClass('active')
        
        $('.section').hide()
        $($(this).data('class')).show().addClass('active').siblings().removeClass('active')

    });

});



const portofolioFilter = document.querySelector('.portofolio-filter'),
        portofolioFilterBtns = portofolioFilter.children,
        totalPortofolioFilter = portofolioFilterBtns.length,
        portofolioItem = document.querySelectorAll('.portofolio-items .portofolio-item'),
        totalPortofolioItem = portofolioItem.length;

        for (let i=0; i<totalPortofolioFilter; i++) {
            portofolioFilterBtns[i].addEventListener('click', function () {

                portofolioFilter.querySelector('.active').classList.remove('active')
                this.classList.add('active')

                const filterValue = this.getAttribute('data-filter');

                for(let u=0; u<totalPortofolioItem; u++) {

                    if (filterValue === portofolioItem[u].getAttribute('data-category')) {
                        
                        portofolioItem[u].classList.add('show')
                        portofolioItem[u].classList.remove('hide')
                    } else {
                        portofolioItem[u].classList.add('hide')
                        portofolioItem[u].classList.remove('show')
                    }
                    if (filterValue === 'all') {
                        portofolioItem[u].classList.add('show')
                    }

                }
            })
        }

// Lightbox
const lightBox = document.querySelector('.lightbox'),
        lightBoxClose = lightBox.querySelector('.close'),
        lightBoxImg = lightBox.querySelector('.lightbox .img img'),
        lightBoxImgSrc = lightBoxImg.getAttribute('src'),
        lightBoxText = lightBox.querySelector('.caption-text'),
        lightBoxCounter = lightBox.querySelector('.caption-counter'),
        prevItemBtn = document.querySelector('.controls .prev-item'),
        nextItemBtn = document.querySelector('.controls .next-item');
let itemIndex=0;

        for(let u=0; u<totalPortofolioItem; u++) {

            portofolioItem[u].addEventListener('click', function (){

                itemIndex=u;
                lightBox.classList.add('show')


                changeItem();
            });

            
        }

    nextItemBtn.addEventListener('click', function(){

        if (itemIndex == totalPortofolioItem-1) {
            itemIndex=0;
        } else {
            itemIndex++;
        }

        changeItem()
    })
    prevItemBtn.addEventListener('click', function(){

        if (itemIndex == 0) {
            itemIndex= (totalPortofolioItem-1);
        } else {
            itemIndex--;
        }

        changeItem()
    })
        function changeItem() {

            imgSrc = portofolioItem[itemIndex].querySelector('.img img').getAttribute('src');

            lightBoxImg.src = imgSrc;

            lightBoxText.innerHTML = portofolioItem[itemIndex].querySelector('h5').innerHTML;
            lightBoxCounter.innerHTML = (itemIndex+1) + ' of ' + totalPortofolioItem;
        }

const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function (){

        lightBox.classList.remove('show')
    });

    document.onkeydown = function(e) {

        if (e.keyCode = '27') {
    
            lightBox.classList.remove('show')
        }
    }

    // Change Color Menu Toggle
    const themeMenu = document.querySelector('.change-color'),
        menuIcon = themeMenu.querySelector('.icon');

        menuIcon.addEventListener('click', function (){

            themeMenu.classList.toggle('move')
        });
            
    // Color Switch


    const linkColors = document.querySelectorAll('.ch-color'),
        totatLinkColors = linkColors.length;

    function setActiveStyle(color) {


        for (let i=0; i<totatLinkColors; i++) {

            if (color == linkColors[i].getAttribute('data-class')) {

                linkColors[i].removeAttribute('disabled')

            } else {
                linkColors[i].setAttribute('disabled','true')
            }

        }

    }

    // Dark Mode
    const modeForm= document.querySelector('.mode'),
        modeInput = modeForm.querySelectorAll('input');

        for (var i=0; i<modeInput.length; i++) {


            modeInput[i].addEventListener('click', function(){

                if (this.value == 'dark') {

                    document.body.classList.add('dark')

                } else {
                    document.body.classList.remove('dark')
                }
            });

        }

        // Toggle Navbar Button

        const navBtn = document.querySelector('.toggle-nav'),
            asideWidth = document.querySelector('.aside');

        navBtn.addEventListener('click', function() {

            asideWidth.classList.toggle('move');
        })

        const navLinks = document.querySelectorAll('.navbar-section li'),
            totalNavLinks = navLinks.length;

            for (var i=0; i< totalNavLinks; i++) {

                navLinks[i].addEventListener('click', function (){

                    asideWidth.classList.remove('move');
                });
            }


