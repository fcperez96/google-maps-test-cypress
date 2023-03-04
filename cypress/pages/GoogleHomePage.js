class GoogleHomePage {

    navigate() {
        cy.visit('/')
    }

    enterMapsInSearchBox() {
        cy.get('[name="q"]')
            .clear()
            .type('maps')
        return this
    }

    submitSearch() {
        cy.get('form')
            .submit()
    }

    goToGoogleMaps(){
        cy.xpath('(//*[contains(text(), "Google Maps")])[1]')
        .click()
    }

}
export default GoogleHomePage