import React, { Component } from 'react';
import {View, Picker } from 'react-native';
import { CardSection, Input } from "./common";
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        value={this.props.name}
                        placeholder="Name"
                        onChangeText={value => this.props.employeeUpdate({ prop: "name", value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        value={this.props.phone}
                        placeholder="555-555-5555"
                        onChangeText={value => this.props.employeeUpdate({ prop: "phone", value })}
                    />
                </CardSection>
                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: "shift", value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}


export default connect(mapStateToProps, {employeeUpdate}) (EmployeeForm);