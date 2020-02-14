/* eslint no-console: ["error", { allow: ["time", "timeEnd", "log"] }] */
const measureMiddleware = () => (next) => (action) => {
    const isMeasured = action.meta && action.meta.measure

    if (isMeasured) {
        console.time(`# Measured: ${action.type}`)
        next(action)
        console.timeEnd(`# Measured: ${action.type}`)
    } else {
        next(action)
    }
}

export default measureMiddleware
