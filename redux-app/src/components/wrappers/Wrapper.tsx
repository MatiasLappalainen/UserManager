import { connect } from 'react-redux'
import { onIncrement, onDecrement, fetchUser, fetchDelete } from '../../actions/'
import App from '../../App'

const mapStateToProps = (state: any) =>{
  return {
    count: state.count,
    data: {     
         data: state.userReducer.data
    }
  }
}



const mapDispatchToProps =  (dispatch: any) => {
  return {
    onIncrement: () => dispatch(onIncrement()),
    onDecrement: () => dispatch(onDecrement()),
    fetchUser: () => dispatch(fetchUser()),
    fetchDelete: (id: any) => dispatch(fetchDelete(id)),
    dispatch
  }
}

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export default Wrapper;
