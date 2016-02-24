/**
 * Created by Yana on 2/23/2016.
 */
var Client = (function(){
    function Client (name, address, salary, cashAmount) {
        var _name = name;
        var _address = address;
        var _monthSalary = salary;
        var _cashAmount = cashAmount;
        var deposits = [];
        var credits = [];

        this.getName = function () {
            return _name;
        }

        this.getAddress = function () {
            return _address;
        }

        this.setAddress = function (address) {
            _address = address;
        }

        this.getSalary = function () {
            return _monthSalary;
        }

        this.setSalary = function (salary) {
            _monthSalary = salary;
        }

        this.getCashAmount = function () {
            return _cashAmount;
        }

        this.setCashAmount = function (cash) {
            _cashAmount += cash;
        }

        this.getDeposits = function () {
            return deposits;
        }

        this.setDeposits = function (deposit) {
            deposits.push(deposit)
        }

        this.getCredits = function () {
            return credits;
        }

        this.setCredit = function (credit) {
            credits.push(credit);
        }
    }


    Client.prototype.openDeposit = function (deposit) {
        if (this.getCashAmount() > 0) {
            this.setDeposits(deposit);
            this.setCashAmount(-(deposit.getProductAmount()))
        } else {
            console.log('Not enough money to open a deposit!');
        }
    }

    Client.prototype.getAllMonthPayments = function () {
        var allMonthPayments = 0;
        for (var i = 0; i < this.getCredits().length; i++) {
            allMonthPayments += this.getCredits()[i].getMonthPayment();
        }

        return allMonthPayments;
    }

    Client.prototype.getCredit = function (credit) {

        if (this.getAllMonthPayments() <= (this.getSalary()/2)) {
            this.setCredit(credit);
            this.setCashAmount(credit.getProductAmount());
        }
    }

    Client.prototype.makeMonthPayment = function (Bank) {
        Bank.setCashAmount(this.getAllMonthPayments());
        this.setCashAmount(-this.getAllMonthPayments());

        for (var i = 0; i < this.getCredits().length; i++) {
            this.getCredits()[i].updateCashAmount();
        }
    }

    return Client;

})()