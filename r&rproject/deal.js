var eprice;

function main(){
    console.log("ASdf");
    var request = { action: "deal"};
    $.post('rent.php', "param=" +JSON.stringify(request),
        function (data) {
            
            var json = JSON.parse(data);
            $("#content_container").html("");
            console.log(json);
            $.each(json, function (index, item) {
                
                var div = document.createElement('div');
                div.id = item.name;
                div.className = "deal_row";

                var img = item.img;
                var text = item.text;
                var price = item.price;
                var dimg  = document.createElement('img');
                dimg.className = "deal_img col-sm-4 col-md-4 col-lg-4";
                dimg.src =  img;
               
                
                var dname =  document.createElement('div');
                dname.className = "deal_img col-sm-3 col-md-3 col-lg-3";
                dname.innerHTML = item.name;

                var dtext =  document.createElement('div');
                dtext.className = "deal_img col-sm-4 col-md-4 col-lg-4";
                dtext.innerHTML = text;

                var dprice =  document.createElement('div');
                dprice.className = "deal_img col-sm-2 col-md-2 col-lg-2";
                dprice.innerHTML = "$" + price + " per day";
                eprice = price;




                div.appendChild(dimg);
                div.appendChild(dname);
                div.appendChild(dtext);
                div.appendChild(dprice);  
                
                var ndiv = document.createElement('div');
                ndiv.id = item.name;
                ndiv.className = "deal_row";


               


                $("#content_container").append(div);
                
            })          
        }
    )
}



function update(){
    console.log("fasdfa")
    count = $("#days").val();
    $("#confirm").html("Rent for $" + count*eprice);
}

$(document).on('keyup mouseup', '#days', function() {                                                                                                                     
    update();
  });

$("body").ready(main)