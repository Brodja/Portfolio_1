$(window).on("load resize", windowSize);
$(window).on("load", scroll_chat);

function scroll_chat(){
    $("#chat_history").animate(
        { scrollTop: $("#chat_history")[0].scrollHeight },
        1000
      );
}
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
$(".send__btn ").click(function () {
    var chat_history = document.getElementById('chat_history');
    var text_area = document.getElementById('text_area');
    var date = new Date();
    let message = document.createElement('div');
    message.className = 'message';
    let msg__content = document.createElement('div');
    msg__content.className = 'msg__content';
    let msg = document.createElement('div');
    msg.className = 'msg';
    let msg__foto = document.createElement('div');
    msg__foto.className = 'msg__foto';
    let ava = document.createElement('div');
    ava.className = 'ava';
    let msg__info = document.createElement('div');
    msg__info.className = 'msg__info';
    let name = document.createElement('div');
    name.className = 'name';
    name.innerText = "Name";
    let text = document.createElement('div');
    text.className = 'text';
    text.innerText = text_area.value;
    let time = document.createElement('div');
    time.className = 'time';
    let time__text = document.createElement('time__text');
    time__text.className = 'time__text';
    time__text.innerText = date.toLocaleTimeString();
    $(message).hide().appendTo("#chat_history").slideDown(200);
    message.appendChild(msg__content);
    msg__content.appendChild(msg);
    msg.appendChild(msg__foto);
    msg.appendChild(msg__info);
    msg.appendChild(time);
    time.appendChild(time__text);
    msg__foto.appendChild(ava);
    msg__info.appendChild(name);
    msg__info.appendChild(text);
    $("#chat_history").animate(
        { scrollTop: $("#chat_history")[0].scrollHeight },
        1000
      );
    text_area.value = '';
});
