import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable,TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import  { useState } from 'react';
import DatePicker from 'react-native-datepicker';
import axios from 'axios'; 
const Expense = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleExpenseSubmit = () => {
    // Prepare the data to send to the server
    const expenseData = {
        category,
        amount,
        // date,
    };

    // Make a POST request to the server
    axios.post('http://192.168.1.104:80/pangasolo/expense.php', expenseData)
        .then((response) => {
            if (response.data.status === 'success') {
                // Expense recorded successfully, handle success logic
                alert(response.data.message);
            } else {
                // Error occurred, handle error logic
                alert(response.data.message);
            }
        })
        .catch((error) => {
            // Handle network or other errors
            console.error(error);
        });
};
  return (
    <View style={styles.profile}>
      <LinearGradient
        style={[styles.purple, styles.blueLayout]}
        locations={[0, 1]}
        colors={["rgba(181, 47, 248, 0)", "#b52ff8"]}
        useAngle={true}
        angle={186.55}
      />
      <LinearGradient
        style={[styles.blue, styles.blueLayout]}
        locations={[0, 1]}
        colors={["rgba(64, 206, 242, 0)", "#40cef2"]}
        useAngle={true}
        angle={191.45}
      />
   
   
      <Text style={[styles.profile1, styles.profile1Clr]}>Expense Logging</Text>
    
         
      <View style={[styles.firstName, styles.usernameLayout]}>
        <View>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>Category</Text>
          <TextInput
            style={[styles.name, styles.nameTypo]}
            value={category}
            onChangeText={(text) => setCategory(text)}
            placeholder="Enter category"
          />
        </View>
      </View>

      <View style={[styles.lastName, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>Amount</Text>
          <TextInput
             style={[styles.name, styles.nameTypo]}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="Enter Amount"

          />
          <View style={styles.tick1} />
        </View>
      </View>

      {/* <View style={[styles.dob, styles.usernameLayout]}>
        <View style={[styles.username1, styles.usernameLayout]}>
          <View style={[styles.usernameChild, styles.childBorder]} />
          <Text style={[styles.username2, styles.profile1Clr]}>Select Date</Text>
          <TextInput
            style={[styles.name, styles.nameTypo]}
            
    
         date={date}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setDate(date)}
          />
          <View style={styles.tick1} />
        </View>
      
    </View> */}
    <Pressable
 
    onPress={handleExpenseSubmit}>
      <View style={[styles.confirmationButton, styles.confirmationLayout]}>
        <View
          style={[styles.confirmationButtonChild, styles.confirmationLayout]}
        />
        <Image
          style={[styles.maskGroupIcon, styles.confirmationLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.signOut, styles.onlineTypo]}>Submit Expense</Text>
      </View>
      
      
      </Pressable>
      
      <View style={styles.profileChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  blueLayout: {
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "36deg",
      },
    ],
    height: 300,
    width: 300,
    borderRadius: Border.br_131xl,
    position: "absolute",
  },
  light1Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profile1Clr: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  usernameLayout: {
    height: 58,
    width: 315,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    left: 0,
  },
  nameTypo: {
    color: Color.colorMediumblue_200,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  confirmationLayout: {
    height: 52,
    position: "absolute",
  },
  onlineTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorMediumblue_200,
    textAlign: "left",
    position: "absolute",
  },
  profileInfoLayout: {
    height: 60,
    position: "absolute",
  },
  purple: {
    top: -110,
    left: 366,
  },
  blue: {
    top: -241,
    left: 218,
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    right: "0%",
    bottom: "12.96%",
    left: "92.59%",
  },
  wifiIcon: {
    height: "61.11%",
    width: "4.67%",
    top: "24.06%",
    right: "8.94%",
    bottom: "14.83%",
    left: "86.39%",
  },
  cellularConnectionIcon: {
    height: "59.26%",
    width: "5.18%",
    top: "25.93%",
    right: "15.13%",
    bottom: "14.82%",
    left: "79.69%",
  },
  time: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "40.91%",
    width: "87.51%",
    top: "29.55%",
    right: "3.82%",
    bottom: "29.55%",
    left: "8.66%",
    position: "absolute",
  },
  light1: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  tabBarIcon: {
    top: 702,
    height: 110,
  },
  profile1: {
    top: 70,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    left: 30,
  },
  usernameChild: {
    top: 70,
    borderColor: Color.colorLavender,
    borderTopWidth: 7,
    width: 316,
    height: 1,
    position: "absolute",
  },
  username2: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  name: {
    top: 33,
    fontSize: FontSize.size_sm,
  },
  username1: {
    left: 0,
    top: 0,
  },
  username: {
    top: 250,
    left: 30,
  },
  firstName: {
    top: 230,
    left: 30,
  },
  tick1: {
    top: 28,
    left: 281,
    width: 18,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  lastName: {
    top: 330,
    left: 30,
  },
  dob: {
    top: 450,
    left: 30,
  },
  confirmationButtonChild: {
    borderRadius: Border.br_9xl,
    borderColor: Color.colorMediumblue_200,
    borderWidth: 1,
    width: 317,
    height: 52,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  maskGroupIcon: {
    width: 321,
    left: 0,
    top: 0,
  },
  signOut: {
    top: 16,
    fontFamily: FontFamily.montserratRegular,
    left: 100,
  },
  confirmationButton: {
    top: 580,
    left: 29,
    width: 317,
    height: 52,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  page1: {
    left: "75%",
    top: "76.16%",
    right: "18.57%",
    bottom: "16.14%",
    width: "5.43%",
    height: "2.7%",
    position: "absolute",
  },
  whiteIcon: {
    top: -9,
    left: -13,
    borderRadius: 22,
    width: 87,
    height: 87,
    position: "absolute",
  },
  imageOnlineChild: {
    top: 49,
    left: 48,
    width: 12,
    height: 11,
    position: "absolute",
  },
  imageOnline: {
    width: 60,
    left: 0,
    top: 0,
  },
  sukhbirMahey: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    top: 0,
  },
  online: {
    top: 32,
    fontWeight: "300",
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_base,
    left: 0,
  },
  sukhbirMaheyParent: {
    top: 4,
    left: 70,
    width: 144,
    height: 51,
    position: "absolute",
  },
  profileInfo: {
    top: 130,
    width: 214,
    left: 30,
  },
  profileChild: {
    top: 60,
    left: 94,
    width: 6,
    height: 7,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
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

export default Expense;