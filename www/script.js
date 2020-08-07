$(document).ready(function() {
    $("#loginform").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {

        var formData = {
            email: $("#email").val(),
            upwd: $("#upwd").val()
        }
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "login",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function(reqJson) {
                if (reqJson.ok == true) {
                    $("#loginform").removeClass("fail");
                    $("#loginform").addClass("success");
                    $("#errormsg").addClass("hidemessage");
                    $("#errormsg").removeClass("showmessage");
                    window.location.href = window.location.origin + '/account'
                } else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                    $("#errormsg").removeClass("hidemessage");
                    $("#errormsg").addClass("showmessage");
                    $("#errormsg").text(reqJson.errors);
                    console.log("ERROR: ", reqJson.errors);
                }
            },

        });
        resetData();
    }

    function resetData() {
        $("#email").val("");
        $("#upwd").val("");
    }
});