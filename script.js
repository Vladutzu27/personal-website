window.onload = function () {
    // Function to check the width and redirect if necessary
    function checkWidthAndRedirect() {
      // Set the width threshold for mobile devices (adjust as needed)
      var mobileWidthThreshold = 600;

      // Get the current window width
      var windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      // Check if the width is less than the threshold for mobile devices
      if (windowWidth < mobileWidthThreshold) {
        // Redirect to the mobile URL
        window.location.href = 'mobile.html';
      }
    }

    // Call the function when the page loads
    checkWidthAndRedirect();

    var scrollTriggeredDiv = $(".scroll-triggered-div");
    var someThreshold = 100;

    var header = $("header"),
      headerHeight = header.height(),
      logo = $(".logo"),
      logoHeight = logo.height(),
      scrollTo = 120;

    $(window).on("scroll", function () {
      var yPos = $(this).scrollTop(),
        yPer = yPos / scrollTo;

      if (yPer > 1) {
        yPer = 1;
      }

      var logoPos = -1 * (yPer * 50) + 50,
        logoSize = headerHeight * yPer - logoHeight * yPer + logoHeight,
        headerPos = yPer * headerHeight - headerHeight;

      logo.css({
        top: logoPos + "%",
        left: logoPos + "%",
        transform: "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)",
        height: logoSize,
      });

      $("header").css({
        top: headerPos,
        opacity: yPer,
      });

      // Check if yPos is greater than someThreshold and show/hide scrollTriggeredDiv accordingly
      if (yPos > someThreshold) {
        scrollTriggeredDiv.show();
      } else {
        scrollTriggeredDiv.hide();
      }
    });
  };
