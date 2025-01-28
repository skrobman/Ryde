import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // const region = {};
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        tintColor="black"
        mapType="mutedStandard"
        showsPointsOfInterest={false}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});

export default Map;
