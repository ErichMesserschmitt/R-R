
function Main() {
    //console.log("hehe");

    // $.ajax({
    //     type: 'post',
    //     dataType: 'json',
    //     async: false,
    //     data: FormData,
    //     url: 'pdatabase/footage.json',
    //     success: function (elements) {
    //         console.log(elements)
    //     }
    // })

    //////////////////////////////////
    var countObj = { action: 'counter', obj: '' };
    $.post('logic.php', 'param=' + JSON.stringify(countObj),
        function (data) {
            //console.log("This site has been visited " + data + " times");
        }
    )


    ////////////////////////////
    var someObj = { action: 'content', obj: '' };
    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            $("#footage_container").html("");
            //console.log(this.responseText)
            json = JSON.parse(this.responseText);
            //console.log(json);
            $.each(json, function (index, item) {
                $("#footage_container").append("<a href=\"" + item.url + "\" id='" +item.type + "' class=\"footage_content\" style=\"background: url('" + item.coverimg + "') center no-repeat;\"> <div class=\"container\"> <div class=\"" + item.textal +
                    "\">" + item.text + "</div></div></a>");
            })
        }
    }
    xttp.open("POST", "logic.php");
    xttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xttp.send('param=' + JSON.stringify(someObj));

    var someObj = { action: 'connect', obj: '' };
    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function () {
        console.log(this.responseText)
    }
    xttp.open("POST", "logic.php");
    xttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xttp.send('param=' + JSON.stringify(someObj));


}

$("body").ready(Main);

function tryPost() {

    sobj = { username: $("#nickname_").val(), pass: $("#userpass_").val(), email: $("#email_").val() };
    param = {action: 'login', obj: sobj};
    $.post('logic.php', "param=" + JSON.stringify(param),
        function (data) {
            var json = JSON.stringify(data);
            if (data == $("#nickname_").val()) {
                $("#loginMenu").css('top', "-200px");
                $("#login").remove();
                let name_header = document.getElementById("navi");
                if ($("#nick").length == 0) {
                    let login_header = document.createElement("a");
                    login_header.id = "nick";
                    login_header.className = "nav_link";
                    login_header.href = "#";
                    login_header.innerHTML = data
                    name_header.appendChild(login_header);
                }
            } else {
                alert(json);
            }
        }
    )
}

$("#confirmButton").click(tryPost);


function switchMode() {
    let switchCheckBox = document.getElementById("modeSwitch");
    node_header = document.getElementsByClassName("header");
    node_logo = document.getElementsByClassName("header_logo");
    node_text = document.getElementsByClassName("nav_link_button");
    login_menu = document.getElementById("loginMenu");


    if (switchCheckBox.checked) {

        for (i = 0; i < node_logo.length; ++i) {
            node_logo[i].style.color = "black"
        }
        login_menu.style.backgroundColor = "white"


        for (i = 0; i < node_header.length; ++i) {
            node_header[i].style.backgroundColor = "white"
        }
        for (i = 0; i < node_text.length; ++i) {
            node_text[i].style.color = "black"
        }

    } else {
        for (i = 0; i < node_header.length; ++i) {
            node_header[i].style.backgroundColor = "black"
        }
        for (i = 0; i < node_text.length; ++i) {
            node_text[i].style.color = "white"
        }
        for (i = 0; i < node_logo.length; ++i) {
            node_logo[i].style.color = "white"
        }
        login_menu.style.backgroundColor = "black"

    }
}

// $("#confirmButton").click(function(){

//     var n = false;
//     var e = false;
//     var p = false; 

//     if($("#nickname_").val() == "Messerschmitt"){
//         n = true;
//     }
//     if($("#email_").val() == "b.vovchak@gmail.com"){
//         e = true;
//     }
//     if($("#userpass_").val() == "1"){
//         p = true;
//     }
//     if(n&&p&&e){
//         $("#nickname_").hide();
//         $("#email_").hide();
//         $("#userpass_").hide();
//         $("#inco").hide();
//         $("#reme").hide();
//         $("#confirmButton").hide();
//         $("#resetButton").hide();
//         $("#login").html($("#nickname_").val());

//     $("#loginMenu").css('top', "-200px");
//     $("#loginMenu").html("<img src=\"cc.jpg\" class=\"img-circle\" alt=\"Cinque Terre\"width=\"50\" height=\"50\"><button id=\"hoverUp\" class='nav_link_button' type='button'><script src='confirm.js'></script>close</button>")
//     }
// })

function choose(name){
        var request = { action: "view", car: name};
        $.post('rent.php', "param=" +JSON.stringify(request),
            function (data) {
                console.log(data);
                window.location.replace("rent.html");
            }
        )
}


$("#hoverUp").click(function () {
    $("#loginMenu").css('top', "-200px");
})

$('body').on('click', '.footage_content', function () {
    choose($(this).attr('id'))
 });

 $('body').on('click', '#Rent', function () {
    choose("all")
 });


document.getElementById("modeSwitch").addEventListener("click", switchMode);


