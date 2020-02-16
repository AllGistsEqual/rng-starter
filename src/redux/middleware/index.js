import coreMiddleware from './core'
import appMiddleware from './app'

export default [
    ...coreMiddleware,
    ...appMiddleware,
]
