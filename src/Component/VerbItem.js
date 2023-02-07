import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default class VerbItem extends React.Component
{
  render(){
    const verb = this.props.verb
    return(
      <View style={styles.box}>
        <Text style={styles.title}>{verb.Infinitive}</Text>
        <Text><b>Traduction:</b> {verb.French}</Text>
        <Text><b>Preterit:</b> {verb.SimplePast}</Text>
        <Text><b>Participe passé:</b> {verb.PastParticiple}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    top: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5, 
    shadowRadius: 10
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5
  }
})