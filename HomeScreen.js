import React from 'react';
import { Button, View, Text } from 'react-native';
import axios from 'axios';

export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: '',
            loading: false,
        }
      }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => this.buttonFunc()}
                />
            </View>
        );
    }

    buttonFunc(){
        //this.props.navigation.navigate('Details', 
        //{
        //    roll: 111
        //})
        this.goForAxios();
    }

    getData(){
        setTimeout(() => {
          console.log('Our data is fetched');
          this.setState({
            data: 'Hello WallStreet'
          })
        }, 10000)
      }
      
    shouldComponentUpdate(newProps){
        console.log(newProps);
        return true;
    }

    componentDidMount(){
        console.log('----------------dddd');
        //this.goForAxios();
    }

    goForAxios = () => {
        this.setState({
            data: false,
            loading: true,
        });
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log('getting data from axios', response.data);
                alert(response.data);
                
                this.setState({
                    loading: false,
                    data: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
}