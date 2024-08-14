class ShoppinCartPage {
  lnk_ProceedToCheckOut() {
    return cy.get('a:contains("Proceed To Checkout")');
  }

  lbl_PopUpContent() {
    return cy.get(
      'p:contains("Register / Login account to proceed on checkout.")'
    );
  }

  lnk_LoginRgister() {
    return cy.xpath(
      '//p[text()="Register / Login account to proceed on checkout."]/../p/a[@href="/login"]'
    );
  }

  /* Click on Proceed to checkout */
  clcikOnProceedToCheckOut() {
    this.lnk_ProceedToCheckOut().click();
  }

  /* A method to verifyCheckOutPopUp */
  VerifyCheckOutPopup() {
    this.lbl_PopUpContent().should("be.visible");
    this.lnk_LoginRgister().should("be.visible");
  }
}
export default new ShoppinCartPage();
