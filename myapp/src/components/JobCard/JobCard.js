import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import Button from "../Button";
import styles from './JobCard.style';

const JobCard = ({ jobs, onSelect, onRemove }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.title}>{jobs.name}</Text>
                <Text style={styles.type}>{jobs.type}</Text>
                
                    <View style={styles.body_container}>
                        <Text style={styles.location}>{jobs.locations[0].name}</Text>
                    </View>
                    <View style={styles.bottom_container}>
                        <Text style={styles.level}>{jobs.levels[0].name}</Text>
                    </View>
                        {
                            onRemove && <Button text="Remove" onPress={onRemove} />
                        }
                </View>
        </TouchableWithoutFeedback>
    );
};

export default JobCard;