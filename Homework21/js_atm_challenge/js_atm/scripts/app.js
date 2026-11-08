class BankUser {
  constructor(userName, balance = 0) {
    this.userName = userName;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Enter a deposit amount greater than $0.");
    }

    this.balance += amount;
    this.transactions.push({ type: "Deposit", amount, date: new Date() });
  }

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Enter a withdrawal amount greater than $0.");
    }

    if (!Number.isInteger(amount)) {
      throw new Error("Withdrawal amounts must be whole dollars.");
    }

    if (amount % 20 !== 0 && amount % 50 !== 0 && amount % 100 !== 0) {
      throw new Error("Withdrawals must be multiples of $20, $50, or $100.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }

    this.balance -= amount;
    this.transactions.push({ type: "Withdrawal", amount, date: new Date() });
  }
}

class BankService {
  constructor(serviceName) {
    this.serviceName = serviceName;
    this.accounts = [new BankUser("Jason", 1250), new BankUser("Sam", 800)];
    this.currentUser = null;
    this.screen = document.querySelector("#screen");
  }

  formatMoney(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }

  showAlert(message) {
    window.alert(message);
  }

  renderLogin() {
    this.currentUser = null;
    this.screen.innerHTML = `
      <h1>Welcome to ${this.serviceName}</h1>
      <p class="hint">Enter an account name to log in, or create a new account.</p>

      <form id="login-form">
        <label for="login-name">Account name</label>
        <input id="login-name" name="name" required maxlength="30" />
        <button type="submit">Log in</button>
      </form>
      
      <h2>Create an account</h2>
      <form id="create-form">
        <label for="new-name">Name</label>
        <input id="new-name" name="name" required maxlength="30" />
        <div class="open-balance">
        <label for="opening-balance">Starting balance</label>
        <input id="opening-balance" name="balance" type="number"
          min="0" step="0.01" value="0" required />
        </div>
        <button type="submit">Create account</button>
        <hr>
      </form>

      <p class="hint">Demo accounts: Jason and Sam</p>
    `;
  }

  renderMenu() {
    const user = this.currentUser;

    this.screen.innerHTML = `
      <h1>Hello, ${this.escapeHtml(user.userName)}</h1>
      <p class="hint">Choose an option.</p>

      <div class="balance">
        <span>Account balance</span>
        <strong>${this.formatMoney(user.balance)}</strong>
      </div>

      <div class="menu">
        <button type="button" data-action="balance">Check balance</button>
        <button type="button" data-action="deposit">Deposit</button>
        <button type="button" data-action="withdraw">Withdraw</button>
        <button type="button" data-action="history">Transaction history</button>
        <button type="button" data-action="delete">Delete account</button>
        <button type="button" data-action="logout">Log out</button>
      </div>
    `;
  }

  escapeHtml(value) {
    const element = document.createElement("span");
    element.textContent = value;
    return element.innerHTML;
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    if (form.id === "login-form") {
      const name = String(data.get("name")).trim();
      const account = this.accounts.find(
        (user) => user.userName.toLowerCase() === name.toLowerCase()
      );

      if (!account) {
        this.showAlert(
          "Account not found. Check the name or create an account."
        );
        return;
      }

      this.currentUser = account;
      this.renderMenu();
    }

    if (form.id === "create-form") {
      const name = String(data.get("name")).trim();
      const balance = Number(data.get("balance"));

      if (!name || !Number.isFinite(balance) || balance < 0) {
        this.showAlert(
          "Enter a valid name and a starting balance of $0 or more."
        );
        return;
      }

      if (
        this.accounts.some(
          (user) => user.userName.toLowerCase() === name.toLowerCase()
        )
      ) {
        this.showAlert("An account with that name already exists.");
        return;
      }

      const account = new BankUser(name, balance);
      this.accounts.push(account);
      this.showAlert(`Account created for ${name}.`);
      this.currentUser = account;
      this.renderMenu();
    }

    if (form.id === "amount-form") {
      const amount = Number(data.get("amount"));

      try {
        if (form.dataset.action === "deposit") {
          this.currentUser.deposit(amount);
          this.showAlert(`Deposit successful: ${this.formatMoney(amount)}`);
        } else {
          this.currentUser.withdraw(amount);
          this.showAlert(`Withdrawal successful: ${this.formatMoney(amount)}`);
        }
        this.renderMenu();
      } catch (error) {
        this.showAlert(error.message);
      }
    }
  }

  renderAmountForm(action) {
    const label = action === "deposit" ? "Deposit" : "Withdraw";
    this.screen.innerHTML = `
      <h1>${label}</h1>
      <p class="hint">Current balance: ${this.formatMoney(this.currentUser.balance)}</p>
      <form id="amount-form" data-action="${action}">
        <label for="amount">Amount in dollars</label>
        <input id="amount" name="amount" type="number"
          min="0.01" step="0.01" required />
        <button type="submit">${label}</button>
        <button type="button" data-action="menu">Back to main menu</button>
      </form>
    `;
  }

  renderHistory() {
    const transactions = this.currentUser.transactions;

    const rows = transactions.length
      ? transactions
          .map(
            (transaction) => `
          <li>${transaction.type}: ${this.formatMoney(transaction.amount)}
            — ${transaction.date.toLocaleString()}</li>
        `
          )
          .join("")
      : "<li>No transactions yet.</li>";

    this.screen.innerHTML = `
      <h1>Transaction history</h1>
      <ul>${rows}</ul>
      <button type="button" data-action="menu">Back to main menu</button>
    `;
  }

  handleClick(event) {
    const action = event.target.dataset.action;
    if (!action) return;

    if (action === "balance") {
      this.showAlert(
        `Your balance is ${this.formatMoney(this.currentUser.balance)}.`
      );
    } else if (action === "deposit" || action === "withdraw") {
      this.renderAmountForm(action);
    } else if (action === "history") {
      this.renderHistory();
    } else if (action === "menu") {
      this.renderMenu();
    } else if (action === "logout") {
      this.renderLogin();
    } else if (action === "delete") {
      const confirmed = window.confirm(
        `Delete the account for ${this.currentUser.userName}? This cannot be undone.`
      );

      if (confirmed) {
        this.accounts = this.accounts.filter(
          (user) => user !== this.currentUser
        );
        this.showAlert("Account deleted.");
        this.renderLogin();
      }
    }
  }

  start() {
    this.screen.addEventListener("submit", (event) => this.handleSubmit(event));
    this.screen.addEventListener("click", (event) => this.handleClick(event));
    this.renderLogin();
  }
}

new BankService("JS Bank").start();
