import { Controller } from "@hotwired/stimulus"
import { getDistance, convertDistance } from "geolib"
import { isEmpty } from "lodash-es"

// Connects to data-controller="geolocation"
export default class extends Controller {
  static targets = ['property']
  
  connect() {
    if(isEmpty(this.element.dataset.latitude) && isEmpty(this.element.dataset.longitude)) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.setUserCoordinates(position.coords);
      });
    } 

    this.setDistanceText();
  }

  setDistanceText() {
    this.propertyTargets.forEach((propertyTarget) => {
      let distanceFrom = getDistance(
        this.getUserCoordinates(),
        { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude }
      );

      propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} Km away`;
    });
  }

  getUserCoordinates() {
    return {
      latitude: this.element.dataset.latitude,
      longitude: this.element.dataset.longitude
    }
  }

  setUserCoordinates(position) {
    this.element.dataset.latitude = position.coords.latitude
    this.element.dataset.longitude = position.coords.longitude
  }
}

