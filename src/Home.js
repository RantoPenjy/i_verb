import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  FlatList
} from "react-native";
import VerbItem from "./Component/VerbItem";
import data from '../data.json';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showList: false,
      verbs: []
    };
  }

  componentDidMount() {
    this.setState({verbs: data});
  }

  bodyView = () => {
    if (!this.state.showList)
    {
      // return this.welcomeView();
      return this.flatList();
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
    return(
      <FlatList
        data={this.state.verbs}
        renderItem={({item}) => <VerbItem verb={item}/>}
        keyExtractor={(item) => item.id.toString()}
        style={{width: '100%'}}
      />
    )
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
          <TextInput
            style={[styles.textInput, styles.shadowed]}
            placeholder="Entrez le verbe à rechercher"
            placeholderTextColor="#888"
            value={this.state.search}
            onChangeText={(verb) => {
              this.setState({ search: verb });
            }}
          />
          <TouchableOpacity
            style={[styles.button, styles.shadowed]}
            onPress={() => console.log(this.state.search)}
          >
            <Text style={styles.buttonText}>Rechercher</Text>
          </TouchableOpacity>
          <StatusBar style="auto"></StatusBar>
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
    paddingTop: 30,
    paddingBottom: 30,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
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
