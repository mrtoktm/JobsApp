import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'darkgrey',
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    type: {},
    body_container: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        marginVertical: 3,
        alignSelf: 'baseline',
        borderRadius: 8,
    },
    location: {
        fontSize: 15,
        margin: 3,
        padding: 1,
    },
    bottom_container: {
        alignItems: 'flex-end',
    },
    level: {
        color: '#1e51a1',
    },
});