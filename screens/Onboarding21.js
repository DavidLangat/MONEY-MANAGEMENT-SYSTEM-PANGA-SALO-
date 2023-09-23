import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding21 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding2}>
      <Image
        style={[styles.page1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/page-15.png")}
      />
      <Image
        style={[styles.onboarding2Child, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Text style={[styles.secureYourMoney, styles.nextFlexBox]}>
        Secure your money for free 
      </Text>
      <Text style={[styles.getTheMost, styles.nextFlexBox]}>
        Get the most secure finance app ever and enjoy it.
      </Text>
      <View style={styles.indicators}>
        <Image
          style={styles.indicatorsChild}
          resizeMode="cover"
          source={require("../assets/rectangle-241.png")}
        />
        <View style={[styles.indicatorsItem, styles.indicatorsLayout]} />
        <View style={[styles.indicatorsInner, styles.indicatorsLayout]} />
      </View>
      <Pressable
        style={[styles.signOutButton, styles.signLayout]}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <View style={[styles.signOutButtonChild, styles.signLayout]} />
        <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={styles.rightArrow1} />
      <Image
        style={styles.safetyBox1}
        resizeMode="cover"
        source={require("../assets/safety-box-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nextFlexBox: {
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
    width: 153,
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
    top: "52.09%",
    right: "-25.33%",
    bottom: "-9.98%",
    left: "0%",
  },
  secureYourMoney: {
    top: "60.1%",
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumblue_200,
    textAlign: "left",
    left: "8%",
    width: "76.8%",
    height: "7.02%",
  },
  getTheMost: {
    top: "70.57%",
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlueviolet,
    left: "8%",
    width: "76.8%",
    height: "7.02%",
  },
  indicatorsChild: {
    width: "56.41%",
    right: "21.79%",
    left: "21.79%",
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
    right: "0%",
    left: "87.18%",
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
  next: {
    top: 22,
    left: 18,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratRegular,
    width: 65,
    height: 28,
    color: Color.colorMediumblue_200,
    textAlign: "left",
  },
  vectorIcon: {
    height: "31.64%",
    width: "17.47%",
    top: "34.72%",
    right: "10.64%",
    bottom: "33.64%",
    left: "71.9%",
  },
  signOutButton: {
    top: 702,
    left: 192,
  },
  rightArrow1: {
    top: 394,
    left: 173,
    width: 28,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  safetyBox1: {
    top: 165,
    left: 94,
    width: 187,
    height: 202,
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

export default Onboarding21;
