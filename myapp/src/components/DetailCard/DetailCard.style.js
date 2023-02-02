import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
    },
    upper_container: {
        
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
        color: '#1e51a1'
    },
    location_info: {
        flexDirection: 'row',
        marginLeft: 5,
        paddingVertical: 5
    },
    location_title: {
        color: '#1e51a1',
        fontWeight: 'bold',
        fontSize: 16,
    },
    location: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    level_info: {
        flexDirection: 'row',
        marginLeft: 5,
        paddingVertical: 5,
    },
    level_title: {
        color: '#1e51a1',
        fontWeight: 'bold',
        fontSize: 16,
    },
    jobs_level: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    body_container: {
       // backgroundColor: 'orange',
        
    },
    jobs_title: {
        color: '#1e51a1',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 3,
    },
    detail_jobs: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#1e51a1',
        paddingHorizontal: 2,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginBottom: 20,
    },
});