import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Cards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cards}>
      <Image
        style={[styles.cardsChild, styles.shoppingPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      
      <Text style={[styles.youCanCheck, styles.textTypo3]}>
        You can check your cards here
      </Text>
      <Image
        style={styles.leftArrow1Icon}
        resizeMode="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Pressable
        style={[styles.companyCard, styles.companyCardLayout1]}
        onPress={() => navigation.navigate("Transactions")}
      >
        <View style={[styles.companyCardChild, styles.companyCardShadowBox]} />
        <Text style={[styles.text, styles.textTypo3]}>$4500.00</Text>
        <Text style={[styles.company, styles.companyTypo]}>Company</Text>
        <Text style={[styles.text1, styles.textTypo2]}>01/2023</Text>
        <Text style={[styles.text2, styles.textTypo2]}>
          **** **** **** 0927
        </Text>
        <View style={styles.mastercardLogo1}>
          <View style={styles.page1}>
            <View style={[styles.cards1, styles.cards1Position]}>
              {/* <View style={[styles.cards1, styles.cards1Position]}>
                <View style={[styles.cards1, styles.cards1Position]}> */}
                  <Image
                    style={[styles.groupIcon, styles.cards1Position]}
                    resizeMode="cover"
                    source={require("../assets/group.png")}
                  />
                  <Text style={[styles.mastercard1, styles.mastercardPosition]}>
                    mastercard
                  </Text>
                </View>
              {/* </View>
            </View> */}
          </View>
        </View>
      </Pressable>
      <View style={[styles.companyCard1, styles.companyCardLayout]}>
        <View style={[styles.companyCardItem, styles.companyCardLayout]} />
        <Text style={[styles.text3, styles.homeClr]}>$4000.0</Text>
        <Text style={[styles.home, styles.homeClr]}>Home</Text>
        <Text style={[styles.text4, styles.textTypo1]}>01/2033</Text>
        <Text style={[styles.text5, styles.textTypo1]}>
          **** **** **** 0227
        </Text>
        <View style={styles.mastercardLogo11}>
          <View style={styles.page1}>
            <View style={[styles.cards1, styles.cards1Position]}>
              <View style={[styles.cards1, styles.cards1Position]}>
                <View style={[styles.cards1, styles.cards1Position]}>
                  <Image
                    style={[styles.groupIcon, styles.cards1Position]}
                    resizeMode="cover"
                    source={require("../assets/group1.png")}
                  />
                  <Text style={[styles.mastercard3, styles.mastercardPosition]}>
                    mastercard
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.recentTransaction, styles.homeClr]}>
        Recent Transaction
      </Text>
      <View style={[styles.shopping, styles.shoppingLayout]}>
        <View style={[styles.shoppingDetails, styles.shoppingPosition]}>
          <Text style={[styles.shopping1, styles.homeClr]}>Shopping</Text>
          <Text style={[styles.march2021820, styles.timeFlexBox]}>
            15 march 2021, 8:20 PM
          </Text>
        </View>
        <Text style={[styles.text6, styles.textTypo]}>-$120</Text>
        <Image
          style={[styles.shoppingIcon, styles.shoppingLayout]}
          resizeMode="cover"
          source={require("../assets/shopping-icon.png")}
        />
        <Image
          style={styles.smallArrow3}
          resizeMode="cover"
          source={require("../assets/small-arrow-31.png")}
        />
      </View>
      <View style={[styles.medicine, styles.sportsPosition]}>
        <View style={[styles.shoppingDetails1, styles.shoppingPosition]}>
          <Text style={[styles.shopping1, styles.homeClr]}>Medicine</Text>
          <Text style={[styles.march2021820, styles.timeFlexBox]}>
            13 march 2021, 6:50 AM
          </Text>
        </View>
        <Text style={[styles.text7, styles.textTypo]}>-$80.96</Text>
        <Image
          style={[styles.shoppingIcon, styles.shoppingLayout]}
          resizeMode="cover"
          source={require("../assets/shopping-icon2.png")}
        />
        <Image
          style={styles.smallArrow3}
          resizeMode="cover"
          source={require("../assets/small-arrow-31.png")}
        />
        <Image
          style={styles.medicine1Icon}
          resizeMode="cover"
          source={require("../assets/medicine-1.png")}
        />
      </View>
      <View style={[styles.sports, styles.sportsPosition]}>
        <View style={[styles.shoppingDetails2, styles.shoppingPosition]}>
          <Text style={[styles.shopping1, styles.homeClr]}>Sports</Text>
          <Text style={[styles.march2021820, styles.timeFlexBox]}>
            10 march 2021, 4:20 PM
          </Text>
        </View>
        <Text style={[styles.text8, styles.textTypo]}>-$99.99</Text>
        <Image
          style={[styles.shoppingIcon, styles.shoppingLayout]}
          resizeMode="cover"
          source={require("../assets/shopping-icon3.png")}
        />
        <Image
          style={styles.smallArrow3}
          resizeMode="cover"
          source={require("../assets/small-arrow-31.png")}
        />
        <Image
          style={styles.sport1Icon}
          resizeMode="cover"
          source={require("../assets/sport-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingPosition1: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cards1Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  companyCardLayout1: {
    height: 305,
    width: 209,
    position: "absolute",
  },
  companyCardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  companyTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  textTypo2: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  mastercardPosition: {
    left: "4.21%",
    top: "76.32%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  companyCardLayout: {
    height: 259,
    width: 177,
    position: "absolute",
  },
  homeClr: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    height: 14,
    fontSize: 12,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  shoppingLayout: {
    height: 48,
    position: "absolute",
  },
  shoppingPosition: {
    height: 39,
    left: 56,
    top: 5,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    top: 16,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  sportsPosition: {
    left: 29,
    height: 48,
    width: 327,
    position: "absolute",
  },
  cardsChild: {
    width: 390,
    height: 278,
    position: "absolute",
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    bottom: "12.96%",
    left: "92.59%",
    right: "0%",
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
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    top: "0%",
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    height: "100%",
    left: "0%",
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
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  youCanCheck: {
    top: 100,
    width: 271,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    left: 30,
  },
  leftArrow1Icon: {
    top: 30,
    width: 26,
    height: 21,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  companyCardChild: {
    borderRadius: Border.br_21xl,
    shadowColor: "rgba(89, 136, 248, 0.2)",
    shadowRadius: 49,
    elevation: 49,
    height: 305,
    width: 209,
    position: "absolute",
  },
  text: {
    top: 38,
    left: 24,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  company: {
    top: 70,
    left: 24,
    textAlign: "left",
    position: "absolute",
    color: Color.colorWhite,
  },
  text1: {
    top: 216,
    fontFamily: FontFamily.montserratRegular,
    left: 24,
  },
  text2: {
    top: 247,
    left: 25,
    fontFamily: FontFamily.montserratRegular,
  },
  groupIcon: {
    height: "77.27%",
    bottom: "22.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    width: "100%",
  },
  mastercard1: {
    fontSize: 7,
  },
  cards1: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  page1: {
    height: "98.23%",
    width: "97.24%",
    right: "0.65%",
    bottom: "1.77%",
    left: "2.11%",
    top: "0%",
    position: "absolute",
  },
  mastercardLogo1: {
    top: 242,
    left: 147,
    width: 40,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  companyCard: {
    top: 198,
    left: 30,
  },
  companyCardItem: {
    borderRadius: 34,
    shadowColor: "rgba(17, 25, 45, 0.1)",
    shadowRadius: 41.61,
    elevation: 41.61,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text3: {
    top: 32,
    fontSize: 20,
    width: 100,
    height: 25,
    left: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  home: {
    top: 59,
    fontSize: 15,
    width: 76,
    height: 19,
    left: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  text4: {
    top: 183,
    width: 44,
    left: 20,
  },
  text5: {
    top: 210,
    left: 21,
    width: 96,
  },
  mastercard3: {
    height: "24.68%",
    width: "95.12%",
    fontSize: 6,
  },
  mastercardLogo11: {
    top: 206,
    left: 125,
    width: 34,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  companyCard1: {
    top: 221,
    left: 267,
  },
  recentTransaction: {
    top: 535,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 30,
  },
  shopping1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    top: 0,
  },
  march2021820: {
    top: 24,
    fontSize: FontSize.size_xs,
    color: Color.colorSilver,
    fontFamily: FontFamily.montserratRegular,
    left: 0,
  },
  shoppingDetails: {
    width: 137,
  },
  text6: {
    left: 268,
  },
  shoppingIcon: {
    width: 48,
    left: 0,
    top: 0,
  },
  smallArrow3: {
    top: 18,
    left: 320,
    width: 7,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  shopping: {
    top: 569,
    width: 327,
    height: 48,
    left: 30,
  },
  shoppingDetails1: {
    width: 136,
  },
  text7: {
    left: 252,
  },
  medicine1Icon: {
    top: 12,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  medicine: {
    top: 633,
  },
  shoppingDetails2: {
    width: 138,
  },
  text8: {
    left: 253,
  },
  sport1Icon: {
    left: 10,
    width: 28,
    height: 16,
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  sports: {
    top: 697,
  },
  cards: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Cards;
