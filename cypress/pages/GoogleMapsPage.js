class GoogleMapsPage {

    verifyCorrectUrl() {
        cy.url()
            .should('include', '/maps')
    }

    enterAddressInSearchBox(address) {
        cy.wait(2000)
        cy.get('#searchboxinput')
            .clear()
            .type(address)
        return this
    }

    submitSearch() {
        cy.get('#searchbox-searchbutton')
            .click()
    }

    zoomIn() {
        cy.wait(4000)
        cy.get('#widget-zoom-in')
            .click()
    }

    zoomOut() {
        cy.wait(4000)
        cy.get('#widget-zoom-out')
            .click()
    }

    verifySuccessfulSearch(address) {
        cy.xpath(`//span[contains(text(), '${address}')]`)
            .should('exist')
    }

}
export default GoogleMapsPage