var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAIL"] = "fail";
})(PaymentStatus || (PaymentStatus = {}));
function getResultOfPayment(inpResp) {
    var obj = JSON.parse(inpResp.data);
    if (obj.status == 'success') {
        return obj;
    }
    return obj;
}
