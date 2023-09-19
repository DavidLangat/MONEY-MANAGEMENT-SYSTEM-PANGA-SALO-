import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const ProfileActive = () => {
  return (
    <View style={styles.profileactive}>
      <Image
        style={[styles.page1Icon, styles.page1IconLayout]}
        resizeMode="cover"
        source={require("../assets/page-1.png")}
      />
      <Image
        style={[styles.profileactiveChild, styles.page1IconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page1IconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  page1Icon: {
    height: "75.16%",
    width: "104.12%",
    top: "-1.64%",
    right: "-2.06%",
    bottom: "26.48%",
    left: "-2.06%",
  },
  profileactiveChild: {
    height: "15.63%",
    width: "19.64%",
    top: "84.38%",
    right: "41.07%",
    bottom: "0%",
    left: "39.29%",
  },
  profileactive: {
    width: 25,
    height: 32,
  },
});

export default ProfileActive;
