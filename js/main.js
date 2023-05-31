$(function () {
  $("#design li a").click(function (e) {
    e.preventDefault();
    let i = $(this).parent().index();
    $("#pr_popup > div").eq(i).css("display", "block");
  });
  $("#pr_popup .close").click(function (e) {
    e.preventDefault();
    $("#pr_popup > div").css("display", "none");
  });
});
