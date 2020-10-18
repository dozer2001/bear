$(document).ready(function () {

    $('body').on('click', '.full-slider__link', function (e) {
        e.preventDefault();
        $(this).closest('.section').find('.full-slider').slick('slickGoTo', $(this).index());
    })

    // $(".slider-card").not('.slick-initialized').slick({
    //     slidesToShow: 1,
    //     arrows: true,
    //     fade: true,
    //     prevArrow: "<img src='images/arrow-right.svg' class='prev' alt='1'>",
    //     nextArrow: "<img src='images/arrow-right.svg' class='next' alt='2'>",
    // });

    if ($('.full-slider').length) {
        $('.full-slider').not('.slick-initialized').not('.slick-initialized').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            customPaging: function (slider, i) {
                i = parseInt(i);
                i++;
                if (i < 10) {
                    i = '0' + i;
                }
                return '<button>' + i + '</button>';
            }
        });
    }

    $(".address-tile").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 800);
    });

    // $('input[type="range"]').on("input change", function (e) {
    //     e.preventDefault();
    //     var slideno = $(this).val();
    //     $('.slider').slick('slickGoTo', slideno - 1);
    // });

    if ($('#sticker').length) {
        $("#sticker").sticky({ topSpacing: 0 });
    }
    var sliderEl;
    if ($('.js-range-slider').length) {
        var max = $(".js-range-slider").data('max');

        $(".js-range-slider").ionRangeSlider({
            grid: false,
            min: 1,
            max: max,
            from: 1,
        });
        sliderEl = $(".js-range-slider").data("ionRangeSlider");
    }
    $('#slick-range').on('init reInit afterChange', function (event, slick) {
        console.log(slick.currentSlide);
        var amount = slick.currentSlide;
        //$('#range').attr('data-max', amount);
        sliderEl.update({ from: amount + 1 })
    })

    $('#slick-range').on('change', function (e, slick, currentSlide) {
        $('#range').val(currentSlide + 1);
    })

    $('#range').on('input change', function () {
        $('#slick-range').slick('slickGoTo', this.value - 1);
    });

    var $slider = $(".slider").not('.slick-initialized').slick({
        //autoplay:true,
        autoplaySpeed: 10000,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'ease-in',
        infinite: true,
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    var spinner = $('.ymap-container').children('.loader');
    var check_if_load = false;
    var myMapTemp, myPlacemarkTemp;

    if ($('#map').length) {
        function init() {
            var myMap = new ymaps.Map("map", {
                center: [45.02068507460854, 39.024307],
                zoom: 16,
                controls: ['zoomControl']
            }),

                myGeoObject = new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: [45.02068507460854, 39.024307],
                        iconCaption: 'ул.Ставропольская 131'
                    }
                });

            myMap.geoObjects
                .add(myGeoObject)
                .add(new ymaps.Placemark([45.02068507460854, 39.024307], {
                    balloonContent: 'Пивной маркет «Best»',
                    iconCaption: 'ул.Ставропольская 131'
                }, {}))
                .add(new ymaps.Placemark([45.01669657457268, 39.03971349999996], {
                    balloonContent: 'Пивной маркет «23 регион»',
                    iconCaption: 'ул.Ставропольская 248'
                }))
                .add(new ymaps.Placemark([45.050806074583726, 38.977954], {
                    balloonContent: 'Пивной маркет «Тихорецкое пиво»',
                    iconCaption: 'ул.Одесская 34/2'
                }))
                .add(new ymaps.Placemark([45.850210574502135, 40.127132999999986], {
                    balloonContent: 'Пивной маркет «Казмер»',
                    iconCaption: 'ул.Меньшикова 57'
                }))
                .add(new ymaps.Placemark([45.8481712204491, 40.132835713088895], {
                    balloonContent: 'Пивной маркет «Станция Тихорецкая»',
                    iconCaption: 'ул.Ставропольская 131'
                }))
                .add(new ymaps.Placemark([45.850210574502135, 40.127132999999986], {
                    balloonContent: 'Пивной маркет «Старт»',
                    iconCaption: 'ул.Подвойного,117'
                }))
                .add(new ymaps.Placemark([45.41422857456925, 37.96170799999999], {
                    balloonContent: 'Пивной маркет «У Казмера»',
                    iconCaption: 'ул.Чапаева 2/10'
                }))
                .add(new ymaps.Placemark([45.859086574525016, 40.11374799999993], {

                    balloonContent: 'Пивной маркет «Бригантина»',
                    iconCaption: 'ул.Меньшикова 119'
                }))

                .add(new ymaps.Placemark([45.088039074577146, 39.002540999999965], {
                    balloonContent: 'Пивной маркет «Тихорецкая пивоварня»',
                    iconCaption: 'ул.Московская 144/1'
                }));

            $('.trigger-map').click(function (e) {
                e.preventDefault();
                var coord = $(this).data('coord');
                myMap.setCenter($(this).data('coord'));
            })

        }
    }

    if ($('#map-contacts').length) {

        function init() {
            var myMap = new ymaps.Map("map-contacts", {
                center: [45.85086957450385, 40.125129499999964],
                zoom: 16,
                controls: ['zoomControl']
            }),

                myGeoObject = new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: [45.85086957450385, 40.125129499999964],
                    }
                });

            myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [44.85086957450385, 40.125129499999964],
                }
            });

            myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [43.75086957450385, 40.125129499999964],
                }
            });

            myMap.geoObjects
                .add(myGeoObject)
                .add(new ymaps.Placemark([45.85086957450385, 40.125129499999964], {
                    balloonContent: 'Отдел продаж',
                    iconCaption: 'ул. Калинина, 27'
                }, {

                }))
                .add(myGeoObject)
                .add(new ymaps.Placemark([44.85086957450385, 40.125129499999964], {
                    balloonContent: 'Отдел продаж',
                    iconCaption: 'ул. Калинина, 27'
                }, {

                }))
                .add(myGeoObject)
                .add(new ymaps.Placemark([43.75086957450385, 40.125129499999964], {
                    balloonContent: 'Отдел продаж',
                    iconCaption: 'ул. Калинина, 27'
                }, {

                }))

            $('.trigger-map').click(function (e) {
                e.preventDefault();
                var coord = $(this).data('coord');
                myMap.setCenter($(this).data('coord'));
            })
        }
    }

    function waitForTilesLoad(layer) {
        return new ymaps.vow.Promise(function (resolve, reject) {
            var tc = getTileContainer(layer), readyAll = true;
            tc.tiles.each(function (tile, number) {
                if (!tile.isReady()) {
                    readyAll = false;
                }
            });
            if (readyAll) {
                resolve();
            } else {
                tc.events.once("ready", function () {
                    resolve();
                });
            }
        });
    }

    function getTileContainer(layer) {
        for (var k in layer) {
            if (layer.hasOwnProperty(k)) {
                if (
                    layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                    || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
                ) {
                    return layer[k];
                }
            }
        }
        return null;
    }

    function loadScript(url, callback) {
        var script = document.createElement("script");

        if (script.readyState) {  // IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  // Другие браузеры
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    var ymap = function () {
        $('.ymap-container').mouseenter(function () {
            if (!check_if_load) {
                check_if_load = true;

                spinner.addClass('is-active');

                loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
                    ymaps.load(init);
                });
            }
        }
        );
    }

    $(function () {
        ymap();
    });

    $('.tab-widget__link').click(function (e) {
        e.preventDefault();

        var tabWidget = $(this).closest('.tab-widget');
        tabWidget.find('.tab-widget__link').removeClass('active');
        $(this).addClass('active');
        tabWidget.find('.tab').removeClass('active');
        if ($(this).attr('href') != "#") {
            tabWidget.find('.tab').eq($(this).attr('href')).addClass('active');
        } else {

            tabWidget.find('.tab').eq($(this).index()).addClass('active');
        }
    })
    if ($('.select').length) {
        $(".select").select2();
    }

    if ($('.catalog-height').length) {
        $('.catalog-height').matchHeight();
    }

    if ($('.catalog-min').length) {
        $('.catalog-min').matchHeight();
    }



    if ($('.select-widget_js').length) {
        $('.select-widget_js').select2({
            width: '100%',
            minimumResultsForSearch: -1

        });
    }
    $('.career-slider').not('.slick-initialized').slick({
        prevArrow: "<button class='prev'></button>",
        nextArrow: ".next-slider",
    })
    $('.career-slider').on('afterChange', function (event, slick, currentSlide) {
        $('.career-slider_active').text(currentSlide + 1);
    });

    $('.more-link_close').click(function () {
        $.magnificPopup.close();
    });

    $('.header-hamburder-js').click(function () {
        $('.window').toggleClass('active');
    });

    $('.mobile-btn-js').click(function () {

        $(this).toggleClass('active');
        $('.mobile-header__header').toggleClass('active');
        $('.mobile-header__bottom').stop().slideToggle();
    })

    $('.mobile-header__arrow').click(function () {
        $(this).closest('li').find('ul').stop().slideToggle();
        $(this).toggleClass('active');
    })

    $('.tehnology-slider').not('.slick-initialized').slick({
        prevArrow: ".prev-slider",
        nextArrow: ".next-slider",
    })
    $('.tehnology-slider').on('afterChange', function (event, slick, currentSlide) {
        $('.tehnology-slider_active').text(currentSlide + 1);
    });

    $('.window-close').click(function () {
        $('.window').removeClass('active');
    });
    $('.toggler-trigger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).closest('.toggler').find('.toggler__content').stop().slideToggle();
    })
    if ($('.wow').length) {
        new WOW().init();
    }

    // function closePopup() {
    //     $.magnificPopup.close();
    // }

    $('.more-link_close').click(function () {
        $.magnificPopup.close();
    });

    if ($('#adulthood-popup').length) {
        $.magnificPopup.open({
            items: {
                src: '#adulthood-popup',
                type: 'inline',
            },
            fixedContentPos: true,
            modal: true,
            fixedBgPos: true
        });
    }

    $('#btn-warning').click(function () {
        $('.mfp-close').trigger('click');
    });

})


function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
r(function () {
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function (node, classname) {
            var a = [];
            var re = new RegExp('(^| )' + classname + '( |$)');
            var els = node.getElementsByTagName("*");
            for (var i = 0, j = els.length; i < j; i++)
                if (re.test(els[i].className)) a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body, "youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i = 0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(images/you.jpg)';
        videos[i].style.backgroundPosition = 'center';
        videos[i].style.backgroundSize = 'cover';

        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class", "play");
        videos[i].appendChild(play);

        videos[i].onclick = function () {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
            iframe.setAttribute("src", iframe_url);
            iframe.setAttribute("frameborder", '0');

            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width = this.style.width;

            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
r(function () {
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function (node, classname) {
            var a = [];
            var re = new RegExp('(^| )' + classname + '( |$)');
            var els = node.getElementsByTagName("*");
            for (var i = 0, j = els.length; i < j; i++)
                if (re.test(els[i].className)) a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body, "youtubes");
    } else {
        var videos = document.getElementsByClassName("youtubes");
    }

    var nb_videos = videos.length;
    for (var i = 0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(images/voda-bg.jpg)';
        videos[i].style.backgroundPosition = 'center';
        videos[i].style.backgroundSize = 'cover';

        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class", "play");
        videos[i].appendChild(play);

        videos[i].onclick = function () {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
            iframe.setAttribute("src", iframe_url);
            iframe.setAttribute("frameborder", '0');

            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width = this.style.width;

            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});


// window.onload = function () {
//     if (localStorage.getItem('join') !== null) {
//         var nam = localStorage.getItem('join');
//     }
//     document.getElementById('more-close').onclick(function () {
//         console.log('work');
//         localStorage.setItem('join', 'yes')
//     });
// }
