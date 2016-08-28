import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/home'
import HomeView from '../components/HomeView'

const mapStateToProps = state => ({
  isLoading: state.home.isLoading,
  business: state.home.business
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)

