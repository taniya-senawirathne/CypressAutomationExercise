import homePage from "../pages/home-page";
import productsPage from "../pages/products-page";
import shoppingCartPage from "../pages/shopping-cart-page";

describe("Search Product and Checkout", () => {
  it("Verify Product Page", () => {
    homePage.navigate("/");
    homePage.verifyHomePage();
    homePage.clickOnProductTab("Products");
    homePage.verifyUrl("/products");
    productsPage.verifyTheSubHeaders("Category");
    productsPage.verifyTheSubHeaders("Brands");
    productsPage.verifyTheSubHeaders("All Products");
    productsPage.getTheCategoryValuesFromUIAndVerify();
  });

  it("Search Product and Checkout", () => {
    homePage.navigate("/");
    homePage.verifyHomePage();
    homePage.clickOnProductTab("Products");
    homePage.verifyUrl("/products");
    productsPage.verifyTheSubHeaders("All Products");
    productsPage.searchProduct("Dress");
    productsPage.verifyTheSubHeaders("Searched Products");
    productsPage.clickOnAddToCart();
    productsPage.VerifyTheAddedSuccessPoup();
    productsPage.clickOnViewCart();
    homePage.verifyUrl("/view_cart");
    shoppingCartPage.clcikOnProceedToCheckOut();
    shoppingCartPage.VerifyCheckOutPopup();
  });
});
