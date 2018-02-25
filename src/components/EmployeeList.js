import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // -  nextProps are the next set of props that this component
    //    will be rendered with
    // -  this.props is still the old set of props
    // so here we get access to both set of props, new and old
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //this.dataSource = ds.cloneWithRows(this.props.employees);
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    // the end result of return below is an object like:
    // {shift: ‘Monday’, name: ‘Steve’, Phone: ‘555-555-5555’, id: ‘qwer123412341fsdfa’}
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
