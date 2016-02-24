/**
 * Created by Yana on 2/24/2016.
 */
var Credit = (function (parent) {
    function Credit (name, type, interest, period, productAmount) {
        parent.call(this, name, type, interest, period, productAmount);

    }

    Credit.prototype = Object.create(parent.prototype);
    Credit.prototype.constructor = Credit;

    Credit.prototype.updateCashAmount = function () {
        this.setProductAmount(-monthPayment);
    }
    return Credit;
})(Product);