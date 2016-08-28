import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'profile',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Profile = require('./components/ProfileView').default
      // const reducer = require('./modules/profile').default
      //
      // injectReducer(store, { key: 'profile', reducer })
      
      cb(null, Profile)
    }, 'profile')
  }
})

