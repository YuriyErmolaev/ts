
class Resp<D, E> {
    data?: D;
    error?: E;
    constructor(data?: D, error?: E) {
        if(data)
            this.data = data;
        if(error)
            this.error = error;
    }
}

const respInst = new Resp<string, number>('data', 0);

class HttpResp extends Resp<string, number>{
    code: number;
    setCode(code: number) {
        this.code = code;
    }
}

const res2 = new HttpResp();

class HttpResp2<F> extends Resp<string, number>{
    code: F;
    setCode(code: F) {
        this.code = code;
    }
}

const res2_2 = new HttpResp2();
