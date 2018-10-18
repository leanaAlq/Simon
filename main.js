$(document).ready(function() {
  var flashArray = winSenario(4);
  $(".announce").hide();
  console.log("flash array :" + flashArray);
  $(".start").one("click", function() {
    setTimeout(flashIt(flashArray, 300), 30000);
    userClicks(4, 1);
  });
  function userClicks(n, level) {
    var userArray = [];
    $(".corner").click(function() {
      animateIt($(this));
      userArray.push(parseInt($(this).attr("id")));
      console.log("user Array:" + userArray);
      console.log(userArray);
      if (userArray.length === n) {
        $(".corner").off("click");

        checkWins(userArray, flashArray, level);
      }
    });
  }

  function animateIt(element) {
    $(element).animate({ opacity: 3 }, function() {
      $(element).animate({ opacity: 0.2 });
    });
  }

  function flashIt(flashArray, speed) {
    $("#" + flashArray[0]).animate({ opacity: 3 }, speed, function() {
      $("#" + flashArray[0]).animate({ opacity: 0.2 }, function() {
        $("#" + flashArray[1]).animate({ opacity: 3 }, speed, function() {
          $("#" + flashArray[1]).animate({ opacity: 0.2 }, function() {
            $("#" + flashArray[2]).animate({ opacity: 3 }, speed, function() {
              $("#" + flashArray[2]).animate({ opacity: 0.2 }, function() {
                $("#" + flashArray[3]).animate(
                  { opacity: 1 },
                  speed,
                  function() {
                    $("#" + flashArray[3]).animate({
                      opacity: 0.2
                    });
                  }
                );
              });
            });
          });
        });
      });
    });
  }
  function flashItLevelthree(flashArray, speed) {
    $("#" + flashArray[0]).animate({ opacity: 3 }, speed, function() {
      $("#" + flashArray[0]).animate({ opacity: 0.2 }, function() {
        $("#" + flashArray[1]).animate({ opacity: 3 }, speed, function() {
          $("#" + flashArray[1]).animate({ opacity: 0.2 }, function() {
            $("#" + flashArray[2]).animate({ opacity: 3 }, speed, function() {
              $("#" + flashArray[2]).animate({ opacity: 0.2 }, function() {
                $("#" + flashArray[3]).animate(
                  { opacity: 1 },
                  speed,
                  function() {
                    $("#" + flashArray[3]).animate(
                      { opacity: 0.2 },
                      function() {
                        $("#" + flashArray[4]).animate(
                          { opacity: 3 },
                          speed,
                          function() {
                            $("#" + flashArray[4]).animate(
                              { opacity: 0.2 },
                              function() {
                                $("#" + flashArray[5]).animate(
                                  { opacity: 3 },
                                  speed,
                                  function() {
                                    $("#" + flashArray[5]).animate({
                                      opacity: 0.2
                                    });
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              });
            });
          });
        });
      });
    });
  }
  function checkWins(array1, array2, level) {
    var string1 = "",
      string2 = "",
      result;

    for (var i = 0; i < array1.length; i++) {
      string1 += array1[i];
      string2 += array2[i];
    }
    console.log("string 1 : " + string1);
    console.log("string2 : " + string2);
    if (string1 === string2) {
      result = 1;
      console.log("checkwins" + result);
      if (level === 1) {
        changeButton(result, array1.length);
      }
      if (level === 2) {
        changeButtonLevel2(result, array1.length);
      }
      if (level === 3) {
        changeButtonLevel3(result, array1.length);
      }
      if (level === 4) {
        changeButtonLevel4(result, array1.length);
      }
    } else {
      result = 0;
      $(".announce h2").text("Try Again!");
      $(".announce").show();
      $(".announce").css("background-color", "#ff0038");
      $(".announce").animate({
        left: "380px",
        top: "200px",
        width: "400px",
        height: "100px",
        opacity: 1
      });
      $(".again").click(function() {
        location.reload();
      });
    }
  }

  function winSenario(n) {
    var myARRAY = [];
    myARRAY.length = n;
    for (i = 0; i < n; i++) {
      myARRAY[i] = Math.floor(Math.random() * 4);
    }
    return myARRAY;
  }
  function changeButton(score, n) {
    if (score === 1 && n === 4) {
      $(".start").text("Level 2!");
      $("img").hide();
      $("img").attr("src", "brain1.png");
      $("img").show("slow");

      $(".start").one("click", function() {
        flashArray = winSenario(4);
        console.log("flash array 2: " + flashArray);
        setTimeout(flashIt(flashArray, 10), 30000);
        userClicks(4, 2);
      });
      // $("body").css("background-image", "url(brain1.png)");
    }
  }
  function changeButtonLevel2(score, n) {
    if (score === 1 && n === 4) {
      $(".start").text("Level 3!");
      $("img").hide();
      $("img").attr("src", "brain2.png");
      $("img").show("slow");
      $(".start").one("click", function() {
        flashArray = winSenario(6);
        console.log("flash array 2: " + flashArray);
        setTimeout(flashItLevelthree(flashArray, 600), 30000);
        userClicks(6, 3);
      });
      // $("body").css("background-image", "url(brain1.png)");
    }
  }
  function changeButtonLevel3(score, n) {
    if (score === 1 && n === 6) {
      $(".start").text("Level 4!");
      $("img").hide();
      $("img").attr("src", "brain3.png");
      $("img").show("slow");
      $(".start").one("click", function() {
        flashArray = winSenario(6);
        console.log("flash array 2: " + flashArray);
        setTimeout(flashItLevelthree(flashArray, 300), 30000);
        userClicks(6, 4);
      });
    }
  }
  function changeButtonLevel4(score, n) {
    if (score === 1 && n === 6) {
      $(".start").text("Level 4!");
      $("img").hide();
      $("img").attr("src", "brain4.png");
      $("img").show("slow");
      $("img").addClass("animated rotateOut");
      $(".announce h2").text("Brilliant!");
      $(".announce").css("background-color", "#00cffa");
      $(".announce").show();
      $(".announce").animate({
        left: "380px",
        top: "200px",
        width: "400px",
        height: "100px",
        opacity: 1
      });
      $(".again").click(function() {
        location.reload();
      });
    }
  }
});
