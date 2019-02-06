// to use stopLoading and startLoading functions bind context of component to
// these functions
// example: stopLoading.bind(this), stopLoading.apply(this)
// sets isLoading state of component which the function invoked to false
export const stopLoading = function() {
  this.setState(() => ({ isLoading: false }))
}

// sets isLoading state of component which the function invoked to false
export const startLoading = function() {
  this.setState(() => ({ isLoading: true }))
}
