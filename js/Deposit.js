/**
 * Created by Yana on 2/24/2016.
 */
var Deposit = (function (parent) {
    function Deposit (name, type, interest, period, productAmount)  {
        parent.call(this, name, type, interest, period, productAmount);

    }

    Deposit.prototype = Object.create(parent.prototype);
    Deposit.prototype.constructor = Deposit;

    Deposit.prototype.updateCashAmount = function () {
        this.setProductAmount(monthPayment);
    }

    return Deposit;
})(Product);