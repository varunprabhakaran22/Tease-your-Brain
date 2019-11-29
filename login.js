let userid;
let password;
$("#submit").click(function(){
    userid=$("#userName").val();
    password=$("#password").val();
    // alert(userid+" "+password);

    $.ajax({
        type: "POST",
        // dataType: "json",
        data:{
            userid: userid,
            password:password
        },
        url: "http:/localhost:8400/signup",
        success: function (){
            console.log("ajax call done successfully")
            // window.location.href = "login.html";
        },
        error:function(err){
            // window.location.href = "signup.html";
        },
        // complete:function(){
        //     console.log("hi")
        // }
    })
})