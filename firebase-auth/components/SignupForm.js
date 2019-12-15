import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

class SignUpForm extends Component {
  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Input label='Enter Phone Number' />
        </View>
        <Button title='Sumbit' />
      </View>
    );
  }
}

export default SignUpForm;
