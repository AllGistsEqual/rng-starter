import {
    INIT_APPLICATION,
    UPDATE_APPLICATION_DATA,
    updateApplicationData,
    updateApplicationVersion,
} from '../../actions/application.actions'
import semVerComp from '../../../utils/semVerComp'
import manifest from '../../../../app.json'

const { expo: { name, version: manifestVersion } } = manifest

const fakeBreakingChangeCheck = (oldVersion, targetVersion) => {
    const breakingChangeHistory = [] // get chronological list with version history
    const firstBreakingChange = breakingChangeHistory
        // compare old version with history
        .filter((changeVersion) => semVerComp(changeVersion, oldVersion) === 1)
        // get only first entry
        .shift()
    /* if breaking change is found between old and target version,
     * return the version of the first breaking change to signal that there are necessary
     * actions to adjust for breaking changes before the app can be started
     * else return the target version to signal that version number can be updated safely
     */
    return firstBreakingChange || targetVersion
}

const applicationMiddleware = ({ getState, dispatch }) => (next) => (action) => {
    switch (action.type) {
        case INIT_APPLICATION: {
            const { application: { version: oldVersion } } = getState()
            const { timestamp } = action.payload

            if (oldVersion === -1 || oldVersion === manifestVersion) {
                next({
                    ...action,
                    payload: {
                        ...action.payload,
                        name,
                        version: manifestVersion,
                    },
                })
                break
            }

            dispatch(updateApplicationData(timestamp, oldVersion))

            break
        }
        case UPDATE_APPLICATION_DATA: {
            const { version: oldVersion, timestamp } = action.payload

            const newVersion = fakeBreakingChangeCheck(oldVersion, manifestVersion)

            if (newVersion === manifestVersion) {
                dispatch(updateApplicationVersion(timestamp, newVersion, name))
                break
            }

            dispatch(updateApplicationData(timestamp, newVersion))

            break
        }
        default: {
            next(action)
        }
    }
}

export default applicationMiddleware
