import GoogleHomePage from "../pages/GoogleHomePage"
import GoogleMapsPage from "../pages/GoogleMapsPage"

describe('Verify Google Maps functionality', () => {
  it('It should show the location of an address on the map', () => {
    const google = new GoogleHomePage()
    const googleMaps = new GoogleMapsPage()
    const address = '1600 Amphitheatre Pkwy, Mountain View, CA 94043, EE. UU.'
    google.navigate()
    google.enterMapsInSearchBox()
    google.submitSearch()
    google.goToGoogleMaps()
    googleMaps.verifyCorrectUrl()
    googleMaps.enterAddressInSearchBox(address)
    googleMaps.submitSearch()
    googleMaps.zoomIn()
    googleMaps.zoomOut()
    googleMaps.verifySuccessfulSearch(address)
  })
})