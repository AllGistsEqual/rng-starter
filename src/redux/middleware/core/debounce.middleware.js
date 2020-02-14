const pending = {}

const debounceMiddleware = () => (next) => (action) => {
    const { debounce } = action.meta || {}

    if (!debounce) {
        next(action)
        return
    }

    if (pending[action.type]) {
        clearTimeout(pending[action.type])
    }

    pending[action.type] = setTimeout(() => {
        delete pending[action.type]
        next(action)
    }, debounce)
}

export default debounceMiddleware
