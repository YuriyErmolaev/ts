var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAIL"] = "fail";
})(PaymentStatus || (PaymentStatus = {}));
function sendPayment(payment, endpoint) {
    var socket = new WebSocket(endpoint);
    socket.onopen = function () {
        // socket.send('hello from the client');
        // socket.json.send(payment);
        socket.send(JSON.stringify(payment));
    };
    // socket.emit('onopen', payment);
    socket.onmessage = function (response) {
        var obj = JSON.parse(response.data);
        console.log('JSON response from server: ', obj);
        if (obj.status == 'success')
            return obj;
    };
}
