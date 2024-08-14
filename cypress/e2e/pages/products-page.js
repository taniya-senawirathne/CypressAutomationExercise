import("cypress-xpath");

class ProductsPage {
  ele_PageHeaders(headerName) {
    return cy.xpath(`//h2[text()="${headerName}"]`);
  }

  ele_CategoryCount() {
    return cy.xpath('//h4[@class="panel-title"]/a');
  }

  ele_categoryValue(index) {
    return cy.xpath(`(//h4[@class="panel-title"]/a)[${index}]`);
  }

  tf_Product() {
    return cy.get("#search_product");
  }

  btn_Search() {
    return cy.get("#submit_search");
  }

  lnk_AddToCart() {
    return cy.xpath(
      '(//div[@class="col-sm-4"]/div/div/div/a[text()="Add to cart"])[1]'
    );
  }

  lbl_AddedSuccess() {
    return cy.get('p:contains("Your product has been added to cart.")');
  }

  lnk_ViewCart() {
    return cy.xpath(
      '//p[text()="Your product has been added to cart."]/../p/a[@href="/view_cart"]'
    );
  }

  /* A method to verify the Product Page Headers */
  verifyTheSubHeaders(headerName) {
    this.ele_PageHeaders(`${headerName}`).should("be.visible");
  }

  /* A method to verify the Category details */
  getTheCategoryValuesFromUIAndVerify() {
    // Get the count of category elements
    this.ele_CategoryCount().then(($elements) => {
      const count = $elements.length;
      let categories = ["Women", "Men", "Kids"];

      // Verify that the number of categories in the UI matches the expected categories array
      expect(count).to.eq(categories.length);

      // Loop through each element and get its text
      for (let i = 0; i < count; i++) {
        let a = i + 1;
        this.ele_categoryValue(a)
          .invoke("text")
          .should("contain", categories[i]);
      }
    });
  }

  /* A method to searcha product */
  searchProduct(SerchProductValue) {
    this.tf_Product().type(SerchProductValue);
    this.btn_Search().click();
  }

  /* A method to click on add to cart in 1st serched option*/
  clickOnAddToCart() {
    this.lnk_AddToCart().click();
  }

  /* Verify Added Success popup*/
  VerifyTheAddedSuccessPoup() {
    this.lbl_AddedSuccess().should("be.visible");
    this.lnk_ViewCart().should("be.visible");
  }

  /* A method to click on View Cart */
  clickOnViewCart() {
    this.lnk_ViewCart().click();
  }
}
export default new ProductsPage();
