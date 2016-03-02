// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require jquery_ujs
//= require_tree .

function hideFields(fields) {
  fields.forEach(function(field) {
    $(field).hide();
  });
}

$(document).ready(function() {
  hideFields(["#marker-choice", "#first-player-choice"]);
  $(".cell").height($(".cell").width());
  $('.tooltipped').tooltip({delay: 50});
});

$(window).resize(function() {
  $(".cell").height($(".cell").width());
});


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
    player1.setmarker("O");
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

$(document).on("mouseenter", ".cell", function() {
  $(this).html("<div class='valign'><h1 class='center-align'>X</h1></valign>");
  $(this).css("opacity", ".5");
});

$(document).on("click", ".cell", function() {
  $(this).html("<div class='valign'><h1 class='center-align'>X</h1></valign>");
  $(this).css("opacity", "1");
});

$(document).on("mouseleave", ".cell", function() {
  $(this).html("");
});
