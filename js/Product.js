/**
 * Created by Yana on 2/23/2016.
 */
var Product = (function () {
    function Product (name, type, interest, period, productAmount) {
        var _name = name;
        var _type = type;
        var _interest = interest;
        var _period = period;
        var _productAmount = productAmount;

        if (_type == 'credit') {
            var monthPayment =  (_productAmount + ((_productAmount * _interest )/100)) / _period;
        } else if (_type == 'deposit') {
            var monthPayment = (_productAmount * _interest ) / _period;
        }

        this.getName = function () {
            return _name;
        }

        this.getType = function () {
            return _type;
        }

        this.getProductAmount = function () {
            return _productAmount;
        }

        this.getInterest = function () {
            return _interest;
        }

        this.getPeriod = function () {
            return _period;
        }

        this.getMonthPayment = function () {
            return monthPayment;
        }

    }

    Product.prototype.setProductAmount = function (amount) {
        _productAmount += amount;
    }


return Product;
})();
