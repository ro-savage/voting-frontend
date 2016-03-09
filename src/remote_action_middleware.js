export default function (socket) {
  return function (store) {
    return function (next) {
      return function (action) {
        console.log('in midleware', action)
        if (action.meta && action.meta.remote) {
          socket.emit('action', action);
        }
        return next(action)
      }
    }
  }
}

// Could be written as: export default socket => store => next => action => {}
