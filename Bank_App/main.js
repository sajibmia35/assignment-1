class BankAccount {
  constructor(AccountNumber, AccountName, AccountBalance = 0) {
    this.AccountNumber = AccountNumber;
    this.AccountName = AccountName;
    this.AccountBalance = AccountBalance;
  }
  AccountDeposit(amount) {
    if (amount > 0) {
      this.AccountBalance += amount;
      console.log(`Deposit Complete $ ${amount} Now Balance $ ${this.AccountBalance}`);
    } else {
      console.log("Deposit Amount Should be Greater than Zero.");
    }
  }
  AccountWithdraw(amount) {
    if (amount > 0 && amount <= this.AccountBalance) {
      this.AccountBalance -= amount;
      console.log(`Withdraw Complete $ ${amount} Now Balance $ ${this.AccountBalance}`);
    } else {
      console.log("Insufficient Funds");
    }
  }
  GetAccountBalance() {
    console.log(`Account Blance: ${this.AccountBalance}`);
  }
  GetAccountInfo() {
    console.log(`Account Number: ${this.AccountNumber}`);
    console.log(`Account Name: ${this.AccountName}`);
    this.GetAccountBalance();
  }
}

const account1 = new BankAccount("202401", "Sajib Mia", 1000);
const account2 = new BankAccount("202402", "John Doe", 500);

console.log("===== Initial Info =====");
account1.GetAccountInfo();
account2.GetAccountInfo();
console.log("========================");

console.log("\n");

account1.AccountDeposit(500);
account1.AccountWithdraw(1000);
account1.GetAccountInfo();

console.log("\n");

account2.AccountDeposit(200);
account2.AccountWithdraw(1000);
account2.GetAccountInfo();