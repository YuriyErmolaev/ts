var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.printDate = function (date) {
        console.log('Date: ', date);
    };
    Logger.prototype.printDate2 = function (date) {
        this.log(date.toString());
    };
    return Logger;
}());
var MessageDateLogger = /** @class */ (function (_super) {
    __extends(MessageDateLogger, _super);
    function MessageDateLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageDateLogger.prototype.log = function (message) {
        console.log(message);
    };
    MessageDateLogger.prototype.logWithDate = function (message, date) {
        this.printDate(date);
        this.log(message);
    };
    MessageDateLogger.prototype.logWithDate2 = function (message) {
        this.printDate2(new Date());
        this.log(message);
    };
    return MessageDateLogger;
}(Logger));
var InstMessageDateLogger = new MessageDateLogger();
InstMessageDateLogger.logWithDate('Hello from Logger! )', new Date());
InstMessageDateLogger.logWithDate2('Hello from Logger 2 ! )');
