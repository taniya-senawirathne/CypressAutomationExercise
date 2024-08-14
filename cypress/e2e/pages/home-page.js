import("cypress-xpath");

class homePage {
  ele_HomePage() {
    return cy.get('img[alt="Website for automation practice"]');
  }

  lnk_MainTab(tabName) {
    return cy.xpath(`//a[contains(text(),"${tabName}")]`);
  }

  /* A method to navigate to URL */
  navigate(url) {
    cy.visit(url);
  }

  /* A method to verify Home page logo */
  verifyHomePage() {
    this.ele_HomePage().should("be.visible");
  }

  /* A method to cick on mani tab*/
  clickOnProductTab(mainTabName) {
    this.lnk_MainTab(`${mainTabName}`).click();
  }

  /* A mehtod to verify the URL */
  verifyUrl(url) {
    cy.url().should("include", `${url}`);
  }
}
export default new homePage();
