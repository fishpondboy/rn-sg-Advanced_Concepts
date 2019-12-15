import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-14b4a.cloudfunctions.net' 

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = () => {
      axios.post(`${ROOT_URL}/createUser`,{
          phone: this.state.phone
      })
      .then(()={
          axios.post(`${ROOT_URL}/requestOnTimePassword`, {phone: this.state.phone})
      })      
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Input
            label='Enter Phone Number'
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSubmit} title='Sumbit' />
      </View>
    );
  }
}

export default SignUpForm;
