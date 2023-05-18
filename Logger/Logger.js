"use strict";
class Logger {
    printDate(date) {
        console.log('Date: ', date);
    }
    printDate2(date) {
        this.log(date.toString());
    }
}
class MessageDateLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message, date) {
        this.printDate(date);
        this.log(message);
    }
    logWithDate2(message) {
        this.printDate2(new Date());
        this.log(message);
    }
}
const InstMessageDateLogger = new MessageDateLogger();
InstMessageDateLogger.logWithDate('Hello from Logger! )', new Date());
InstMessageDateLogger.logWithDate2('Hello from Logger 2 ! )');
