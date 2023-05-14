var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAIL"] = "fail";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(res) {
    if (res.status === PaymentStatus.SUCCESS) {
        return true;
    }
    return false;
}
function getResponseObj(inpResp) {
    var obj = JSON.parse(inpResp.data);
    return isSuccess(obj) ? obj : obj;
}
function getIdFromData(res) {
    if (isSuccess(res))
        return res.data.dbID;
    throw new Error(res.data.errMsg);
}
