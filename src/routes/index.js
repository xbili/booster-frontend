import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
import Business from './Business'
import Lures from './Lures'
import Polls from './Polls'
import CreateLure from './CreateLure'
import CreatePoll from './CreatePoll'
import Transactions from './Transactions'
import Logout from './Logout'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Profile(store),
    Login(store),
    Business(store),
    CreateLure(store),
    CreatePoll(store),
    Transactions(store),
    Lures(store),
    Polls(store),
    Logout(store)
  ]
})

export default createRoutes

