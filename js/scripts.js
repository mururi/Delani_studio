$(document).ready(function() {
  //toggle "what we do" section descriptions
  $(".design").click(function() {
    $("#design-image").toggle();
    $("#design-description").toggle();
  });

  $(".dev").click(function() {
    $("#dev-image").toggle();
    $("#dev-description").toggle();
  });

  $(".prod").click(function() {
    $("#prod-image").toggle();
    $("#prod-description").toggle();
  });

  //add hover effect on portfolio items
  // $(".portfolio-item").hover(function() {
  //   $(".portfolio-image").addClass(".portfolio-image--opacity");
  // }, function() {
  //   $(".portfolio-image").removeClass(".portfolio-image--opacity");
  // });
  $(".portfolio-item-1").hover(function() {
    $(".text-overlay-1").removeClass("hover-hidden");
    $(".text-overlay-1").addClass("hover");
    $(".portfolio-image-1").addClass("portfolio-image--opacity");
  }, function() {
    $(".text-overlay-1").removeClass("hover");
    $(".text-overlay-1").addClass("hover-hidden");
    $(".portfolio-image-1").removeClass("portfolio-image--opacity");
  });

  $(".portfolio-item-2").hover(function() {
    $(".text-overlay-2").removeClass("hover-hidden");
    $(".text-overlay-2").addClass("hover");
    $(".portfolio-image-2").addClass("portfolio-image--opacity");
  }, function() {
    $(".text-overlay-2").removeClass("hover");
    $(".text-overlay-2").addClass("hover-hidden");
    $(".portfolio-image-2").removeClass("portfolio-image--opacity");
  });
});