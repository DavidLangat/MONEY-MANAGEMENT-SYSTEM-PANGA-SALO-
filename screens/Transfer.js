import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Transfer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transfer}>
      <Image
        style={[styles.transferChild, styles.dark1Position]}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
      <View style={[styles.dark1, styles.dark1Position]}>
        <View style={styles.barsStatusBarIphoneD}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cellular-connection1.png")}
          />
          <View
            style={[styles.barsStatusBarIphoneX, styles.navArrow2IconPosition]}
          >
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.navigationBarLayout]}>
        <Text style={[styles.transactions, styles.textTypo1]}>Transfer</Text>
        <Image
          style={[styles.navArrow2Icon, styles.navArrow2IconPosition]}
          resizeMode="cover"
          source={require("../assets/navarrow-2.png")}
        />
      </View>
      <Text style={[styles.enterAmount, styles.toTypo]}>Enter Amount</Text>
      <Text style={[styles.to, styles.toTypo]}>To</Text>
      <Text style={[styles.text, styles.textTypo1]}>
        <Text style={styles.text1}>{`$ `}</Text>
        <Text style={styles.text2}>0</Text>
      </Text>
      <View style={styles.transferItem} />
      <View style={styles.scarlettParent}>
        <Text style={[styles.scarlett, styles.toTypo]}>Scarlett</Text>
        <Image
          style={styles.whiteIcon}
          resizeMode="cover"
          source={require("../assets/white8.png")}
        />
      </View>
      <View style={styles.numpad}>
        <View style={[styles.view, styles.viewLayout]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text3, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>4</Text>
        </View>
        <View style={[styles.view2, styles.viewLayout]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text5, styles.textTypo]}>7</Text>
        </View>
        <View style={[styles.view3, styles.viewLayout]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text6, styles.textTypo]}>.</Text>
        </View>
        <View style={[styles.view4, styles.viewPosition1]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.view5, styles.viewPosition1]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>6</Text>
        </View>
        <View style={[styles.view6, styles.viewPosition1]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>9</Text>
        </View>
        <Pressable
          style={[styles.pressable, styles.viewPosition1]}
          onPress={() => navigation.navigate("Confirmation")}
        >
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.childLayout]}
            locations={[0, 1]}
            colors={["rgba(73, 96, 249, 0.84)", "#1937fe"]}
            useAngle={true}
            angle={167.25}
          />
          <Image
            style={[styles.rightArrow1Icon, styles.navigationBarLayout]}
            resizeMode="cover"
            source={require("../assets/rightarrow-1.png")}
          />
        </Pressable>
        <View style={[styles.view7, styles.viewPosition]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text5, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text5, styles.textTypo]}>5</Text>
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>8</Text>
        </View>
        <View style={[styles.view10, styles.viewPosition]}>
          <View style={[styles.child, styles.childLayout]} />
          <Text style={[styles.text4, styles.textTypo]}>0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dark1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navArrow2IconPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  navigationBarLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  toTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  viewLayout: {
    height: 70,
    width: 89,
    left: 0,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_mid,
    height: 70,
    width: 89,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    top: 21,
    color: Color.colorMediumblue_200,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    position: "absolute",
  },
  viewPosition1: {
    left: 198,
    height: 70,
    width: 89,
    position: "absolute",
  },
  viewPosition: {
    left: 99,
    height: 70,
    width: 89,
    position: "absolute",
  },
  transferChild: {
    width: 375,
    height: 250,
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    right: "0%",
    bottom: "12.96%",
    left: "92.59%",
    position: "absolute",
  },
  wifiIcon: {
    height: "61.11%",
    width: "4.67%",
    top: "24.06%",
    right: "8.94%",
    bottom: "14.83%",
    left: "86.39%",
    position: "absolute",
  },
  cellularConnectionIcon: {
    height: "59.26%",
    width: "5.18%",
    top: "25.93%",
    right: "15.13%",
    bottom: "14.82%",
    left: "79.69%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorWhite,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
  },
  barsStatusBarIphoneD: {
    height: "40.91%",
    width: "87.28%",
    top: "29.55%",
    right: "4.08%",
    bottom: "29.55%",
    left: "8.64%",
    position: "absolute",
  },
  dark1: {
    width: 376,
    height: 44,
    overflow: "hidden",
  },
  transactions: {
    left: "56.81%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorWhite,
    top: "0%",
  },
  navArrow2Icon: {
    width: "11.27%",
    right: "88.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navigationBar: {
    top: 47,
    left: 30,
    width: 213,
  },
  enterAmount: {
    top: 184,
    left: 123,
    color: Color.colorMediumblue_200,
  },
  to: {
    top: 298,
    left: 177,
    color: Color.colorMediumblue_200,
  },
  text1: {
    color: Color.colorMediumblue_200,
  },
  text2: {
    color: "#b6bfff",
  },
  text: {
    top: 222,
    left: 159,
    fontSize: 36,
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    fontWeight: "700",
  },
  transferItem: {
    top: 282,
    left: 63,
    borderStyle: "solid",
    borderColor: Color.colorLavender,
    borderTopWidth: 1,
    width: 250,
    height: 1,
    position: "absolute",
  },
  scarlett: {
    top: 6,
    left: 42,
    color: Color.colorDarkslategray,
  },
  whiteIcon: {
    top: -14,
    left: -22,
    borderRadius: 12,
    width: 78,
    height: 78,
    position: "absolute",
  },
  scarlettParent: {
    top: 336,
    left: 132,
    width: 111,
    height: 34,
    position: "absolute",
  },
  child: {
    backgroundColor: Color.colorGhostwhite_200,
  },
  text3: {
    left: 39,
  },
  view: {
    top: 0,
  },
  text4: {
    left: 37,
  },
  view1: {
    top: 80,
  },
  text5: {
    left: 38,
  },
  view2: {
    top: 160,
  },
  text6: {
    left: 41,
  },
  view3: {
    top: 240,
  },
  view4: {
    top: 0,
  },
  view5: {
    top: 80,
  },
  view6: {
    top: 160,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
  },
  rightArrow1Icon: {
    top: 23,
    left: 31,
    width: 28,
    overflow: "hidden",
  },
  pressable: {
    top: 240,
  },
  view7: {
    top: 0,
  },
  view8: {
    top: 80,
  },
  view9: {
    top: 160,
  },
  view10: {
    top: 240,
  },
  numpad: {
    top: 428,
    left: 44,
    width: 287,
    height: 310,
    position: "absolute",
  },
  transfer: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Transfer;
