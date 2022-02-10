import React from 'react'
import { StyleSheet, View } from 'react-native'
import FoodCardContainer, {
  CardType,
} from '../../components/foodCard/foodCardContainer'
import RealResultsListContainer from '../../components/resultsList/realResultsListContainer'
import SurveyContainer from '../../components/survey/surveyContainer'
import { theme } from '../../theme/theme'
import HomepageSection from './homepageSection'

const image = require('../../../assets/images/vegetables.jpeg')
const avocado = require('../../../assets/images/avocado.png')

const resultsHeader = 'Real people, real\results'

const BodyComponent = (): JSX.Element => {
  return (
    <View style={styles.shadowHider}>
      <View style={styles.main}>
        <FoodCardContainer
          variant={CardType.Rect}
          image={image}
          backgroundColor={theme.lightBlue}
          title={'Vegetables'}
        />
        <View style={{ height: 30 }} />
        <SurveyContainer />
        <View style={{ height: 30 }} />
        <FoodCardContainer
          variant={CardType.Square}
          image={avocado}
          backgroundColor={theme.lightGreen}
          title={'Keto Guide'}
        />

        <FoodCardContainer
          variant={CardType.Square}
          image={avocado}
          backgroundColor={theme.lightGreen}
          title={'Keto Guide'}
        />
        <HomepageSection
          title={resultsHeader}
          containerStyle={styles.resultSection}>
          <RealResultsListContainer />
        </HomepageSection>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: theme.white,
    paddingTop: 20,
    elevation: 4,
    shadowColor: theme.dark,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingBottom: 20,
  },
  shadowHider: {
    overflow: 'hidden',
    paddingTop: 1,

    backgroundColor: theme.headerMain,
  },
  resultSection: {
    marginTop: 60,
    height: 480,
  },
})

export default BodyComponent
