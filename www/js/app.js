function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function() {
        alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 100,
        targetHeight : 100
    });
}
function addTodo(camera_url) {
    var title = $("#todo-title").val();
    var body = $("#todo-body").val();
    var img_tag = "";
    if (camera_url) {
        img_tag = "<img src='" + camera_url + "'>";
    }
    $.mobile.changePage($("#list-page"));
    $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
    $("#todo-list").listview('refresh');
};

$(function() {
    'use strict';
    $('#ajaxer').on('click', function() {
        var loading = $('#fountainG');
        loading.fadeIn();
        var url = 'https://oqhknqy77a.execute-api.ap-northeast-1.amazonaws.com/prod/';
        var param = { 'zip-code': '8600047' };
        $.get(url, param, function(_, status, res) {
            loading.fadeOut();
            alert(res.responseText);
        });
    });
    $(document).on('pagecontainerchange', function(e) {
        console.log(e);
    });
})