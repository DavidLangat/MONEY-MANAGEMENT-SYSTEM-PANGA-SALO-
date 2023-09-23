import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding1}>
      <Image
        style={[styles.page1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/page-15.png")}
      />
      <Image
        style={[styles.saving1Icon, styles.saving1IconLayout]}
        resizeMode="cover"
        source={require("../assets/saving-1.png")}
      />
      <Image
        style={styles.onboarding1Child}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Text style={[styles.saveYourMoney, styles.nextFlexBox]}>
        Save your money conveniently
      </Text>
      <Text
        style={[styles.get5Cashback, styles.nextFlexBox]}
      >{`Track and spend your money wisely `}</Text>
      <View style={styles.indicators}>
        <View style={styles.indicatorsChild} />
        <View style={[styles.indicatorsItem, styles.indicatorsLayout]} />
        <View style={[styles.indicatorsInner, styles.indicatorsLayout]} />
      </View>
      <Pressable
        style={[styles.signOutButton, styles.signLayout]}
        onPress={() => navigation.navigate("Onboarding21")}
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
        style={[styles.saving1Icon1, styles.saving1IconLayout]}
        resizeMode="cover"
        source={require("../assets/saving-1.png")}
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
  saving1IconLayout: {
    width: "74.67%",
    height: "24.88%",
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
    width: "12.5%",
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
  saving1Icon: {
    top: "20.94%",
    right: "12.8%",
    bottom: "54.19%",
    left: "12.53%",
  },
  onboarding1Child: {
    height: "57.88%",
    width: "125.33%",
    top: "52.09%",
    right: "-25.33%",
    bottom: "-9.98%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveYourMoney: {
    width: "70.67%",
    top: "60.1%",
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumblue_200,
    textAlign: "left",
    left: "8%",
    height: "7.02%",
  },
  get5Cashback: {
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
    width: "55%",
    right: "45%",
    backgroundColor: "#2a46ff",
    borderRadius: Border.br_9xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  indicatorsItem: {
    right: "22.5%",
    left: "65%",
  },
  indicatorsInner: {
    right: "0%",
    left: "87.5%",
  },
  indicators: {
    height: "0.62%",
    width: "10.67%",
    top: "90.64%",
    right: "81.33%",
    bottom: "8.74%",
    left: "8%",
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
  saving1Icon1: {
    top: "22.17%",
    right: "5.07%",
    bottom: "52.96%",
    left: "20.27%",
  },
  onboarding1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboarding1;
