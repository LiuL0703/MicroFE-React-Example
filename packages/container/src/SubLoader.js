
import AppManager from './AppManager';
import { connect } from 'react-redux';

export const subLoader = (name) => async () => {
  const App = await AppManager.loadSubApp('subApp')
  console.log({App, window})
  return connect(mapStateToProps, mapDispatchToProps)(App[name])
}
const mapStateToProps = state => ({
  sum: state.sum,
});

const mapDispatchToProps = dispatch => ({
  onAdd: num => dispatch({ type: 'ADD', value: num }),
});