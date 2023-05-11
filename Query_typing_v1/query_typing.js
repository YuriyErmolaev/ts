var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAIL"] = "fail";
})(PaymentStatus || (PaymentStatus = {}));
function getResultOfPayment(response) {
    var obj = JSON.parse(response.data);
    // console.log('JSON response from server: ', obj);
    if (obj.status == 'success')
        return obj;
}
