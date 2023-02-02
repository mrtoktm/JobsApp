import React, {useEffect, useState} from "react";
import { View,Text, useWindowDimensions, } from "react-native";
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import DetailCard from "../../components/DetailCard/DetailCard";

const JobsDetail = ({route}) => {
    const {id} = route.params;
    const {loading, error, data} = useFetch('https://www.themuse.com/api/public/jobs/' + id)

    if(loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    
    return(
        <View>
            <DetailCard detail={data} />
        </View>
    );
};

export default JobsDetail;