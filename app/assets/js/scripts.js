/*!
 * qfStarter
 * frontend build boilerplate for QuickFrame platform
 * https://www.quickframe.com/
 * @author Branden Dane
 * @version 1.0.0
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  /*===
   RANDOM BACKGROUND VIDEO
  =====*/
  // var gifs = [
  //                 // "http://i.giphy.com/l0NwK1Xwv669wVd4Y.gif"
  //                 // "http://i.giphy.com/xTcnSMB8VXjTox23zW.gif"
  //                 "http://i.giphy.com/oSYflamt3IEjm.gif"
  //           ];
  //
  // 	var randoNum = Math.floor((Math.random() * gifs.length)),
  //       qfSvgEl = document.querySelector("#qfImg"),
  //       randoGif = qfSvgEl.setAttribute("xlink:href", gifs[randoNum]);


    /*===
      COUNTDOWN
    =====*/
    // var competitionsDeadline = 'Febuary 5 2016';
    // var requestsDeadline = 'Febuary 7 2016';
    //
    // function getTimeRemaining(endtime) {
    //   var t = Date.parse(endtime) - Date.parse(new Date()),
    //   seconds = Math.floor((t / 1000) % 60),
    //   minutes = Math.floor((t / 1000 / 60) % 60),
    //   hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    //   days = Math.floor(t / (1000 * 60 * 60 * 24));
    //     return {
    //       'total': t,
    //       'days': days,
    //       'hours': hours,
    //       'minutes': minutes,
    //       'seconds': seconds
    //     };
    //   }
    //
    //   function initializeClock(id, endtime) {
    //     var clock = document.getElementById(id),
    //     daysSpan = clock.querySelector('.days'),
    //     hoursSpan = clock.querySelector('.hours'),
    //     minutesSpan = clock.querySelector('.minutes'),
    //     secondsSpan = clock.querySelector('.seconds');
    //
    //   function updateClock() {
    //     var t = getTimeRemaining(endtime);
    //
    //       daysSpan.textContent = t.days;
    //       hoursSpan.textContent = ('0' + t.hours).slice(-2);
    //       minutesSpan.textContent = ('0' + t.minutes).slice(-2);
    //       secondsSpan.textContent = ('0' + t.seconds).slice(-2);
    //
    //         if (t.total <= 0) {
    //           clearInterval(timeinterval);
    //         }
    //   }
    //
    //   updateClock();
    //     var timeinterval = setInterval(updateClock, 1000);
    //   }
    //
    //   initializeClock('competitionsDemo', competitionsDeadline);
    //   initializeClock('requestsDemo', requestsDeadline);



/*====
  Countdown 2
===========*/
    $(function() {

      var Countdown = function(options) {
        $.extend(this, {
          endDate: new Date(2016, 4, 26, 15, 02, 20, 0)
        }, options);

        this.cache();
        this.bind();

        return this;
      };
      $.extend(Countdown.prototype, {
        cache: function() {
          this.date = new Date();
          this.secCounter = parseInt((this.endDate - this.date) / 1000);
        },
        bind: function() {
          this.timer();
        },
        timer: function() {
          var timeInSec = this.secCounter,
            $secondsCircle = $('.seconds').closest('.time-circle').find('.progress'),
            $minutesCircle = $('.minutes').closest('.time-circle').find('.progress'),
            $hoursCircle = $('.hours').closest('.time-circle').find('.progress'),
            $seconds = $('.seconds'),
            $minutes = $('.minutes'),
            $hours = $('.hours');

          function pad(number) {
            return (number < 10 ? '0' : '') + number
          }

          function setScale(type, degree) {
            type.css({
              '-webkit-transform': 'rotate(' + -degree * 6 + 'deg)',
              '-moz-transform': 'rotate(' + -degree * 6 + 'deg)',
              '-ms-transform': 'rotate(' + -degree * 6 + 'deg)',
              '-o-transform': 'rotate(' + -degree * 6 + 'deg)',
              'transform': 'rotate(' + -degree * 6 + 'deg)'
            });
          };

          var setInterv = setInterval(function() {

            (timeInSec > 0 ? timeInSec-- : timeInSec = 0);

            var getSeconds = timeInSec % 60,
              getMinutes = Math.floor(timeInSec / 60 % 60),
              getHours = Math.floor(timeInSec / 3600 % 24),
              getDays = Math.floor(timeInSec / 86400 % 7),
              getWeeks = Math.floor(timeInSec / 604800);

            $seconds.text(pad(getSeconds));
            $minutes.text(pad(getMinutes));
            $hours.text(pad(getHours));

            setScale($secondsCircle, getSeconds);
            setScale($minutesCircle, getMinutes);
            setScale($hoursCircle, getHours);

            if (timeInSec <= 0) {
              clearInterval(setInterv);
              console.log('End of counting');
            }

          }, 1000);
        }
      });
      window.Countdown = Countdown;
    });

    $(function() {
      var app = new Countdown({
        //properties
        //endDate: new Date(year, month, day, hour, minute, second, miliseco)
      });
    });

})(jQuery, window, document);


/*===========
MENU MODULE
==============*/
var qfMenu = (function(){

  var icon = $(".menu-icon"),
      ring = $(".ring"),
      navbar = $(".navbar");

  $(".container").click(function() {

    if (icon.hasClass("active")) {
      icon.removeClass("active");
      runPulse();
    } else {
      icon.addClass("active");
      runPulse();
    }

  });

  function runPulse() {
    ring.toggleClass("run");
    navbar.toggleClass("showNav");
  }

}());
