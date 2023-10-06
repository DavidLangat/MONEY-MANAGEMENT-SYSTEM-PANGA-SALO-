import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { FlatGrid } from "react-native-super-grid";
const TransactionsDetail = () => {
  const navigation = useNavigation();

  const [expenses, setExpenses] = React.useState({ "expensesList": [{ "amount": "200.00", "category": "test", "date": "2023-10-02", "id": "1" }, { "amount": "3000.00", "category": "hello", "date": "2023-10-02", "id": "2" }], "totalExpenses": 3200, "totalExpensesByCategory": { "hello": 3000, "test": 200 } });
  const data = {
    hello: 3000,
    test: 200,
    test2: 400,
    test3: 500,
    test4: 600,
    test5: 700,
    test6: 800,
    test7: 900,
  };
  const backgroundColors = ["#FFC3A0", "#AED9E0", "#B0E57C", "#E0B0E5", "#FFA07A", "#A0C4FF", "#C4A0FF", "#B7E0D6"];
  const textColors = ["#333333", "#666666", "#444444", "#555555", "#777777", "#222222", "#888888", "#333333"];

  const renderGridItem = (item, index) => (
    <View className=" w-full  rounded-2xl p-4" style={{ backgroundColor: backgroundColors[index] }} >
      <Text className="text-lg capitalize" style={{ color: textColors[index] }}>{item.key}</Text>
      <Text className="text-xl font-bold" style={{ color: textColors[index] }}>KSH.{item.value}</Text>
    </View>
  );

  React.useEffect(() => {
    // Fetch data from the PHP script
    fetch("http://192.168.1.101:80/pangasolo/getExpenses.php")
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <View style={styles.transactionsDetail}>
<Image
  resizeMode="stretch"
  source={require("../assets/rectangle-17.png")}
  className="w-screen mt-5 absolute rounded-b"
/>
      <Image
        // style={[ styles.transactionsLayout]}    


        resizeMode="stretch"
        source={require("../assets/rectangle-16.png")}
        className="w-screen absolute rounded-b"

      />
      <View style={[styles.navigationBar, styles.travel1IconLayout]}>
        <Text style={[styles.transactions, styles.searchTypo1]}>
          Expenses
        </Text>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={[styles.navArrow2Icon, styles.timePosition]}

        >

        <Image
          // style={[styles.navArrow2Icon, styles.timePosition]}
          resizeMode="cover"
          source={require("../assets/navarrow-2.png")}

        />
        </TouchableOpacity> 
      </View>
      <Text style={styles.yourTotalExpenses}>Your total Expenses</Text>
      <Text style={[styles.text, styles.textTypo2]}>KSH.{expenses.totalExpenses}</Text>

      <Text style={[styles.trackYourExpenses, styles.textTypo2]}>
        Track Your Expenses
      </Text>

      {/* <View style={[styles.travel2, styles.travelLayout]}>
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
        <Text style={[styles.text7, styles.textTypo]}>KSH.399</Text>
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
        <Text style={[styles.text8, styles.text8Position]}>KSH.400</Text>
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
        <Text style={[styles.text9, styles.text9Position]}>KSH.375</Text>
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
        <Text style={[styles.text10, styles.text10Position]}>KSh.800</Text>
      </View> */}
      <Pressable
        style={[styles.creditCardRepayment, styles.creditCardLayout]}
        onPress={() => navigation.navigate("Transactions")}
        // className="absolute top-60"
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
        <Text style={styles.creditCardRepayment1}>{`View expense history`}</Text>
        <Image
          style={[styles.smallArrow1, styles.smallLayout]}
          resizeMode="cover"
          source={require("../assets/small-arrow-1.png")}
        />
      </Pressable>
            <View style={{ height: 250, top: 320 }} className="rounded-2xl mx-2">

        <FlatGrid
          data={Object.entries(expenses.totalExpensesByCategory).map(([key, value]) => ({ key, value }))}
          itemDimension={150} // Adjust the dimension as needed
          spacing={13} // Adjust the spacing as needed
          renderItem={({ item, index }) => renderGridItem(item, index)}

        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsLayout: {
    height: 245,
    // width: 375,
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
    // width: 375,
    margin: 5,
  },
  transactionsDetailItem: {
    top: -5,
    margin: 5,
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
    left: 110,
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
  // travel2: {
  //   top: 320,
  //   left: 30,
  // },
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
    top: 34,
    left: 20,
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
    top: 580,
    left: 50,
  },
  transactionsDetail: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  tabBarIconPosition1: {
    width: 30,
    left: 50,
    position: "absolute",

  },
  tabBarIcon1: {
    top: 730,
    height: 30,


  },
  tabBarIconPosition2: {
    width: 30,
    left: 175,
    position: "absolute",

  },
  tabBarIcon2: {
    top: 730,
    height: 30,


  },
  tabBarIconPosition3: {
    width: 30,
    right: 50,
    position: "absolute",

  },
  tabBarIcon3: {
    top: 730,
    height: 30,


  },
  tabBarIconPosition1: {
    width: 30,
    left: 35,
    position: "absolute",

  },
  tabBarIcon1: {
    top: 730,
    height: 30,


  },
  tabBarIconPosition2: {
    width: 30,
    left: 125,
    position: "absolute",

  },
  tabBarIcon2: {
    top: 730,
    height: 30,


  },
  tabBarIconPosition3: {
    width: 30,
    right: 125,
    position: "absolute",

  },
  tabBarIcon3: {
    top: 730,
    height: 30,


  },
  tabBarIconPosition4: {
    width: 30,
    right: 35,

    position: "absolute",

  },
  tabBarIcon4: {
    top: 730,
    height: 30,


  },
});

export default TransactionsDetail;
