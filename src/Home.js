import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  FlatList, 
  StatusBar
} from "react-native";
import VerbItem from "./Component/VerbItem";
import jsondata from '../data.json';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      searching: false,
      showList: false,
      verbs: [],
      searchedVerbs: []
    };
  }

  componentDidMount() {
    this.setState({verbs: jsondata});
    console.log(jsondata)
  }

  bodyView = () => {
    if (!this.state.showList)
    {
      return this.welcomeView();
      // return this.flatList();
    }
    else
    {
      return this.flatList();
    }
  }

  welcomeView = () => {
    return (
      <View style={styles.bodyContainer}>
        <View style={{ width: "80%", margin: 20 }}>
          <Text style={{ textAlign: "center", fontSize: 22 }}>
            Bienvenue sur <b>IVerb</b> <br />
            La liste des verbes irreguliers anglais
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ showList: true })}
        >
          <Text style={styles.buttonText}>Afficher la liste</Text>
        </TouchableOpacity>
      </View>
    );
  }

  flatList = () => {
    return (
      <FlatList
        data={this.state.verbs}
        renderItem={({ item }) => <VerbItem verb={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%" }}
      />
    );
  }

  search = () => {
    if(this.state.keyword != ""){
      this.setState({
        showList: true,
        verbs: this.state.verbs.filter(verb => [
          verb.Infinitive.toLowerCase().includes(this.state.keyword.toLowerCase()), 
          verb.SimplePast.toLowerCase().includes(this.state.keyword.toLowerCase())
        ])
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* HEADER START*/}
        <ImageBackground
          source={require("../assets/UK-USA flag.jpg")}
          style={[styles.searchBox, styles.shadowed]}
          blurRadius={1}
        >
          <Text style={{
            fontSize: 26, fontWeight: "bold", color: "#1E305E",
          }}>
            I-VERB
          </Text>
          <TextInput
            style={[styles.textInput, styles.shadowed]}
            placeholder="Entrez le verbe à rechercher"
            placeholderTextColor="#888"
            value={this.state.keyword}
            onChangeText={(verb) => {
              this.setState({
                keyword: verb,
                verbs: jsondata
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, styles.shadowed]}
            onPress={() => this.search()}
          >
            <Text style={styles.buttonText}>Rechercher</Text>
          </TouchableOpacity>
          <StatusBar StatusBarStyle="light-content"></StatusBar>
        </ImageBackground>
        {/* HEADER END */}

        {/* BODY START */}
        {this.bodyView()}
        {/* BODY END */}
      </View>
    );
  }
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
    overflow: 'hidden',
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
    shadowRadius: 10
  },
  bodyContainer: {
    flex: 5, 
    width: "100%", 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
