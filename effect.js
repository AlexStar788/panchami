$(window).load(function () {

    $('.loading').fadeOut('fast');

    $('.container').fadeIn('fast');

});


$(document).ready(function () {

    var vw = $(window).width() / 2;


    /* =========================================
       WINDOW RESIZE
    ========================================= */

    $(window).resize(function () {

        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

        $('#b11').animate({
            top: 240,
            left: vw - 350
        }, 500);

        $('#b22').animate({
            top: 240,
            left: vw - 250
        }, 500);

        $('#b33').animate({
            top: 240,
            left: vw - 150
        }, 500);

        $('#b44').animate({
            top: 240,
            left: vw - 50
        }, 500);

        $('#b55').animate({
            top: 240,
            left: vw + 50
        }, 500);

        $('#b66').animate({
            top: 240,
            left: vw + 150
        }, 500);

        $('#b77').animate({
            top: 240,
            left: vw + 250
        }, 500);

        /* I BALLOON */

        $('#b88').animate({
            top: 240,
            left: vw + 350
        }, 500);

    });


    /* =========================================
       TURN ON LIGHTS
    ========================================= */

    $('#turn_on').click(function () {

        $('#bulb_yellow')
            .addClass('bulb-glow-yellow');

        $('#bulb_red')
            .addClass('bulb-glow-red');

        $('#bulb_blue')
            .addClass('bulb-glow-blue');

        $('#bulb_green')
            .addClass('bulb-glow-green');

        $('#bulb_pink')
            .addClass('bulb-glow-pink');

        $('#bulb_orange')
            .addClass('bulb-glow-orange');

        $('body').addClass('peach');

        $(this)
            .fadeOut('slow')
            .delay(5000)
            .promise()
            .done(function () {

                $('#play').fadeIn('slow');

            });

    });


    /* =========================================
       PLAY MUSIC
    ========================================= */

    $('#play').click(function () {

        var audio = $('.song')[0];

        if (audio) {
            audio.play();
        }

        $('#bulb_yellow')
            .addClass('bulb-glow-yellow-after');

        $('#bulb_red')
            .addClass('bulb-glow-red-after');

        $('#bulb_blue')
            .addClass('bulb-glow-blue-after');

        $('#bulb_green')
            .addClass('bulb-glow-green-after');

        $('#bulb_pink')
            .addClass('bulb-glow-pink-after');

        $('#bulb_orange')
            .addClass('bulb-glow-orange-after');

        $('body').css(
            'background-color',
            '#FFF'
        );

        $('body').addClass('peach-after');

        $(this)
            .fadeOut('slow')
            .delay(6000)
            .promise()
            .done(function () {

                $('#bannar_coming')
                    .fadeIn('slow');

            });

    });


    /* =========================================
       DECORATE BANNER
    ========================================= */

    $('#bannar_coming').click(function () {

        $('.bannar').addClass('bannar-come');

        $(this)
            .fadeOut('slow')
            .delay(6000)
            .promise()
            .done(function () {

                $('#balloons_flying')
                    .fadeIn('slow');

            });

    });


    /* =========================================
       BALLOON 1
    ========================================= */

    function loopOne() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b1').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopOne();

        });

    }


    /* =========================================
       BALLOON 2
    ========================================= */

    function loopTwo() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b2').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopTwo();

        });

    }


    /* =========================================
       BALLOON 3
    ========================================= */

    function loopThree() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b3').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopThree();

        });

    }


    /* =========================================
       BALLOON 4
    ========================================= */

    function loopFour() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b4').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopFour();

        });

    }


    /* =========================================
       BALLOON 5
    ========================================= */

    function loopFive() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b5').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopFive();

        });

    }


    /* =========================================
       BALLOON 6
    ========================================= */

    function loopSix() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b6').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopSix();

        });

    }


    /* =========================================
       BALLOON 7
    ========================================= */

    function loopSeven() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b7').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopSeven();

        });

    }


    /* =========================================
       BALLOON 8 - I
    ========================================= */

    function loopEight() {

        var randleft =
            1000 * Math.random();

        var randtop =
            500 * Math.random();

        $('#b8').animate({

            left: randleft,
            bottom: randtop

        }, 10000, function () {

            loopEight();

        });

    }


    /* =========================================
       FLY BALLOONS
    ========================================= */

    $('#balloons_flying').click(function () {

        $('.balloon-border').animate({

            top: -500

        }, 8000);


        /*
         * Balloon rotation
         */

        $('#b1,#b4,#b5,#b7,#b8')
            .addClass(
                'balloons-rotate-behaviour-one'
            );


        $('#b2,#b3,#b6')
            .addClass(
                'balloons-rotate-behaviour-two'
            );


        /*
         * Start ALL 8 balloons
         */

        loopOne();

        loopTwo();

        loopThree();

        loopFour();

        loopFive();

        loopSix();

        loopSeven();

        loopEight();


        $(this)
            .fadeOut('slow')
            .delay(5000)
            .promise()
            .done(function () {

                $('#cake_fadein')
                    .fadeIn('slow');

            });

    });


    /* =========================================
       SHOW CAKE
    ========================================= */

    $('#cake_fadein').click(function () {

        $('.cake').fadeIn('slow');

        $(this)
            .fadeOut('slow')
            .delay(3000)
            .promise()
            .done(function () {

                $('#light_candle')
                    .fadeIn('slow');

            });

    });


    /* =========================================
       LIGHT CANDLE
    ========================================= */

    $('#light_candle').click(function () {

        $('.fuego').fadeIn('slow');

        $(this)
            .fadeOut('slow')
            .promise()
            .done(function () {

                $('#wish_message')
                    .fadeIn('slow');

            });

    });


    /* =========================================
       BIRTHDAY WISH
    ========================================= */

    $('#wish_message').click(function () {

        vw = $(window).width() / 2;


        /*
         * Stop all 8 balloons
         */

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8')
            .stop();


        /*
         * Rename balloons
         */

        $('#b1').attr('id', 'b11');

        $('#b2').attr('id', 'b22');

        $('#b3').attr('id', 'b33');

        $('#b4').attr('id', 'b44');

        $('#b5').attr('id', 'b55');

        $('#b6').attr('id', 'b66');

        $('#b7').attr('id', 'b77');

        $('#b8').attr('id', 'b88');


        /*
         * PANCHAMI
         *
         * P A N C H A M I
         */


        $('#b11').animate({

            top: 240,
            left: vw - 350

        }, 700);


        $('#b22').animate({

            top: 240,
            left: vw - 250

        }, 700);


        $('#b33').animate({

            top: 240,
            left: vw - 150

        }, 700);


        $('#b44').animate({

            top: 240,
            left: vw - 50

        }, 700);


        $('#b55').animate({

            top: 240,
            left: vw + 50

        }, 700);


        $('#b66').animate({

            top: 240,
            left: vw + 150

        }, 700);


        $('#b77').animate({

            top: 240,
            left: vw + 250

        }, 700);


        /*
         * IMPORTANT:
         * 8th balloon = I
         */

        $('#b88').animate({

            top: 240,
            left: vw + 350

        }, 700);


        /*
         * Show balloons
         */

        $('.balloons')
            .css('opacity', '0.9');

        $('.balloons h2')
            .fadeIn(3000);


        $(this)
            .fadeOut('slow')
            .delay(3000)
            .promise()
            .done(function () {

                $('#story')
                    .fadeIn('slow');

            });

    });


    /* =========================================
       STORY / MESSAGE
    ========================================= */

    $('#story').click(function () {

        $(this).fadeOut('slow');


        $('.cake')
            .fadeOut('fast')
            .promise()
            .done(function () {

                $('.message')
                    .fadeIn('slow');

            });


        var totalMessages =
            $('.message p').length;


        function msgLoop(i) {

            if (i >= totalMessages) {
                return;
            }


            $('.message p:nth-child(' + i + ')')

                .fadeOut('slow')

                .delay(800)

                .promise()

                .done(function () {

                    i = i + 1;


                    $('.message p:nth-child(' + i + ')')

                        .fadeIn('slow')

                        .delay(1000);


                    if (i < totalMessages) {

                        msgLoop(i);

                    }

                });

        }


        /*
         * Start from first message
         */

        $('.message p').hide();

        $('.message p:first-child').show();

        msgLoop(1);

    });

});