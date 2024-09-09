import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function TodaysImage({ date, title, url, onPress, btnTitle = "View"}) {
 
    return (
        <View style={styles.container}>
            <Image source={{ uri: url }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.btnContainer}>
                <Pressable onPress={onPress}>
                    <Text style={styles.textBtn}>{btnTitle}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c449d",
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },
    image: {
        width: "100%",
        height: 190,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 32
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginVertical: 12,
        fontWeight: "bold",
    },
    date: {
        color: "#fff",
        fontSize: 16,
    },
    btnContainer: {
        alignItems: "flex-end"
    },
    textBtn:{
        color:"darkblue"
    }
})
export default TodaysImage