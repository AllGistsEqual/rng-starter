import {
    INIT_APPLICATION,
    UPDATE_APPLICATION_VERSION,
} from '../actions/application.actions'

const initialState = {
    status: false, // needs to be set to false on load/rehydrate of store
    version: "0.0.0",
    name: undefined,
    lastCheck: undefined,
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APPLICATION:
        case UPDATE_APPLICATION_VERSION: {
            const { version, name, timestamp } = action.payload
            return {
                status: true,
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
