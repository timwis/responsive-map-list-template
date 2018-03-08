const toggleBtnEl = document.querySelector('.toggle')
const listEl = document.querySelector('.list')
const mapEl = document.querySelector('.map')

// When user clicks "toggle" button, scroll up or down, depending
// on whether the toggle button is currently scrolled near top or bottom
toggleBtnEl.addEventListener('click', () => {
  const viewportOffset = toggleBtnEl.getBoundingClientRect()
  const containerHeight = toggleBtnEl.parentNode.clientHeight
  const containerMidPoint = containerHeight / 2
  const isScrolledUp = (viewportOffset.top >= containerMidPoint)
  const scrollOpts = { behavior: 'smooth' }
  if (isScrolledUp) {
    listEl.scrollIntoView(scrollOpts)
  } else {
    mapEl.scrollIntoView(scrollOpts)
  }
})
