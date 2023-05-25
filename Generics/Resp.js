"use strict";
class Resp {
    constructor(data, error) {
        if (data)
            this.data = data;
        if (error)
            this.error = error;
    }
}
const respInst = new Resp('data', 0);
class HttpResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res2 = new HttpResp();
class HttpResp2 extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res2_2 = new HttpResp2();
