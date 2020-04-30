import React from 'react'
import { Text } from 'react-native'
import DefaultPage from '../../components/global/layout/DefaultPage'
import RockPaperScissorsLizardSpock from '../../components/other/RockPaperScissorsLizardSpock'

const SceneGameHome = () => (
    <DefaultPage>
        <Text>
            Game Home
        </Text>

        <RockPaperScissorsLizardSpock />
    </DefaultPage>
)

export default SceneGameHome
