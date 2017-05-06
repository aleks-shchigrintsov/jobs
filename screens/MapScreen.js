import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    };

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    _onRegionChangeComplete = region => {
        this.setState({ region });
    };

    _onButtonPress = () => {
        const { fetchJobs, navigation: { navigate } } = this.props;

        fetchJobs(this.state.region, () => {
            navigate('deck');
        });
    };

    render() {
        return !this.state.mapLoaded ? (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        ) : (
            <View style={{ flex: 1 }}>
                <MapView
                    region={this.state.region}
                    style={{ flex: 1 }}
                    onRegionChangeComplete={this._onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        large
                        title="Search This area"
                        backgroundColor="#009688"
                        icon={{ name: 'search'}}
                        onPress={this._onButtonPress}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
};

export default connect(null, actions)(MapScreen);
