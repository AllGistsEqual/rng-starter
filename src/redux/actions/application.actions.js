export const APPLICATION = '[APPLICATION]'
export const INIT_APPLICATION = `${APPLICATION} Set Current values and timestamp for the application`
export const UPDATE_APPLICATION_DATA = `${APPLICATION} Update application data`
export const UPDATE_APPLICATION_VERSION = `${APPLICATION} Update application version`

export const initialiseApplication = (timestamp) => ({
    type: INIT_APPLICATION,
    payload: { timestamp },
})

export const updateApplicationData = (timestamp, version) => ({
    type: UPDATE_APPLICATION_DATA,
    payload: { timestamp, version },
})

export const updateApplicationVersion = (timestamp, version, name) => ({
    type: UPDATE_APPLICATION_VERSION,
    payload: { timestamp, version, name },
})

