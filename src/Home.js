import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  FlatList,
  StatusBar,
} from "react-native";
import VerbItem from "./Component/VerbItem";
import jsondata from "../data.js";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [showList, setShowList] = useState(false);
  const [verbs, setVerbs] = useState([]);
  const [searchedVerbs, setSearchedVerbs] = useState([]);

  useEffect(() => {
    setVerbs(jsondata);
  }, []);

  const bodyView = () => {
    return !showList ? welcomeView() : flatList();
  };

  const welcomeView = () => {
    return (
      <View style={styles.bodyContainer}>
        <View style={{ width: "80%", margin: 20 }}>
          <Text style={{ textAlign: "center", fontSize: 22 }}>
            Bienvenue sur <b>I'Verb</b> <br />
            La liste des verbes irréguliers anglais
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.shadowed]}
          onPress={() => setShowList(true)}
        >
          <Text style={styles.buttonText}>Afficher la liste</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const flatList = () => {
    const data = searchedVerbs.length > 0 ? searchedVerbs : verbs;

    return (
      <>
        <FlatList
          data={data}
          renderItem={({ item }) => <VerbItem verb={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={{ width: "100%", marginBottom: 10 }}
        />
        {searchedVerbs.length > 0 && (
          <TouchableOpacity
            style={[styles.button, styles.shadowed, { marginBottom: 10 }]}
            onPress={() => {
              setSearchedVerbs([]);
            }}
          >
            <Text style={styles.buttonText}>Afficher toutes les verbes</Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  const search = () => {
    if (keyword !== "") {
      setShowList(true);
      setSearchedVerbs(
        verbs.filter(
          (verb) =>
            verb.Infinitive.toLowerCase().includes(keyword.toLowerCase()) ||
            verb.SimplePast.toLowerCase().includes(keyword.toLowerCase()) ||
            verb.French.toLowerCase().includes(keyword.toLowerCase()),
        ),
      );
    } else {
      setSearchedVerbs([]);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER START*/}
      <ImageBackground
        source={require("../assets/UK-USA flag.jpg")}
        style={[styles.searchBox, styles.shadowed]}
        blurRadius={1}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#1E305E",
            textShadowColor: "#fff",
            textShadowOffset: { width: 0, height: 2 },
            textShadowOpacity: 0.5,
            textShadowRadius: 10,
          }}
        >
          I'VERB
        </Text>
        <TextInput
          style={[styles.textInput, styles.shadowed]}
          placeholder="Entrez le verbe à rechercher"
          placeholderTextColor="#888"
          value={keyword}
          onChangeText={(verb) => {
            setKeyword(verb);
            setVerbs(jsondata);
          }}
        />
        <TouchableOpacity
          style={[styles.button, styles.shadowed]}
          onPress={search}
        >
          <Text style={styles.buttonText}>Rechercher</Text>
        </TouchableOpacity>
        <StatusBar StatusBarStyle="light-content"></StatusBar>
      </ImageBackground>
      {/* HEADER END */}

      {/* BODY START */}
      {bodyView()}
      {/* BODY END */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchBox: {
    height: 170,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#1E305E",
    width: "80%",
    height: 40,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    padding: 10,
  },
  textInput: {
    width: "80%",
    height: 40,
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  shadowed: {
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  bodyContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
