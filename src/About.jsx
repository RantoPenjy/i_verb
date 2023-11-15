import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native-web";

const AboutScreen = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>I'VERB</Text>
        <Text style={styles.text}>
          <span style={{ fontFamily: "Archivo" }}>I'VERB</span> est une simple
          application de test dédiée à la listage et à la recherche de verbes
          irréguliers anglais avec ses traductions.
        </Text>
        <Text style={styles.text}>
          Conçue dans un contexte d'apprentissage du développement mobile, cette
          application offre une interface simple et intuitive.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", marginBottom: 10, width: "100%" },
            ]}
          >
            Concepteur et développeur:
          </Text>
          <Text style={[styles.text, { width: "100%" }]}>
            RAKOTONDRAMANANA Tsilavo Ranto Niaina
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", marginBottom: 10, width: "100%" },
            ]}
          >
            Pour une collaboration:
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handlePress("https://github.com/RantoPenjy")}
            >
              <Image
                style={styles.socialIcon}
                source={require("../assets/github.png")}
              />
            </TouchableOpacity>
            <Text style={styles.linkText}>github.com/RantoPenjy</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>
                handlePress("https://facebook.com/rantomanana.rakoto")
              }
            >
              <Image
                style={styles.socialIcon}
                source={require("../assets/facebook.png")}
              />
            </TouchableOpacity>
            <Text style={styles.linkText}>facebook.com/rantomanana.rakoto</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>
                handlePress("mailto:rakotondramanana.rantoniaina@gmail.com")
              }
            >
              <Image
                style={styles.socialIcon}
                source={require("../assets/mail.png")}
              />
            </TouchableOpacity>
            <Text style={styles.linkText}>
              rakotondramanana.rantoniaina@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Archivo Black",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  socialButton: {
    marginRight: 10,
    borderRadius: "50%",
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  linkText: {
    fontSize: 16,
    textAlignVertical: "center",
  },
});

export default AboutScreen;
