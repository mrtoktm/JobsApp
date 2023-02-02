import React, { useEffect, useState } from "react";
import {View, FlatList} from 'react-native';
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import JobCard from "../../components/JobCard/JobCard";

const Jobs = ({navigation}) => {
   // const [page, setPage] = useState(1);
    const {loading, error, data} = useFetch('https://www.themuse.com/api/public/jobs?page=1');
    
    const handleJob = (id) => {
        navigation.navigate('DetailJobs', {id})
    };


    const renderJob = ({item}) => <JobCard jobs={item} onSelect={() => handleJob(item.id)}/>

    return(
        <View>
            <FlatList data={data.results} renderItem={renderJob} />
        </View>
    );
};

export default Jobs;