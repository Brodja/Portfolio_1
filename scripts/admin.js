$(document).ready(function () {
  $(".login__contanier").fadeIn(2000);
});

$(".login__contanier .go_register_block").click(function () {
  $(this).parents(".login__contanier").animate({ opacity: "hide" }, "2000");
  function w8() {
    $(".register__block").fadeIn(2000);
  }
  setTimeout(w8, 1000);
});

$(".register__block #go_login").click(function () {
  $(this).parents(".register__block").animate({ opacity: "hide" }, "2000");
  function w8() {
    $(".login__contanier").fadeIn(2000);
  }
  setTimeout(w8, 1000);
});

$(".login__button ").click(function () {
  alert("Тут будет отправка формы");
});

$(".next__step__2__button ").click(function () {
    $(".register__step__1").animate({ opacity: "hide" }, "2000");
    function w8() {
      $(".register__step__2").fadeIn(2000);
    }
    setTimeout(w8, 1000);
});
$(".prev__step__1__button ").click(function () {
  $(".register__step__2").animate({ opacity: "hide" }, "2000");
  function w8() {
    $(".register__step__1").fadeIn(2000);
  }
  setTimeout(w8, 1000);
});

$(".go__foto ").click(function () {
    alert('Foto')
});

$(".next__step__3__button ").click(function () {
  document.getElementById("about_me").innerText = document.getElementById(
    "about_me_edit"
  ).value;
  document.getElementById("about_school").innerText = document.getElementById(
    "about_school_edit"
  ).value;
  document.getElementById("about_work").innerText = document.getElementById("about_work_edit").value;
  document.getElementById("about_hobby").innerText = document.getElementById("about_hobby_edit").value;
  document.getElementById("about_education").innerText = document.getElementById("about_education_edit").value;
  document.getElementById("about_like").innerText = document.getElementById("about_like_edit").value;
  document.getElementById("about_age").innerText = document.getElementById("about_age_edit").value;
    $(".register__step__2").animate({ opacity: "hide" }, "2000");
    function w8() {
      $(".register__step__3").fadeIn(2000);
    }
    setTimeout(w8, 1000);
});
$(".prev__step__2__button ").click(function () {
    $(".register__step__3").animate({ opacity: "hide" }, "2000");
    function w8() {
      $(".register__step__2").fadeIn(2000);
    }
    setTimeout(w8, 1000);
});

// login.onclick = function () {
//     let login = document.getElementById("login_login_field");
//     let pass = document.getElementById("login_pass_field");
//     if (login.value == "") {
//       return false;
//     } else if (pass.value == "") {
//       return false;
//     }
//   };
function check_1() {
  let login = document.getElementById("login_login_field");
  let pass = document.getElementById("login_pass_field");
  if (login.value == "") {
    document.getElementById("err_login2_1").style.display = "block";
  } else if (pass.value == "") {
    document.getElementById("err_login2_1").style.display = "none";
    document.getElementById("err_login2_2").style.display = "block";
  } else {
    document.getElementById("err_login2_2").style.display = "none";
    document.getElementById("err_login2_1").style.display = "none";
  }
}

//   next_1.onclick = function () {
//     let login = document.getElementById("register_login_field");
//     let pass_1 = document.getElementById("register_pass_field");
//     let pass_2 = document.getElementById("register_pass2_field");
//     if (login.value == "") {
//       document.getElementById("err_login_1").style.display = "block";
//       return false;
//     } else if (login.value.length < 5) {
//       document.getElementById("err_login_1").style.display = "none";
//       document.getElementById("err_login_2").style.display = "block";
//       return false;
//     } else if (pass_1.value == "") {
//       document.getElementById("err_login_3").style.display = "block";
//       document.getElementById("err_login_2").style.display = "none";
//       document.getElementById("err_pass1_1").style.display = "block";
//       return false;
//     } else if (pass_1.value.length < 4) {
//       document.getElementById("err_pass1_1").style.display = "none";
//       document.getElementById("err_pass1_2").style.display = "block";
//       return false;
//     } else if (pass_1.value != pass_2.value) {
//       document.getElementById("err_pass1_2").style.display = "none";
//       document.getElementById("err_pass2_1").style.display = "block";
//       return false;
//     } else {
//       document.getElementById("err_pass2_1").style.display = "none";
//     }
//     document.getElementById("register_step_1").style.display = "none";
//     document.getElementById("register_step_2").style.display = "block";
//   };
function check_2() {
  let login = document.getElementById("register_login_field");
  let pass_1 = document.getElementById("register_pass_field");
  let pass_2 = document.getElementById("register_pass2_field");
  if (login.value == "") {
    document.getElementById("err_login_1").style.display = "block";
    document.getElementById("err_login_2").style.display = "none";
    document.getElementById("err_login_3").style.display = "none";
    document.getElementById("green_div_1").style.display = "none";
    document.getElementById("green_div_2").style.display = "none";
    document.getElementById("green_div_3").style.display = "none";
    document.getElementById("err_pass1_1").style.display = "none";
    document.getElementById("err_pass1_2").style.display = "none";
    document.getElementById("err_pass2_1").style.display = "none";
    document.getElementById("err_pass2_2").style.display = "none";
    document.getElementById("step_2_next").style.stroke = "#797979";
    return false;
  } else if (login.value.length < 5) {
    document.getElementById("err_login_1").style.display = "none";
    document.getElementById("err_login_3").style.display = "none";
    document.getElementById("green_div_1").style.display = "none";
    document.getElementById("green_div_2").style.display = "none";
    document.getElementById("green_div_3").style.display = "none";
    document.getElementById("err_pass1_1").style.display = "none";
    document.getElementById("err_pass1_2").style.display = "none";
    document.getElementById("err_pass2_1").style.display = "none";
    document.getElementById("err_pass2_2").style.display = "none";
    document.getElementById("err_login_2").style.display = "block";
    document.getElementById("step_2_next").style.stroke = "#797979";
    return false;
  } else if (pass_1.value == "") {
    document.getElementById("err_login_1").style.display = "none";
    document.getElementById("err_login_2").style.display = "none";
    document.getElementById("err_login_3").style.display = "block";
    document.getElementById("green_div_1").style.display = "block";
    document.getElementById("green_div_2").style.display = "none";
    document.getElementById("green_div_3").style.display = "none";
    document.getElementById("err_pass1_1").style.display = "block";
    document.getElementById("err_pass1_2").style.display = "none";
    document.getElementById("err_pass2_1").style.display = "none";
    document.getElementById("err_pass2_2").style.display = "none";
    document.getElementById("step_2_next").style.stroke = "#797979";
    return false;
  } else if (pass_1.value.length < 4) {
    document.getElementById("err_login_1").style.display = "none";
    document.getElementById("err_login_2").style.display = "none";
    document.getElementById("err_login_3").style.display = "block";
    document.getElementById("green_div_1").style.display = "block";
    document.getElementById("green_div_2").style.display = "none";
    document.getElementById("green_div_3").style.display = "none";
    document.getElementById("err_pass1_1").style.display = "none";
    document.getElementById("err_pass1_2").style.display = "block";
    document.getElementById("err_pass2_1").style.display = "none";
    document.getElementById("err_pass2_2").style.display = "none";
    document.getElementById("step_2_next").style.stroke = "#797979";
    return false;
  } else if (pass_1.value != pass_2.value && pass_2.value != pass_1.value) {
    document.getElementById("err_login_1").style.display = "none";
    document.getElementById("err_login_2").style.display = "none";
    document.getElementById("err_login_3").style.display = "block";
    document.getElementById("green_div_1").style.display = "block";
    document.getElementById("green_div_2").style.display = "block";
    document.getElementById("green_div_3").style.display = "none";
    document.getElementById("err_pass1_1").style.display = "none";
    document.getElementById("err_pass1_2").style.display = "none";
    document.getElementById("err_pass2_1").style.display = "block";
    document.getElementById("err_pass2_2").style.display = "none";
    document.getElementById("step_2_next").style.stroke = "#797979";
    return false;
  } else if (pass_1.value == pass_2.value && pass_2.value == pass_1.value) {
    document.getElementById("err_login_1").style.display = "none";
    document.getElementById("err_login_2").style.display = "none";
    document.getElementById("err_login_3").style.display = "block";
    document.getElementById("green_div_1").style.display = "block";
    document.getElementById("green_div_2").style.display = "block";
    document.getElementById("green_div_3").style.display = "block";
    document.getElementById("err_pass1_1").style.display = "none";
    document.getElementById("err_pass1_2").style.display = "none";
    document.getElementById("err_pass2_1").style.display = "none";
    document.getElementById("err_pass2_2").style.display = "block";
    document.getElementById("step_2_next").style.stroke = "#73ff4a";
    return true;
  } else {
    document.getElementById("green_div_1").style.display = "block";
    document.getElementById("err_login_3").style.display = "block";
    document.getElementById("green_div_2").style.display = "block";
    document.getElementById("green_div_3").style.display = "block";
    document.getElementById("err_pass2_2").style.display = "block";
    document.getElementById("err_pass2_1").style.display = "none";
  }
}

//   next_2.onclick = function () {
//     // сейв фото
//     var a = document.getElementById("foto").value;
//         var ed = "C:\\fakepath\\";
//         var b = a.replace(ed, "");
//         const c = "http://127.0.0.1:5500/images/" + b;

//         console.log(c);
//         // document.getElementById("ava").src = c;
//         // конец
//     document.getElementById("register_step_2").style.display = "none";
//     document.getElementById("register_step_3").style.display = "block";

    // document.getElementById("about_me").innerText = document.getElementById(
    //   "about_me_edit"
    // ).value;
    // document.getElementById("about_school").innerText = document.getElementById(
    //   "about_school_edit"
    // ).value;
    // document.getElementById("about_work").innerText = document.getElementById("about_work_edit").value;
    // document.getElementById("about_hobby").innerText = document.getElementById("about_hobby_edit").value;
    // document.getElementById("about_education").innerText = document.getElementById("about_education_edit").value;
    // document.getElementById("about_like").innerText = document.getElementById("about_like_edit").value;
    // document.getElementById("about_age").innerText = document.getElementById("about_age_edit").value;
//   };
//   back_1.onclick = function () {
//     document.getElementById("register_step_1").style.display = "block";
//     document.getElementById("register_step_2").style.display = "none";
//   };
//   back_2.onclick = function () {
//     document.getElementById("register_step_2").style.display = "block";
//     document.getElementById("register_step_3").style.display = "none";
//   };

//   log_btn.onclick = function () {
//     document.getElementById("reg").style.display = "none";
//     document.getElementById("login_form").style.display = "block";
//   };
//   log_btn_2.onclick = function () {
//     document.getElementById("reg").style.display = "none";
//     document.getElementById("login_form").style.display = "block";
//   };
//   log_btn_3.onclick = function () {
//     document.getElementById("reg").style.display = "none";
//     document.getElementById("login_form").style.display = "block";
//   };

//   $("form").on("submit", e => {
//     e.preventDefault();
//     let value = $(e.target).attr("class");

//     let selector = "." + value;

//     $.ajax({
//         url: "/" + value,
//         type: "POST",
//         data: {
//             username: $(selector + " [name=username]").val(),
//             password: $(selector + " [name=password]").val()
//         },
//         beforeSend: () => {
//             $(selector + " input").prop("disabled", true);
//         },
//         success: res => {
//             alert(response(res));
//             location.reload();
//         },
//         error: res => {
//             alert(response(res));
//         },
//         complete: () => {
//             $(selector + " button").prop("disabled", false);
//         }
//     });
//   });
