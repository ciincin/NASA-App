const { View, Text, Image, StyleSheet, Platform } = require("react-native")

function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View styles={styles.rigthContainer}>
                <Image source={require("../../../assets/nasa-logo.png")} style={styles.image}/>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
container:{
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS ==="android" && 30
},
leftContainer:{
    flex:1,
    alignItems: "flex-start",
},
rigthContainer:{
    flex:1,
    alignItems: "flex-end",
},
title:{
    fontSize: 20,
    color: "#fff"
},
image:{
    width: 60,
    height:60,
}
})
export default Header