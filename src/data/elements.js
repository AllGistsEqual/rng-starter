export const elementTypes = {
    mundane: {
        id: 'mundane',
        key: 0,
        label: 'no element',
        description: 'XXXXXX',
    },
    primary: {
        id: 'primary',
        key: 1,
        label: 'Primary Element',
        description: 'XXXXXX',
    },
    consuming: {
        id: 'consuming',
        key: 2,
        label: 'Consuming Element',
        description: 'XXXXXX',
    },
    feeding: {
        id: 'feeding',
        key: 3,
        label: 'Feeding Element',
        description: 'XXXXXX',
    },
    opposing: {
        id: 'opposing',
        key: 4,
        label: 'Opposing Element',
        description: 'XXXXXX',
    },
    celestial: {
        id: 'celestial',
        key: 5,
        label: 'Celestial Element',
        description: 'XXXXXX',
    },
}

const elementTypeMap = {
    0: elementTypes.mundane.id,
    1: elementTypes.primary.id,
    2: elementTypes.consuming.id,
    3: elementTypes.feeding.id,
    4: elementTypes.opposing.id,
    5: elementTypes.celestial.id,
}

export const getElementTypeByKey = (key) => elementTypes[elementTypeMap[key]]

export const elementData = {
    no_element: {
        id: 'no_element',
        key: 0,
        type: elementTypes.primary.id,
        label: 'XXXXXXX',
    },
    element_wind: {
        id: 'element_wind',
        key: 1,
        type: elementTypes.primary.id,
        label: 'XXXXXXX',
    },
    element_fire: {
        id: 'element_fire',
        key: 2,
        type: elementTypes.primary.id,
        label: 'XXXXXXX',
    },
    element_earth: {
        id: 'element_earth',
        key: 3,
        type: elementTypes.primary.id,
        label: 'XXXXXXX',
    },
    element_water: {
        id: 'element_water',
        key: 4,
        type: elementTypes.primary.id,
        label: 'XXXXXXX',
    },
    element_lightning: {
        id: 'element_lightning',
        key: 5,
        type: elementTypes.consuming.id,
        label: 'XXXXXXX',
    },
    element_magma: {
        id: 'element_magma',
        key: 6,
        type: elementTypes.consuming.id,
        label: 'XXXXXXX',
    },
    element_wood: {
        id: 'element_wood',
        key: 7,
        type: elementTypes.consuming.id,
        label: 'XXXXXXX',
    },
    element_ice: {
        id: 'element_ice',
        key: 8,
        type: elementTypes.consuming.id,
        label: 'XXXXXXX',
    },
    element_mist: {
        id: 'element_mist',
        key: 9,
        type: elementTypes.feeding.id,
        label: 'XXXXXXX',
    },
    element_plasma: {
        id: 'element_plasma',
        key: 10,
        type: elementTypes.feeding.id,
        label: 'XXXXXXX',
    },
    element_steel: {
        id: 'element_steel',
        key: 11,
        type: elementTypes.feeding.id,
        label: 'XXXXXXX',
    },
    element_spore: {
        id: 'element_spore',
        key: 12,
        type: elementTypes.feeding.id,
        label: 'XXXXXXX',
    },
    element_levitas: {
        id: 'element_levitas',
        key: 13,
        type: elementTypes.opposing.id,
        label: 'XXXXXXX',
    },
    element_push: {
        id: 'element_push',
        key: 14,
        type: elementTypes.opposing.id,
        label: 'XXXXXXX',
    },
    element_gravitas: {
        id: 'element_gravitas',
        key: 15,
        type: elementTypes.opposing.id,
        label: 'XXXXXXX',
    },
    element_pull: {
        id: 'element_pull',
        key: 16,
        type: elementTypes.opposing.id,
        label: 'XXXXXXX',
    },
    element_void: {
        id: 'element_void',
        key: 17,
        type: elementTypes.celestial.id,
        label: 'XXXXXXX',
    },
    element_aether: {
        id: 'element_aether',
        key: 18,
        type: elementTypes.celestial.id,
        label: 'XXXXXXX',
    },
}

const elementDataMap = {
    0: elementData.no_element.id,
    1: elementData.element_wind.id,
    2: elementData.element_fire.id,
    3: elementData.element_earth.id,
    4: elementData.element_water.id,
    5: elementData.element_lightning.id,
    6: elementData.element_magma.id,
    7: elementData.element_wood.id,
    8: elementData.element_ice.id,
    9: elementData.element_mist.id,
    10: elementData.element_plasma.id,
    11: elementData.element_steel.id,
    12: elementData.element_spore.id,
    13: elementData.element_levitas.id,
    14: elementData.element_push.id,
    15: elementData.element_gravitas.id,
    16: elementData.element_pull.id,
    17: elementData.element_void.id,
    18: elementData.element_aether.id,
}

export const getElementByKey = (key) => elementData[elementDataMap[key]]

export default elementData
