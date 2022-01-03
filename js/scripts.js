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
  for (let i = 1; i < 9; i++) {
    $(".portfolio-item-" + i).hover(function() {
      $(".text-overlay-" + i).removeClass("hover-hidden");
      $(".text-overlay-" + i).addClass("hover");
      $(".portfolio-image-" + i).addClass("portfolio-image--opacity");
    }, function() {
      $(".text-overlay-" + i).removeClass("hover");
      $(".text-overlay-" + i).addClass("hover-hidden");
      $(".portfolio-image-" + i).removeClass("portfolio-image--opacity");
    });
  }
});