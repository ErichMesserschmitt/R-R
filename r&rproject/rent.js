function all() {
    $(".nav_link_button").css("opacity", "0.4");
    main("getAll")
    $("#all").css('opacity', "1");
    return;
}
function truck() {
    $(".nav_link_button").css("opacity", "0.4");
    main("truck")
    $("#truck").css('opacity', "1");
    return;
}
function city() {
    $(".nav_link_button").css("opacity", "0.4");
    main("city")
    $("#city").css('opacity', "1");
    return;
}
function classic() {
    $(".nav_link_button").css("opacity", "0.4");
    main("classic")
    $("#classic").css('opacity', "1");
    return;
}
function racing() {
    $(".nav_link_button").css("opacity", "0.4");
    main("race")
    $("#racing").css('opacity', "1");
    return;
}

function choose(name) {
    var request = { action: "rent", car: name };
    $.post('rent.php', "param=" + JSON.stringify(request),
        function (data) {
            console.log(data);
            window.location.replace("deal.html");
        }
    )
}

function main(arg) {
    var request = { action: arg };
    $.post('rent.php', "param=" + JSON.stringify(request),
        function (data) {
            var json = JSON.parse(data);
            $("#content_container").html("");
            $.each(json, function (index, item) {

                var div = document.createElement('div');
                div.id = item.name;
                div.className = "car_row";

                var img = item.img;
                var text = item.text;
                var price = item.price;
                var dimg = document.createElement('img');
                dimg.className = "car_img col-sm-4 col-md-3 col-lg-2";
                dimg.src = img;

                var dname = document.createElement('div');
                dname.className = "car_info col-sm-2 col-md-3 col-lg-4";
                dname.innerHTML = item.name;

                var dtext = document.createElement('div');
                dtext.className = "car_info col-sm-4 col-md-4 col-lg-4";
                dtext.innerHTML = text;

                var dprice = document.createElement('div');
                dprice.className = "car_info col-sm-2 col-md-2 col-lg-2";
                dprice.innerHTML = "$" + price + " per day";

                div.appendChild(dimg);
                div.appendChild(dname);
                div.appendChild(dtext);
                div.appendChild(dprice);


              
                $("#content_container").append(div);
            })
        }
    )
}

function start() {
    var request = { action: "view_rent" };
    $.post('rent.php', "param=" + JSON.stringify(request),
        function (data) {
            console.log(data);
            json = JSON.parse(data);
            if (json == "classic")
                classic()
            if (json == "racing")
                racing()
            if (json == "truck")
                truck()
            if (json == "city")
                city()
            if(json == "all")
                all()
        }
    )
}




$("#all").click(all)

$("#truck").click(truck)

$("#racing").click(racing)

$("#city").click(city)

$("#classic").click(classic)


$('body').ready(start)

$('body').on('click', '.car_row', function () {
    choose($(this).children('div').eq(0).html())
});