import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL =
  'https://us-central1-one-time-password-14b4a.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
    } catch (err) {
      console.log(err);
    }
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

        <View style={{ marginBottom: 10 }}>
          <Input
            label='Enter Code'
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button onPress={this.handleSubmit} title='Sumbit' />
      </View>
    );
  }
}

export default SignInForm;
