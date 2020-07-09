$(window).on("load resize", windowSize);

function windowSize() {
  if ($(window).width() > "1300") {
    $("#person_list").appendTo(".dialog__story");
    $(".block__chat .content__box").show();
    $(".dialog__story").show();
  }
  if ($(window).width() <= "1300") {
    $('#chat').addClass("active");
    $("#dialogs").removeClass("active");
  }
}

$("#chat ").click(function () {
  $(this).addClass("active");
  $("#dialogs").removeClass("active");
  $(".block__chat .content__box").show();
  $("#person_list").appendTo(".dialog__story");
});
$("#dialogs ").click(function () {
  $(this).addClass("active");
  $("#chat").removeClass("active");
  $(".block__chat .content__box").hide();
  $("#person_list").appendTo(".block__chat");
});
