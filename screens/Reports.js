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
  const [data,setData]=React.useState([]);

  // Calculate the net income (income - expenses)
  const netIncome = totalIncome - totalExpenses;
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleIncome();
    }, 2000); // 2000 milliseconds (2 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  const handleIncome = () => {
    // Create an object with the form data
    const formData = {
       
    };

    // Send a POST request to the PHP script
    fetch('http://192.168.1.105:80/pangasolo/Getincome.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
       
       setData(data)
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Income</Text>
          <Text style={styles.summaryValue}>KSH.{data.totalIncome}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Expenses</Text>
          <Text style={styles.summaryValue}>KSH.{data.totalExpenses}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Target Goal</Text>
          <Text style={styles.summaryValue}>KSH.{data.Goal}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Net Income</Text>
          <Text style={styles.summaryValue}>KSH.{data.net}</Text>
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
