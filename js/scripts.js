$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle"); //jquery starts the cycle again
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
  //const reserveButton = document.getElementById("reserveButton");
  //reserveButton.addEventListener("click", () => {
  $("#reserveButton").click(function () {
    $("#reserveModal").modal();
  });

  //const loginButton = document.getElementById("loginButton");
  // loginButton.addEventListener("click", () => {
  $("#loginButton ").click(function () {
    $("#loginModal").modal();
  });
});
