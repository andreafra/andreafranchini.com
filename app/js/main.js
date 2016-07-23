(function() {
  /////////////////
  // SVG Drawing //
  /////////////////
  var cw = document.getElementsByClassName("card-container")[0].offsetWidth;
  var p = 20;
  var pts_0 = [cw/2,cw/2, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2];
  var pts_1 = [cw/2,p, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2];
  var pts_2 = [cw/2,p, p,cw*1/4, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2];
  var pts_3 = [cw/2,p, p,cw*1/4, p,cw*3/4, cw/2,cw/2, cw/2,cw/2, cw/2,cw/2];
  var pts_4 = [cw/2,p, p,cw*1/4, p,cw*3/4, cw/2,cw-p, cw/2,cw/2, cw/2,cw/2];
  var pts_5 = [cw/2,p, p,cw*1/4, p,cw*3/4, cw/2,cw-p, cw-p,cw*3/4, cw/2,cw/2];
  var pts_6 = [cw/2,p, p,cw*1/4, p,cw*3/4, cw/2,cw-p, cw-p,cw*3/4, cw-p,cw*1/4];
  var pts_7 = [p,p, p,cw/2, p,cw, cw/2,cw-p, cw-p,cw, cw-p,0];

  var colors = ["#999999", "#A75497", "#FF5757", "#E57C49", "#FFCD25", "#97E5C8", "#4C8CE5"]
  var colorsLight = ["#CCCCCC", "#BB77AD", "#FFBDBD", "#F2BCA1", "#FFE48A", "#D6F5EA", "#A6C6F2"]

  function shuffleColors(array1, array2) {
    var currentIndex = array1.length, tempValue1, tempValue2, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      tempValue1 = array1[currentIndex];
      tempValue2 = array2[currentIndex];
      array1[currentIndex] = array1[randomIndex];
      array2[currentIndex] = array2[randomIndex];
      array1[randomIndex] = tempValue1;
      array2[randomIndex] = tempValue2;
    }
  }

  shuffleColors(colors, colorsLight);

  var paper_top = Snap("#bg-top");
  var paper_back = Snap("#bg-back");

  var card = paper_top.polygon().attr({
    points: pts_0,
    fill: "#4C8CE5"
  });

  // Animation
  card.animate({
    points: pts_1,
    fill: colors[0]
  }, 333, mina.elastic, function() {
    card.animate({
      points: pts_2,
      fill: colors[1]
    }, 333, mina.elastic, function() {
      card.animate({
        points: pts_3,
        fill: colors[2]
      }, 333, mina.elastic, function() {
        card.animate({
          points: pts_4,
          fill: colors[3]
        }, 333, mina.elastic, function() {
          card.animate({
            points: pts_5,
            fill: colors[4]
          }, 333, mina.elastic, function() {
            card.animate({
              points: pts_6,
              fill: colors[5]
            }, 333, mina.elastic, function() {
              card.animate({
                points: pts_7,
                fill: colors[6]
              }, 333, mina.elastic, function() {
                paper_back.polygon().attr({
                  points: pts_7,
                  fill: colorsLight[6]
                });
                rotateCard();
              });
            });
          });
        });
      });
    });
  });

  ////////////////////////
  // Tilt div animation //
  ////////////////////////
  function rotateCard() {
    var wrapper = document.querySelector(".wrapper");
    var card_top = document.querySelector("#bg-top");
    var card_back = document.querySelector("#bg-back");
    var card_content = document.querySelector(".card-content");
    var centerX = wrapper.clientWidth / 2;
    var centerY = wrapper.clientHeight / 2;
    var maxAngle = 15;

    document.addEventListener("mousemove", function(e) {
      var x = detectPosX(e.clientX), y = detectPosY(e.clientY);
      updatePos(x, y);
    }, false);

    document.addEventListener("touchstart", function(e) {
      var x = detectPosX(e.touches[0].clientX), y = detectPosY(e.touches[0].clientY);
      updatePos(x, y);
    }, false);

    document.addEventListener("touchmove", function(e) {
      var x = detectPosX(e.touches[0].clientX), y = detectPosY(e.touches[0].clientY);
      updatePos(x, y);
    }, false);

    document.addEventListener("mouseleave", function(e) {
      resetPos();
    }, false);

    function detectPosX(xPos) {
      return maxAngle*(-1+(xPos/centerX))
    }
    function detectPosY(yPos) {
      return maxAngle*(1-(yPos/centerY))
    }

    function updatePos(x, y) {
      var m = 0.5;
      card_top.style.transform = "rotateX("+y+"deg) rotateY("+x+"deg) translateZ(-100px)";
      card_back.style.transform = "rotateX("+y*m+"deg) rotateY("+x*m+"deg) scale(1.1) translateZ(-400px)";
      card_content.style.transform = "rotateX("+y+"deg) rotateY("+x+"deg)";
    }

    function resetPos() {
      card_top.style.transform = "rotateX(0deg) rotateY(0deg)";
      card_back.style.transform = "rotateX(0deg) rotateY(0deg) scale(1.1)";
      card_content.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    document.addEventListener("deviceorientation", function(event) {
      console.log("Magnetometer: "
        + event.alpha + ", "
        + event.beta + ", "
        + event.gamma
      );
    }, false);

    resetPos();
  }

})();