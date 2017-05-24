var socket = io.connect(location.origin);

// クライアントからのデータの受信
socket.on("data2", function(dataFromSever) {

    $(".didLoad").empty();

    $(".didLoad").append(
        '<p>x : ' + dataFromSever.x + '</p><br><p>y : ' +
        dataFromSever.y + '</p><br><p>z : ' +
        dataFromSever.z + '</p>'
    );
});
