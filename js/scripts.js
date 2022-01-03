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

  //form validation and message
  $("#contact-form").submit(function( event ) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name && email && message) {
      alert(`Hey ${name}. We have received your message. Thank you for reaching out to us`);
    }
    $("#contact-form").reset();
  });
});