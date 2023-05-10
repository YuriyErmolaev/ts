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


