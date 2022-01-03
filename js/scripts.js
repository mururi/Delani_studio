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
  $(".portfolio-item").hover(function() {
    $(".text-overlay").removeClass("hover-hidden");
    $(".text-overlay").addClass("hover");
    $(".portfolio-image").addClass("portfolio-image--opacity");
  }, function() {
    $(".text-overlay").removeClass("hover");
    $(".text-overlay").addClass("hover-hidden");
    $(".portfolio-image").removeClass("portfolio-image--opacity");
  });
});