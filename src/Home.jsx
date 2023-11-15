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
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [staticKeyword, setStaticKeyword] = useState("");
  const [showList, setShowList] = useState(false);
  const [verbs, setVerbs] = useState([]);
  const [searchedVerbs, setSearchedVerbs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const navigation = useNavigation();

  const navigateToAboutScreen = () => {
    navigation.navigate("About");
  };

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
    const hasResults = hasSearched && searchedVerbs.length > 0;
    const hasNoResults = hasSearched && searchedVerbs.length == 0;

    return (
      <>
        {hasResults && (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 10,
              alignSelf: "flex-start",
            }}
          >
            {data.length > 1
              ? `${data.length} résultats trouvés:`
              : "Un seul résultat trouvé:"}
          </Text>
        )}
        {!hasSearched && searchedVerbs.length == 0 && (
          <FlatList
            data={verbs}
            renderItem={({ item }) => <VerbItem verb={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{ width: "100%", marginBottom: 10 }}
          />
        )}
        {hasResults && (
          <>
            <FlatList
              data={searchedVerbs}
              renderItem={({ item }) => <VerbItem verb={item} />}
              keyExtractor={(item) => item.id.toString()}
              style={{ width: "100%", marginBottom: 10 }}
            />
            <TouchableOpacity
              style={[styles.button, styles.shadowed, { marginBottom: 10 }]}
              onPress={() => {
                setSearchedVerbs([]);
                setHasSearched(false);
              }}
            >
              <Text style={styles.buttonText}>Afficher toutes les verbes</Text>
            </TouchableOpacity>
          </>
        )}
        {hasNoResults && (
          <>
            <View style={styles.bodyContainer}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Il n'y a pas de résultats pour {staticKeyword}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.shadowed, { marginBottom: 10 }]}
              onPress={() => {
                setSearchedVerbs([]);
                setHasSearched(false);
              }}
            >
              <Text style={styles.buttonText}>Afficher toutes les verbes</Text>
            </TouchableOpacity>
          </>
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
      setStaticKeyword(keyword);
      setHasSearched(true);
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
          style={[
            styles.textInput,
            styles.shadowed,
            { borderColor: keyword === "" && hasSearched ? "red" : "#888" },
          ]}
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
        <TouchableOpacity
          style={[styles.absoluteButton, styles.shadowed]}
          onPress={navigateToAboutScreen}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>?</Text>
        </TouchableOpacity>
        <StatusBar StatusBarStyle="light-content"></StatusBar>
      </ImageBackground>
      {/* HEADER END */}

      {/* BODY START */}
      {bodyView()}
      {/* BODY END */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
  absoluteButton: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 20,
    right: 20,
    backgroundColor: "rgba(51, 51, 51, 0.7)",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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

export default HomeScreen;
