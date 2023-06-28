class WorkFlowPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.productItem = '.inventory_item';
    this.addToCartButton = '.btn_primary.btn_inventory';
    this.cartIcon = '.shopping_cart_link';
    this.checkoutButton = '#checkout';
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.zipCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async selectProductAndAddToCart() {
    const product = await this.page.$(this.productItem);
    await product.click();
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }

  async fillCheckoutForm(firstName, lastName, zipCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.zipCodeInput, zipCode);
    await this.page.click(this.continueButton);
  }

  async confirmPurchase() {
    await this.page.click(this.finishButton);
  }
}

module.exports = WorkFlowPage;
