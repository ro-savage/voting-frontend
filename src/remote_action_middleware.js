export default function (store) {
  return function (next) {
    return function (action) {
      console.log('in midleware', action)
      return next(action)
    }
  }
}

// Could be written as: export default store => next => action => {}