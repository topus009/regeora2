import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions/AppActions';
import Calendar from '../components/Calendar';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //     this.add = this.add.bind(this);
  //     this.remove = this.remove.bind(this);
    
  //     this.state = {
  //     }
  //   }
  
  componentDidMount() {
    // this.props.PageActions.preload_List();
  }

  render() {

    return (
      <div>
        <Calendar/>
        <div className=''>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  }
};

const mapDispatchToProps = dispatch => {
 return {
   appActions: bindActionCreators(appActions, dispatch)
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)