//toggle what we do descriptions
$(document).ready(function() {
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
});