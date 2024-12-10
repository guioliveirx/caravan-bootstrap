const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myCarouselElement = document.querySelector('#carousel-cities')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  ride: true
})