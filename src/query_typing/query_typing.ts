interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    SUCCESS = 'success',
    FAIL = 'fail'
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
    dbID: number;
}

interface IDataFailed {
    errMsg: string;
    errCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess;
}

interface IResponseFail {
    status: PaymentStatus.FAIL;
    data: IDataFailed
}

type response = IResponseSuccess | IResponseFail;

type f = ( inpResp: response ) => number;

function isSuccess(res: response): res is IResponseSuccess {
    if(res.status === PaymentStatus.SUCCESS){
        return true;
    }
    return false;
}

function getResponseObj(inpResp: any): response {
    let obj = JSON.parse(inpResp.data);
    return isSuccess(obj)? obj : obj;
}

function getIdFromData(res: response): number {
    if (isSuccess(res))
        return res.data.dbID;
    throw new Error(res.data.errMsg);
}



