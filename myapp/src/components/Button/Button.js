import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

const Button = ({text, onPress, iconName}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={iconName} size={24} color='black' />
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;