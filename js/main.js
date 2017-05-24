// サーバーに接続
var socket = io.connect(location.origin);

(function() {

    $(function() {
        window.addEventListener("deviceorientation", deviceorientationHandler);
    });

    function deviceorientationHandler(event) {

        //ジャイロセンサー情報取得
        // X軸
        var beta = event.beta;
        // Y軸
        var gamma = event.gamma;
        // Z軸
        var alpha = event.alpha;

        var dataRotate = "";
        dataRotate += "X : " + beta + "<br>";
        dataRotate += "Y : " + gamma + "<br>";
        dataRotate += 'Z : ' + alpha;

        $(".debug").html(dataRotate);

        // サーバーへデータを送信
        socket.emit("data", {
            x: beta,
            y: gamma,
            z: alpha
        });
    }
})();
