(function ($, window, document, undefined) {

  'use strict';

  var gifs = [
                  "http://i.giphy.com/mI3J3e2v97T8Y.gif",
                  "http://i.giphy.com/yniHLH1gAigX6.gif",
                  "http://i.giphy.com/dRGWII2nDN1D2.gif",
                  "http://i.giphy.com/13ln9K5TWkNTLa.gif",
                  "http://i.giphy.com/d2ZeRHNZFn8EQ2EE.gif",
                  "http://i.giphy.com/28JsMYKbeuBGM.gif"
            ];

  	var randoNum = Math.floor((Math.random() * gifs.length)),
        qfSvgEl = document.querySelector("#qfImg"),
        randoGif = qfSvgEl.setAttribute("xlink:href", gifs[randoNum]);
  

  /*
  * For jQuery Uncomment Below
  */

  // $(function () {
  //       alert("jQuery is running");
  // });

})(jQuery, window, document);
