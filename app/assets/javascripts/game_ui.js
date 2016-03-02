$(document).on("submit", "#player-names form", function(e) {
  e.preventDefault();
  var player1Name = $("input[name='player_1']").val();
  var player2Name = $("input[name='player_2']").val();
  player1 = new Player(player1Name);
  player2 = new Player(player2Name);
  game = new Game([player1, player2]);
  $("#player-names").fadeOut("slow", function() {
    $(this).hide();
    $("#player1-name").html(player1.name);
    $("#marker-choice").fadeIn();
  });
});

$(document).on("submit", "#com-player-names form", function(e) {
  e.preventDefault();
  var player1Name = $("input[name='player_1']").val();
  player1 = new Player(player1Name);
  player2 = new Player("Computer");
  game = new Game([player1, player2]);
  $("#com-player-names").fadeOut("slow", function() {
    $(this).hide();
    $("#player1-name").html(player1.name);
    $("#marker-choice").fadeIn();
  });
});

$(document).on("click", ".marker-choice", function(e) {
  e.preventDefault();
  if($(this).attr("id") === "x") {
    player1.setMarker("X");
  }
  else {
    player1.setMarker("O");
  }
  $("#marker-choice").fadeOut("slow", function() {
    $("#player-1").html("<h2>" + player1.name + "</h2>");
    $("#player-2").html("<h2>" + player2.name + "</h2>");
    $("#first-player-choice").fadeIn();
  });
});

$(document).on("click", ".first-player-choice", function() {
  console.log($(this).attr("id"));
  if($(this).attr("id") === "player-1") {
    game.setFirstPlayer(player1);
  }
  else {
    game.setFirstPlayer(player2);
  }
  console.log(game.firstPlayer);
});

$(document).on("click", "#computer-demo", function(e) {
  e.preventDefault();
  $(".middle-middle > .cell").html("<div class='valign'><h1 class='center-align'>O</h1></valign>");
  $(".middle-middle > .cell").addClass("played");
  $(".middle-middle > .cell").removeClass("empty");
  $("#moves").prepend("<div class='player-move'>Computer played at spot 2-2</div>");
});

$(document).on("click", "#human-demo", function(e) {
  e.preventDefault();
  $(this).append("<p><strong>Hover over a space and click to place your marker.</strong></p>");
  $(".cell").hover(function() {
    if($(this).hasClass("empty")) {
      $(this).html("<div class='valign'><h1 class='center-align'>X</h1></valign>");
      $(this).css("opacity", ".5");
    }
  }, function() {
    if($(this).hasClass("empty")) {
      $(this).html("");
      $(this).css("opacity", "1");
    }
  });
  $(".cell").on("click", function() {
    $(this).html("<div class='valign'><h1 class='center-align'>X</h1></valign>");
    $(this).css("opacity", "1");
    $(this).removeClass("empty");
    $(this).addClass("played");
    $("#moves").prepend("<div class='player-move'>Player played at spot (spot)</div>");
  });
});
