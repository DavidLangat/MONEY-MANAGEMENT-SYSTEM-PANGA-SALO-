import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const TransactionsDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactionsDetail}>
      <Image
        style={[styles.transactionsDetailChild, styles.transactionsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={[styles.transactionsDetailItem, styles.transactionsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <View style={[styles.navigationBar, styles.travel1IconLayout]}>
        <Text style={[styles.transactions, styles.searchTypo1]}>
          Transactions
        </Text>
        <Image
          style={[styles.navArrow2Icon, styles.timePosition]}
          resizeMode="cover"
          source={require("../assets/navarrow-2.png")}
        />
      </View>
      <Text style={styles.yourTotalExpenses}>Your total Expenses</Text>
      <Text style={[styles.text, styles.textTypo2]}>$1063.30</Text>
      <View style={[styles.transactionsCard, styles.transactionsCardLayout]}>
        <Image
          style={[styles.transactionsCardChild, styles.transactionsCardLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-18.png")}
        />
        <View style={styles.transactions1}>
          <View style={[styles.shopping, styles.sportsLayout]}>
            <View style={[styles.shoppingDetails, styles.shoppingPosition]}>
              <Text style={[styles.shopping1, styles.searchTypo]}>
                Shopping
              </Text>
              <Text style={[styles.march2021820, styles.travel3Position]}>
                15 march 2021, 8:20 PM
              </Text>
            </View>
            <Text style={[styles.text1, styles.textTypo1]}>-$120</Text>
            <Image
              style={[styles.shoppingIcon, styles.sportsLayout]}
              resizeMode="cover"
              source={require("../assets/shopping-icon.png")}
            />
            <Image
              style={[styles.smallArrow3, styles.smallLayout]}
              resizeMode="cover"
              source={require("../assets/small-arrow-3.png")}
            />
          </View>
          <View style={[styles.shopping2, styles.sportsLayout]}>
            <View style={[styles.shoppingDetails1, styles.shoppingPosition]}>
              <Text style={[styles.shopping1, styles.searchTypo]}>
                Shopping
              </Text>
              <Text style={[styles.march2021820, styles.travel3Position]}>
                7 march 2021, 3:00 PM
              </Text>
            </View>
            <Text style={[styles.text2, styles.textTypo1]}>-$600</Text>
            <Image
              style={[styles.shoppingIcon, styles.sportsLayout]}
              resizeMode="cover"
              source={require("../assets/shopping-icon.png")}
            />
            <Image
              style={[styles.smallArrow3, styles.smallLayout]}
              resizeMode="cover"
              source={require("../assets/small-arrow-3.png")}
            />
          </View>
          <View style={[styles.travel, styles.sportsLayout]}>
            <View style={[styles.shoppingDetails2, styles.shoppingPosition]}>
              <Text style={[styles.shopping1, styles.searchTypo]}>Travel</Text>
              <Text style={[styles.march2021820, styles.travel3Position]}>
                7 march 2021, 12:10 PM
              </Text>
            </View>
            <Text style={[styles.text3, styles.textTypo1]}>-$350</Text>
            <Image
              style={[styles.shoppingIcon, styles.sportsLayout]}
              resizeMode="cover"
              source={require("../assets/shopping-icon1.png")}
            />
            <Image
              style={[styles.travel1Icon, styles.travel1IconLayout]}
              resizeMode="cover"
              source={require("../assets/travel-1.png")}
            />
            <Image
              style={[styles.smallArrow3, styles.smallLayout]}
              resizeMode="cover"
              source={require("../assets/small-arrow-3.png")}
            />
          </View>
          <View style={[styles.medicine, styles.sportsLayout]}>
            <View style={[styles.shoppingDetails3, styles.shoppingPosition]}>
              <Text style={[styles.shopping1, styles.searchTypo]}>
                Medicine
              </Text>
              <Text style={[styles.march2021820, styles.travel3Position]}>
                13 march 2021, 6:50 AM
              </Text>
            </View>
            <Text style={[styles.text4, styles.textTypo1]}>-$80.96</Text>
            <Image
              style={[styles.shoppingIcon, styles.sportsLayout]}
              resizeMode="cover"
              source={require("../assets/shopping-icon2.png")}
            />
            <Image
              style={[styles.smallArrow3, styles.smallLayout]}
              resizeMode="cover"
              source={require("../assets/small-arrow-3.png")}
            />
            <Image
              style={[styles.travel1Icon, styles.travel1IconLayout]}
              resizeMode="cover"
              source={require("../assets/medicine-1.png")}
            />
          </View>
          <View style={[styles.sports, styles.sportsLayout]}>
            <View style={[styles.shoppingDetails4, styles.shoppingPosition]}>
              <Text style={[styles.shopping1, styles.searchTypo]}>Sports</Text>
              <Text style={[styles.march2021820, styles.travel3Position]}>
                10 march 2021, 4:20 PM
              </Text>
            </View>
            <Text style={[styles.text5, styles.textTypo1]}>-$99.99</Text>
            <Image
              style={[styles.shoppingIcon, styles.sportsLayout]}
              resizeMode="cover"
              source={require("../assets/shopping-icon3.png")}
            />
            <Image
              style={[styles.smallArrow3, styles.smallLayout]}
              resizeMode="cover"
              source={require("../assets/small-arrow-3.png")}
            />
            <Image
              style={[styles.sport1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/sport-1.png")}
            />
          </View>
          <View style={[styles.sports2, styles.sportsLayout]}>
            <View style={[styles.shoppingDetails5, styles.shoppingPosition]}>
              <Text style={[styles.shopping1, styles.searchTypo]}>Sports</Text>
              <Text style={[styles.march2021820, styles.travel3Position]}>
                5 march 2021, 1:20 PM
              </Text>
            </View>
            <Text style={[styles.text6, styles.textTypo1]}>-$299.37</Text>
            <Image
              style={[styles.shoppingIcon, styles.sportsLayout]}
              resizeMode="cover"
              source={require("../assets/shopping-icon3.png")}
            />
            <Image
              style={[styles.smallArrow3, styles.smallLayout]}
              resizeMode="cover"
              source={require("../assets/small-arrow-3.png")}
            />
            <Image
              style={[styles.sport1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/sport-1.png")}
            />
          </View>
        </View>
        <View style={[styles.transactionsCardItem, styles.iconPosition]} />
        <View style={[styles.searchBar, styles.searchLayout]}>
          <View style={[styles.searchBarChild, styles.searchLayout]} />
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
          <Image
            style={[styles.search1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/search-1.png")}
          />
        </View>
      </View>
      <Text style={[styles.trackYourExpenses, styles.textTypo2]}>
        Track Your Expenses
      </Text>
      <View style={[styles.travel2, styles.travelLayout]}>
        <Image
          style={[styles.travelChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-21.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.travelLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group4.png")}
        />
        <Text style={[styles.travel3, styles.text7Position]}>Travel</Text>
        <Text style={[styles.text7, styles.textTypo]}>$399</Text>
      </View>
      <View style={[styles.sports4, styles.travelLayout]}>
        <Image
          style={[styles.travelChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-211.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.travelLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group5.png")}
        />
        <Text style={[styles.sports5, styles.text8Position]}>Sports</Text>
        <Text style={[styles.text8, styles.text8Position]}>$400</Text>
      </View>
      <View style={[styles.shopping4, styles.shopping4Position]}>
        <Image
          style={[styles.travelChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-212.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.travelLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group6.png")}
        />
        <Text style={[styles.shopping5, styles.text9Position]}>Shopping</Text>
        <Text style={[styles.text9, styles.text9Position]}>$375</Text>
      </View>
      <View style={[styles.medicine2, styles.shopping4Position]}>
        <Image
          style={[styles.travelChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-213.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.travelLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Text style={[styles.medicine3, styles.text10Position]}>Medicine</Text>
        <Text style={[styles.text10, styles.text10Position]}>$80.96</Text>
      </View>
      <Pressable
        style={[styles.creditCardRepayment, styles.creditCardLayout]}
        onPress={() => navigation.navigate("Transfer")}
      >
        
        <LinearGradient
          style={[styles.creditCardRepaymentChild, styles.creditCardLayout]}
          locations={[0, 1]}
          colors={["#4960f9", "#1433ff"]}
          useAngle={true}
          angle={94.76}
        />
        <Image
          style={styles.maskGroupIcon4}
          resizeMode="cover"
          source={require("../assets/mask-group8.png")}
        />
        <Text style={styles.creditCardRepayment1}>{`Credit Card
Repayment`}</Text>
        <Image
          style={[styles.smallArrow1, styles.smallLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsLayout: {
    height: 245,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timePosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  travel1IconLayout: {
    height: 24,
    position: "absolute",
  },
  searchTypo1: {
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
  },
  textTypo2: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  transactionsCardLayout: {
    height: 541,
    width: 375,
    left: 0,
    position: "absolute",
  },
  sportsLayout: {
    height: 48,
    position: "absolute",
  },
  shoppingPosition: {
    height: 39,
    left: 56,
    top: 5,
    position: "absolute",
  },
  searchTypo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  travel3Position: {
    top: 24,
    fontFamily: FontFamily.montserratRegular,
  },
  textTypo1: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    top: 16,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  smallLayout: {
    height: 12,
    width: 7,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 16,
    position: "absolute",
  },
  searchLayout: {
    height: 53,
    width: 315,
    position: "absolute",
  },
  travelLayout: {
    height: 103,
    width: 153,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  text7Position: {
    color: Color.colorBrown,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  text8Position: {
    color: Color.colorTeal,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  shopping4Position: {
    left: 192,
    height: 103,
    width: 153,
    position: "absolute",
  },
  text9Position: {
    color: Color.colorPeru,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  text10Position: {
    color: Color.colorDarkorchid,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  creditCardLayout: {
    height: 105,
    width: 315,
    position: "absolute",
  },
  transactionsDetailChild: {
    top: 5,
    width: 375,
     margin:5,
  },
  transactionsDetailItem: {
    top: -5,
     margin:5,
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
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
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
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  transactions: {
    left: "53.89%",
    fontSize: FontSize.size_mid,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.sFProText,
    color: Color.colorWhite,
    top: "0%",
    position: "absolute",
  },
  navArrow2Icon: {
    width: "11.27%",
    right: "88.73%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navigationBar: {
    width: 213,
    left: 30,
    top: 25,
  },
  yourTotalExpenses: {
    top: 90,
    left: 100,
    fontSize: FontSize.size_3xl,
    color: Color.colorPaleturquoise,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 150,
    left: 130,
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    color: Color.colorWhite,
  },
  transactionsCardChild: {
    top: 0,
  },
  shopping1: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.colorWhite,
    top: 0,
    left: 0,
  },
  march2021820: {
    fontSize: FontSize.size_xs,
    color: Color.colorSkyblue_100,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  shoppingDetails: {
    width: 137,
  },
  text1: {
    left: 268,
  },
  shoppingIcon: {
    width: 48,
    top: 0,
    left: 0,
  },
  smallArrow3: {
    top: 18,
    left: 320,
  },
  shopping: {
    width: 327,
    height: 48,
    left: 1,
    top: 0,
  },
  shoppingDetails1: {
    width: 133,
  },
  text2: {
    left: 263,
  },
  shopping2: {
    top: 192,
    width: 327,
    height: 48,
    left: 1,
  },
  shoppingDetails2: {
    width: 134,
  },
  text3: {
    left: 265,
  },
  travel1Icon: {
    top: 12,
    left: 12,
    width: 24,
    overflow: "hidden",
  },
  travel: {
    top: 256,
    width: 327,
    height: 48,
    left: 0,
  },
  shoppingDetails3: {
    width: 136,
  },
  text4: {
    left: 252,
  },
  medicine: {
    top: 64,
    width: 327,
    height: 48,
    left: 0,
  },
  shoppingDetails4: {
    width: 138,
  },
  text5: {
    left: 253,
  },
  sport1Icon: {
    left: 10,
    width: 28,
    height: 16,
    overflow: "hidden",
  },
  sports: {
    top: 128,
    width: 327,
    height: 48,
    left: 0,
  },
  shoppingDetails5: {
    width: 129,
  },
  text6: {
    left: 246,
  },
  sports2: {
    top: 320,
    width: 327,
    height: 48,
    left: 1,
  },
  transactions1: {
    top: 121,
    width: 328,
    height: 368,
    left: 31,
    position: "absolute",
  },
  transactionsCardItem: {
    left: 164,
    borderRadius: Border.br_11xs,
    width: 47,
    height: 4,
    backgroundColor: Color.colorWhite,
  },
  searchBarChild: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorDarkblue,
    top: 0,
    left: 0,
  },
  search: {
    top: 17,
    left: 45,
    color: Color.colorMediumslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
  },
  search1Icon: {
    left: 15,
    width: 22,
    height: 21,
    overflow: "hidden",
  },
  searchBar: {
    top: 44,
    left: 31,
  },
  transactionsCard: {
    top: 693,
  },
  trackYourExpenses: {
    top: 282,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_lg,
    left: 30,
    textAlign: "left",
  },
  travelChild: {
    height: 103,
    width: 153,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
  },
  travel3: {
    fontSize: FontSize.size_lg,
    top: 24,
    fontFamily: FontFamily.montserratRegular,
  },
  text7: {
    top: 58,
    fontSize: FontSize.size_5xl,
    color: Color.colorBrown,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  travel2: {
    top: 320,
    left: 30,
  },
  sports5: {
    fontSize: FontSize.size_lg,
    top: 24,
    fontFamily: FontFamily.montserratRegular,
  },
  text8: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 58,
  },
  sports4: {
    left: 29,
    top: 439,
  },
  shopping5: {
    fontSize: FontSize.size_lg,
    top: 24,
    fontFamily: FontFamily.montserratRegular,
  },
  text9: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 58,
  },
  shopping4: {
    top: 320,
  },
  medicine3: {
    fontSize: FontSize.size_lg,
    top: 24,
    fontFamily: FontFamily.montserratRegular,
  },
  text10: {
    top: 56,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  medicine2: {
    top: 439,
  },
  creditCardRepaymentChild: {
    shadowColor: "rgba(27, 57, 255, 0.2)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  maskGroupIcon4: {
    top: -8,
    width: 331,
    height: 137,
    left: 0,
    position: "absolute",
  },
  creditCardRepayment1: {
    top: 29,
    left: 37,
    fontSize: FontSize.size_xl,
    width: 182,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  smallArrow1: {
    left: 281,
    top: 47,
  },
  creditCardRepayment: {
    top: 558,
    left: 30,
  },
  transactionsDetail: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default TransactionsDetail;
