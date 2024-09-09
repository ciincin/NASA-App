import { Pressable, StyleSheet, Text, View } from "react-native";

function PostImage({title, date, onPress, btnTitle="View"}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.btnContainer}>
               <Pressable onPress={onPress} style={styles.btn}>
                    <Text style={styles.btnText}>{btnTitle}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(18,39,113,255)"
    },
    title:{

    },
    date:{

    },
    btnContainer:{

    },
    btn:{},
    btnText:{

    }
})
export default PostImage