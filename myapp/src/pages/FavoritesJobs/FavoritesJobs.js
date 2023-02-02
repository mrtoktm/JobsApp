import React from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";
import styles from './FavoritesJobs.style';

const FavoritesJobs = () => {
    const favJob = useSelector(state => state.favJobList);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch({type: "REMOVE_FAV_JOB", payload: {id}});
    }

    const renderJobs = ({item}) => (<JobCard jobs={item} 
    onRemove ={() => handleRemove(item.id)}/>)
    return(
        <View style={styles.container}>
            <FlatList keyExtractor={(item) =>  item.id} 
            data={favJob} 
            renderItem={renderJobs}/>
        </View>
    )
};

export default FavoritesJobs;