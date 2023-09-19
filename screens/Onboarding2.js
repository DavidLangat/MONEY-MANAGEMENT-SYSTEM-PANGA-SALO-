import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding2}>
      <Image
        style={[styles.page1Icon, styles.page1IconLayout]}
        resizeMode="cover"
        source={require("../assets/page-15.png")}
      />
      <Image
        style={[styles.onboarding2Child, styles.page1IconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Text style={[styles.enjoyCommissionFreeStock, styles.getStartedFlexBox]}>
        Enjoy Commission-free stock trading.
      </Text>
      <Text style={[styles.onlineInvestingHas, styles.getStartedFlexBox]}>
        Online investing has never been easier than it is right now.
      </Text>
      <View style={styles.indicators}>
        <Image
          style={styles.indicatorsChild}
          resizeMode="cover"
          source={require("../assets/rectangle-24.png")}
        />
        <View style={[styles.indicatorsItem, styles.indicatorsLayout]} />
        <View style={[styles.indicatorsInner, styles.indicatorsLayout]} />
      </View>
      <Pressable
        style={[styles.signOutButton, styles.signLayout]}
        onPress={() => navigation.navigate("Welcome")}
      >
        <View style={[styles.signOutButtonChild, styles.signLayout]} />
        <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
          Get Started
        </Text>
      </Pressable>
      <View style={styles.rightArrow1} />
      <Image
        style={styles.trading1Icon}
        resizeMode="cover"
        source={require("../assets/trading-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page1IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getStartedFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  indicatorsLayout: {
    backgroundColor: Color.colorLightsteelblue_100,
    width: "12.82%",
    borderRadius: Border.br_9xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  signLayout: {
    height: 72,
    width: 211,
    position: "absolute",
  },
  page1Icon: {
    height: "6.43%",
    width: "14.13%",
    top: "9.6%",
    right: "42.95%",
    bottom: "83.97%",
    left: "42.92%",
  },
  onboarding2Child: {
    height: "57.88%",
    width: "125.33%",
    top: "51.6%",
    right: "-25.33%",
    bottom: "-9.48%",
    left: "0%",
  },
  enjoyCommissionFreeStock: {
    width: "84%",
    top: "60.1%",
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumblue_200,
    textAlign: "left",
    left: "8%",
    height: "7.02%",
  },
  onlineInvestingHas: {
    width: "76.8%",
    top: "70.57%",
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlueviolet,
    left: "8%",
    height: "7.02%",
  },
  indicatorsChild: {
    width: "56.41%",
    right: "0%",
    left: "43.59%",
    borderRadius: Border.br_9xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  indicatorsItem: {
    right: "87.18%",
    left: "0%",
  },
  indicatorsInner: {
    right: "66.67%",
    left: "20.51%",
  },
  indicators: {
    height: "0.62%",
    width: "10.4%",
    top: "90.64%",
    right: "81.33%",
    bottom: "8.74%",
    left: "8.27%",
    position: "absolute",
  },
  signOutButtonChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_9xl,
    borderStyle: "solid",
    borderColor: Color.colorMediumblue_200,
    borderWidth: 1,
  },
  getStarted: {
    top: 22,
    left: 46,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratRegular,
    width: 120,
    height: 28,
    color: Color.colorMediumblue_200,
    textAlign: "left",
  },
  signOutButton: {
    top: 702,
    left: 140,
  },
  rightArrow1: {
    top: 394,
    left: 173,
    width: 28,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  trading1Icon: {
    top: 165,
    left: 65,
    width: 246,
    height: 203,
    position: "absolute",
    overflow: "hidden",
  },
  onboarding2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboarding2;
