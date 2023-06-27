$(function () {
  $("#design li .poster_box a").click(function (e) {
    e.preventDefault();
    let i = $(this).parent().parent().index();
    $("#pr_popup > div").eq(i).css("display", "block");
  });
  $("#pr_popup a.close").click(function (e) {
    e.preventDefault();
    $("#pr_popup > div").css("display", "none");
  });
});
