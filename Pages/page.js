var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");

class Page{
    constructor(){
        this.title="Page"
    }

    // GETTERS
    get searchBarInput(){ return browser.driver.findElement(by.css(".search input")); }
    get searchIcon(){ return browser.driver.findElement(by.css(".search button")); }
    get aboutUs(){ return browser.driver.findElement(by.linkText("About Us")); }
    get loginLink(){ return browser.driver.findElement(by.className("header-text")); }
    get privacyAndPolicy(){ return browser.driver.findElement(by.linkText("Privacy and Policy")); }
    get termsAndConditions(){ return browser.driver.findElement(by.linkText("Terms and Conditions")); }
    get loginButtonLocator(){ return ".header-text"; }
    get logoutButton(){ return browser.driver.findElement(by.css("div.login-acccount button")); }
    get createAnAccount(){ return browser.driver.findElement(by.css("a.header-text")); }
    get helperLocator(){ return ".helper"; }
    get paragraph(){ return browser.driver.findElement(by.css(".helper h2")); }
    get homeLink(){ return browser.driver.findElement(by.css(".header-nav :nth-child(1)"));}
    get shopLink(){ return browser.driver.findElement(by.css(".header-nav :nth-child(2)")); }
    get myAccountLink(){ return browser.driver.findElement(by.css(".my-account-header")); }
    get profileLink(){ return browser.driver.findElement(by.css(".dropdown-content :nth-child(1)")); }
    get yourBidsLink(){ return browser.driver.findElement(by.css(".dropdown-content :nth-child(2)")); }
    get settingsLink(){ return browser.driver.findElement(by.css(".dropdown-content :nth-child(3)")); }

    // ACTIONS 
    getDate(){
        console.log("This method gets date");
        return new Date();
    }
    
    clickOnLinks(element){
        console.log(`This method clicks on ${element} title`)
        switch(element){
            case data.createAnAccountTitle:
                return this.createAnAccount.click();
            
            case data.privacyAndPolictyTitle:
                return this.privacyAndPolicy.click();
            
            case data.termsAndConditionstitle:
                return this.termsAndConditions.click();

            case data.aboutUsParagraph:
                return this.aboutUs.click();

            case data.loginLinkTitle:
                return this.loginLink.click();

            case data.logoutButtonTitle:
                return this.logoutButton.click();
            
            case data.shopTitle:
                return this.shopLink.click();
            
            case data.homePageLink:
                return this.homeLink.click();
            
            case data.myAccountTitle:
                return browser.actions().mouseMove(this.myAccountLink).perform();
            
            case data.profileLinkTitle:
                return this.profileLink.click();

            case data.yourBidsTitle:
                return this.yourBidsLink.click();
            
            case data.settingsTitle:
                return this.settingsLink.click();
        }    
    }

    searchForItems(itemTitle,searchType){
        console.log("This method enters item in the search bar, and searches it");
        return this.searchBarInput.sendKeys(itemTitle)
            .then(() => {
                if(searchType === data.searchByClickOnIcon){
                    return this.searchIcon.click();
                }else if(searchType === data.searchByKeyEnter){
                    return this.searchBarInput.sendKeys(protractor.Key.ENTER);
                }
            })
    }

    openPageURL(url){
        console.log("This method opens URL");
        return browser.get(url)
    }
    
    getPageURL(){
        console.log("This method gets page URL");
        return browser.getCurrentUrl();
    }

    clickOnCategory(categoryNumber){
        console.log("This method clicks on chosen category");
        //Category number starts with 1
        return browser.driver.findElement(by.xpath(`//*[@id='root']/div/div[1]/div[2]/div[1]/div/div[1]/div/div[${categoryNumber}]/div/a`)).click();
    }   	                                        
    
    waitForLoginButton(){
        console.log("This method waits for link Login to show")
        return browser.wait(EC.presenceOf($(this.loginButtonLocator), 7000))
    }

    validateTitleParagraph(){
        console.log("This method validates title paragraph");
        return browser.wait(EC.presenceOf($(this.helperLocator)), 5000)
            .then(() => { return this.paragraph.getText() })
            .then((titleParagraph) => {
                if(titleParagraph === data.someTitleHere){
                    return expect(titleParagraph).toBe(data.someTitleHere);   
                }else if(titleParagraph === data.introductionParagraph){
                    return expect(titleParagraph).toBe(data.introductionParagraph);
                }else if(titleParagraph === data.aboutUsParagraph){
                    return expect(titleParagraph).toBe(data.aboutUsParagraph);
                }
            })
    }
}

module.exports = {
    Page: Page
}