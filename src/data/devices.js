import { getIntFromValues, getMaskSums, getValuesFromInt } from '../utils/bitMask'

const deviceTypes = {
    tile: {
        id: 'tile',
        key: 0,
        label: 'empty tile',
    },
    source: {
        id: 'source',
        key: 1,
        label: 'Energy Source',
    },
    transformation: {
        id: 'transformation',
        key: 2,
        label: 'Energy Transformation',
    },
    creation: {
        id: 'creation',
        key: 3,
        label: 'Product Creation',
    },
    storage: {
        id: 'storage',
        key: 4,
        label: 'Energy Storage',
    },
    transportation: {
        id: 'transportation',
        key: 5,
        label: 'Energy Transportation',
    },
}

const deviceTypeMap = {
    0: deviceTypes.tile.id,
    1: deviceTypes.source.id,
    2: deviceTypes.transformation.id,
    3: deviceTypes.creation.id,
    4: deviceTypes.storage.id,
    5: deviceTypes.transportation.id,
}

export const getDeviceTypeByKey = (key) => deviceTypes[deviceTypeMap[key]]

const deviceData = {
    empty: {
        id: 'empty',
        key: 0,
        type: deviceTypes.tile.key,
        label: 'empty tile',
        asset: '[   ]',
        color: '#ccc',
        description: 'An empty tile...',
    },
    device_source: {
        id: 'device_source',
        key: 1,
        type: deviceTypes.source.key,
        label: 'Source Emitter',
        asset: 'src',
        color: '#f62dff',
        description: 'An Energy Source creates basic elemental energy by consuming source energy and outputting the selected element. An Energy Source can always only output one type of energy and only pure basic energy types.',
    },
    device_mixer: {
        id: 'device_mixer',
        key: 2,
        type: deviceTypes.transformation.key,
        label: 'Energy Mixer',
        asset: 'mix',
        color: '#1b5e7a',
        description: 'Energy Mixers can combine two types of energy into a joined energy type. There are different cycles that allow different  combinations and the energy mixer needs to be chosen accordingly (either separate devices or a setting on the device). Depending on the type of mix the amounts of channeled energy vary. The first element is always used in a proportion of 3 main to 2 sub element units.',
    },
    device_splitter: {
        id: 'device_splitter',
        key: 3,
        type: deviceTypes.transformation.key,
        label: 'Energy Splitter',
        asset: 'spl',
        color: '#24ffc0',
        description: 'Energy splitters can break up mixed energies into their components. This allows a mixed output over 2 lanes and can accept more of one input line as long as all input lines result in the same 2 output energies. For example a splitter can accept one line of each Mist (Air/Water) and Ice (Water/Air) and will output Water and Air separately.',
    },
    device_extractor: {
        id: 'device_extractor',
        key: 4,
        type: deviceTypes.creation.key,
        label: 'Energy Extractor',
        asset: 'ext',
        color: '#24ffc0',
        description: 'Using the energy extractor, the player can harvest generated elemental energy. Unless stored in an appropriate vessel, the energy will soon disperse.',
    },
    device_integrator: {
        id: 'device_integrator',
        key: 5,
        type: deviceTypes.storage.key,
        label: 'Energy Integrator',
        asset: 'int',
        color: '#ffbb15',
        description: 'The energy integrator allows to gather energy and will work like an accumulator that gathers energy that it can keep and store for a limited time while supplying to to adjacent devices that need to be powered by elemental energy.\n'
            + 'While directly feeding the correct type of energy into a target device will suffice for most cases, only by using an energy integrator it will be possible to reliably supply multiple devices and also  buffer the required energy to accommodate for smaller fluctuations that might otherwise undersupply the target device.\n'
            + 'Using energy integrators will allow higher and more stable effects / enchantments.',
    },
    device_target: {
        id: 'device_target',
        key: 6,
        type: deviceTypes.creation.key,
        label: 'Target Device',
        asset: 'trg',
        color: '#ffbb15',
        description: 'Target devices is a group of devices used for different effects. They can be set up for different effects that will be imbued into the item or spell or device and depending on their setup, they will require different amounts of energy while the type of energy largely depends on the desired effect.\n'
            + 'While it can suffice in some cases to directly feed the energy into a target device, using an energy integrator will allow for stronger and more stable effects while multiple target devices can be linked up to the same energy integrator.',
    },
    device_line: {
        id: 'device_line',
        key: 7,
        type: deviceTypes.transportation.key,
        label: 'Energy Line',
        asset: 'lin',
        color: '#ffbb15',
        description: 'Energy lines serve the purpose of transportations. The basic energy line allows a direct 1:1 connection of a source and a consuming device while there are multiple adjustments that can be made to change this setup. \n'
            + 'An energy line can have multiple variations/constellations',
    },
}

const deviceDataMap = {
    0: 'empty',
    1: deviceData.device_source.id,
    2: deviceData.device_mixer.id,
    3: deviceData.device_splitter.id,
    4: deviceData.device_extractor.id,
    5: deviceData.device_integrator.id,
    6: deviceData.device_target.id,
    7: deviceData.device_line.id,
}

export const getDeviceByKey = (key) => deviceData[deviceDataMap[key]]

const deviceBits = [
    { type: 4 },
    { key: 7 },
    { orientation: 3 },
    { io: 7 },
]

const deviceBitSums = getMaskSums(deviceBits)

export const getDeviceFromInt = (int) => {
    if (int === 0) {
        return {
            type: 0,
            key: 0,
            orientation: 0,
            io: 0,
        }
    }
    const {
        type, key, orientation, io,
    } = getValuesFromInt(int, deviceBits, deviceBitSums)
    return { key }
}

export const getIntFromDevice = (id) => {
    const { type, key } = deviceData[id]
    return getIntFromValues([type, key, 0, 0], deviceBitSums)
}

export default deviceData
