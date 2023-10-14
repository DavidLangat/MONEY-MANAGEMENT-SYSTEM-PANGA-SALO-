// Education.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Education = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Financial Education</Text>
      <Text style={styles.paragraph}>
        Welcome to the Financial Education section of our app. Here, you can access
        resources and information to help you make informed financial decisions.
      </Text>

      <Text style={styles.topic}>I. Introduction to Finance</Text>
      <Text style={styles.subtopic}>
        <Text style={styles.romanNumeral}>A. </Text> What is Finance?
      </Text>
      <Text style={styles.subtopic}>
        <Text style={styles.romanNumeral}>B. </Text> Importance of Financial Literacy
      </Text>

      <Text style={styles.topic}>II. Budgeting</Text>
      <Text style={styles.subtopic}>
        <Text style={styles.romanNumeral}>A. </Text> Creating a Budget
      </Text>
      <Text style={styles.subtopic}>
        <Text style={styles.romanNumeral}>B. </Text> Tracking Expenses
      </Text>

      <Text style={styles.topic}>III. Saving and Investing</Text>
      <Text style={styles.subtopic}>
        <Text style={styles.romanNumeral}>A. </Text> Types of Savings Accounts
      </Text>
      <Text style={styles.subtopic}>
        <Text style={styles.romanNumeral}>B. </Text> Introduction to Investments
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
  },
  topic: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  subtopic: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
    color: 'black',
  },
  romanNumeral: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Education;
