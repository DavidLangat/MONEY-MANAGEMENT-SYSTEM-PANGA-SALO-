import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Advisor = () => {

    const advisorsData = [
        {
          id: 1,
          name: "John Doe",
          specialization: "Financial Planning",
          description: "Experienced financial planner with a focus on retirement planning.",
        },
        {
          id: 2,
          name: "Jane Smith",
          specialization: "Investment Management",
          description: "Expert in managing investment portfolios for high-net-worth clients.",
        },
        // Add more advisor objects as needed
      ];
  const renderItem = ({ item }) => (
    <View style={styles.advisorCard}>
      <Text style={styles.advisorName}>{item.name}</Text>
      <Text style={styles.advisorSpecialization}>{item.specialization}</Text>
      <Text style={styles.advisorDescription}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={advisorsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  advisorCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  advisorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  advisorSpecialization: {
    fontSize: 16,
    color: '#555',
  },
  advisorDescription: {
    marginTop: 8,
    fontSize: 14,
  },
});

export default Advisor;
