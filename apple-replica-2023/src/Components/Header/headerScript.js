import $ from "jquery";

$(() => {
  // *****************************//
  // Phone Header Nav Script Start here
  // *****************************//

  // $(window).trigger(function () {
  //   window.location.reload();
  // });
  // $(window).on("resize", function () {
  //   window.location.reload();
  // });

  $(".dropMenu").hide();

  $(".appleMenu").on("click", () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
      $(".dropMenu").toggle();
      $(".appleMenu i").toggleClass("popUp");
      // $(".noCart").toggleClass("cartMenu");
      $(".fixed-top").toggleClass("bgMenu");
      // $(".fullHide").toggleClass("allHide");
    }
  });

  // *****************************//
  // Phone Header Script End here
  // *****************************//
});
