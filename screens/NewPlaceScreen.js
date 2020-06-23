import React, { useState} from 'react';
import { ScrollView, View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/actions/places';
import ImagePicker from '../components/ImagePicker';

const NewPlacesScreen = props => {
    const [ titleValue, setTitleValue ] = useState('');
    const [ selectedImage, setSelectedImage ] = useState();

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text);
    };

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, selectedImage));
        props.navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={titleChangeHandler} 
                    value={titleValue} 
                />
                <ImagePicker 
                    onImageTake={imageTakenHandler}
                />
                <Button 
                    title="Save Place" 
                    color={Colors.primary} 
                    onPress={savePlaceHandler} 
                />
            </View>
        </ScrollView>
    );
};

NewPlacesScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlacesScreen;