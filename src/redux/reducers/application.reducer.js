import {
    INIT_APPLICATION,
    UPDATE_APPLICATION_VERSION,
} from '../actions/application.actions'

const initialState = {
    version: -1,
    name: undefined,
    lastCheck: undefined,
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APPLICATION:
        case UPDATE_APPLICATION_VERSION: {
            const { version, name, timestamp } = action.payload
            return {
                version,
                name,
                lastCheck: timestamp,
            }
        }
        default: {
            return state
        }
    }
}

export default applicationReducer
