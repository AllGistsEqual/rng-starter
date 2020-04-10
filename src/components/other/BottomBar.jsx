import React from 'react'
import {
    StyleSheet, Text, View, TouchableWithoutFeedback,
} from 'react-native'
import * as RootNavigation from '../../navigation/RootNavigation'

const BottomBar = () => {
    const items = [
        {
            label: 'Home',
            link: 'GameHome',
        },
        {
            label: 'Tab 2',
            link: 'GameTab2',
        },
        {
            label: 'Tab 3',
            link: 'GameTab3',
        },
    ]
    return (
        <View style={styles.bottomBar}>
            {items.map((item) => (
                <TouchableWithoutFeedback
                    key={item.label}
                    onPress={() => RootNavigation.navigate(item.link)}
                >
                    <View style={styles.bottomBarItem}>
                        <Text style={styles.bottomBarText}>
                            {item.label}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomBarItem: {
        padding: 15,
    },
    bottomBarText: {
        color: 'white',
        flexGrow: 1,
    },
})

export default BottomBar
