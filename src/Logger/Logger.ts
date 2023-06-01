abstract class Logger {
    abstract log(message: string): void;
    printDate(date: Date): void {
        console.log('Date: ', date );
    }
    printDate2(date: Date): void {
        this.log(date.toString());
    }
}

class MessageDateLogger extends Logger {
    log(message: string) {
        console.log(message);
    }
    logWithDate(message: string, date: Date){
        this.printDate(date);
        this.log(message);
    }
    logWithDate2(message: string){
        this.printDate2(new Date());
        this.log(message);
    }
}

const InstMessageDateLogger = new MessageDateLogger();

InstMessageDateLogger.logWithDate('Hello from Logger! )', new Date() );

InstMessageDateLogger.logWithDate2('Hello from Logger 2 ! )' );
