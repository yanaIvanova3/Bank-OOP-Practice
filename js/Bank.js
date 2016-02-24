/**
 * Created by Yana on 2/23/2016.
 */
var Bank = (function () {
    function Bank (name, address) {
        var _name = name;
        var _address = address;
        var bankAmount = 1000;
        var clients = [];
        var credits = [];
        var deposits = [];

        this.getName = function () {
            return _name;
        }

        this.setName = function(name) {
            _name = name;
        }

        this.getAddress = function () {
            return _address;
        }

        this.setAddress = function (address) {
            _address = address;
        }

        this.getBankAmount = function () {
            return bankAmount;
        }

        this.setBankAmount = function (amount) {
            bankAmount += amount;
        }

        this.getDeposits = function () {
            return deposits;
        }

        this.setDeposit = function (deposit) {
            deposits.push(deposit);
        }

        this.setCredits = function (credit) {
            credits.push(credit);
        }

        this.getClients = function (){
            return clients;

        }
        this.setClients = function (client) {
            clients.push(client);
        }

    }

    Bank.prototype.getAllDepositsAmount = function () {
        var allDepositsAmount = 0;
        for (var i = 0; i < this.getDeposits().length; i++) {
            allDepositsAmount += this.getDeposits()[i].getProductAmount();
        }

        return allDepositsAmount;
    }

    Bank.prototype.createDeposit = function (client, deposit) {
        this.setDeposit(deposit);
        this.setBankAmount(deposit.getProductAmount());
        client.openDeposit(deposit);
        console.log('Congratulations on your deposit');
    }

    Bank.prototype.releaseCredit = function (client, credit) {
        if (this.getBankAmount() > (this.getAllDepositsAmount()/10)) {
            this.setBankAmount(-(credit.getProductAmount()));
            this.setCredits(credit);
            client.getCredit(credit);
            console.log('Congratulations on your credit')
        } else {
            console.log('The bank is unable to approve your credit request at this time');
        }
    }

    return Bank;
})()