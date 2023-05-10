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
function sendPayment(payment: IPayment, endpoint: string): IResponseSuccess | IResponseFail {
    let socket = new WebSocket(endpoint);
    socket.onopen = function () {
        socket.send('hello from the client');
    };
    socket.onmessage = function (response) {
        let obj = JSON.parse(response.data);
        console.log('JSON response from server: ',obj);
        if (obj.status == 'success')
            return obj;
    };
}
