import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PostImage({ title, date, url, explanation, btnTitle = "View" }) {
  const {navigate} = useNavigation();

  function handleViewPress() {
    navigate("Detail", { title, date, url, explanation });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.btnContainer}>
        <Pressable onPress={handleViewPress}>
          <Text style={styles.btnText}>{btnTitle}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  date: {
    color: "#fff",
  },
  btnContainer: {
    alignItems: "flex-end",
  },

  btnText: {
    color: "rgba(112, 105, 246, 0.8)",
  },
});
export default PostImage;
