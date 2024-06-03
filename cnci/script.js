window.onload = function () {
    function checkWidthAndRedirect() {
      var mobileWidthThreshold = 1000;
      var windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (windowWidth < mobileWidthThreshold) {
        window.location.href = 'mobile.html';
      }
    }

    checkWidthAndRedirect();
}