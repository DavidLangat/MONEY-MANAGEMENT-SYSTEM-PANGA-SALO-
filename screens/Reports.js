import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Reports = () => {
  // Sample data for income and expenses (replace with your actual data)
  const incomeData = [
    { id: 1, category: "Salary", amount: 5000 },
    { id: 2, category: "Freelance Work", amount: 1000 },
  ];

  const expenseData = [
    { id: 1, category: "Groceries", amount: 300 },
    { id: 2, category: "Rent", amount: 1200 },
    { id: 3, category: "Utilities", amount: 200 },
  ];

  // Calculate total income and total expenses
  const totalIncome = incomeData.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenseData.reduce((sum, item) => sum + item.amount, 0);

  // Calculate the net income (income - expenses)
  const netIncome = totalIncome - totalExpenses;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Income</Text>
          <Text style={styles.summaryValue}>KSH.{totalIncome}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Expenses</Text>
          <Text style={styles.summaryValue}>KSH.{totalExpenses}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Net Income</Text>
          <Text style={styles.summaryValue}>KSH.{netIncome}</Text>
        </View>
      </View>

      {/* You can add more detailed reports or charts here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.colorDarkslategray,
    marginBottom: 20,
  },
  summaryContainer: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xl,
    padding: 20,
    elevation: 3, // Add elevation for a card-like effect
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: FontSize.size_base,
    color: Color.colorMediumblue_200,
  },
  summaryValue: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.colorBlack,
  },
});

export default Reports;
