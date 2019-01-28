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

export const voteCountToPercentage = ({ optionOneCount, optionTwoCount }) => {
  const totalVotes = optionOneCount + optionTwoCount
  const optionOnePercentage = (optionOneCount / totalVotes) * 100
  const optionTwoPercentage = 100 - optionOnePercentage

  return {
    optionOnePercentage,
    optionTwoPercentage
  }
}