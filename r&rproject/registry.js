
function check_register() {
    var check = 0;
    var json;
    if ($("#r_pass").val() != $("#r_pass_repeat").val()) {
        $("#r_pass_repeat").css("background-color", "red")
        check += 1;
    } else {
        $("#r_pass_repeat").css("background-color", "white")
    }
    var regData = { username: $("#r_username").val(), email: $("#r_email").val() }
    var requestObj = { action: 'check', obj: regData };
    $.post('logic.php', 'param=' + JSON.stringify(requestObj),
        function (data) {
            json = JSON.parse(data);;
            if (json[0].username >= 1) {
                $("#r_username").css("background-color", "red")
                check += 1;
            } else {
                $("#r_username").css("background-color", "white")
            }
            if (json[0].email >= 1) {
                $("#r_email").css("background-color", "red")
                check += 1;
            } else {
                $("#r_email").css("background-color", "white")
            }
            if(check > 0) {
                $("#r_confirm").hide();
            } else {
                $("#r_confirm").show();
            }
        }
        
    )
    
}


function confirm_register() {
    var regData = { username: $("#r_username").val(), email: $("#r_email").val(), pass: $("#r_pass").val() };
    var requestObj = { action: 'register', obj: regData };
    $.post('login.php', 'param=' + JSON.stringify(requestObj),
        function (data) {
            console.log(data);
            json = JSON.parse(data);
            switch (json[0].register) {
                case "200": {
                    window.location.href = "index.html";
                    $("#")
                }
                case "13": {
                    break;
                }

            }
        }
    )
}


$("body").ready(check_register);

$(document).ready(function () {
    check_register();
    $('input').change(check_register);
    $('input').mouseenter(check_register);
});


$("#r_confirm").click(function () {
    check_register();
    confirm_register();
});
