
function main() {


  const isPswValid = () => {
    let form = document.getElementById("userpass_");
    let pssRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (form.value < 8) {
      alert("8");
    }
    if (form.value.match(pssRE)) {
      return true;
    } else {
      document.getElementById("userpass_").style.backgroundColor = "red";

      return true;

    }
  };

  const isEmailValid = () => {
    let form = document.getElementById("email_");
    let text = form.value;


    let emailRE = /\S+@\S+\.\S+/;

    if (emailRE.test(text)) {//alert( "правильний формат пошти" );
      return true;
    } else {
      document.getElementById("userpass_").style.backgroundColor = "red";
      alert("Неправильний формат пошти");
      return false;
    }
  };



  let c = document.getElementById("loginMenu");
  let d = document.getElementById("login");
  let name_header = document.getElementById("navi");

  let getName = document.getElementById("nickname_").value;

  let login_header = document.createElement("a");
  if (document.getElementById("userpass_").value !== "") {
    if (document.getElementById("email_").value.indexOf(".ru") === -1) {
      if (isEmailValid() && isPswValid()) {
        c.style.top = "-200px";
        d.remove();

        login_header.className = "nav_link";
        login_header.href = "#";
        login_header.innerHTML = getName
        name_header.appendChild(login_header);

        $.ajax({
          type: 'post',
          dataType: 'json',
          async: false,
          data: FormData,
          url: 'footage.json',
          success: function (formData) {
            alert("Ajax object sent succesfully");
          },
          error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });
      }

    } else {
      alert(".ru not allowed");
      document.getElementById("email_").style.backgroundColor = "red";
    }
  }

  if (getName.value == "") {
    getName.value = document.getElementById("email_").value + Math.floor(Math.random() * Math.floor(20));
  }

}

//document.getElementById("confirmButton").addEventListener("click", main);
