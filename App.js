import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import db from './firebase';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await db.collection('User').get();
        const loadedUsers = usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(loadedUsers);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user) => (
          <Text key={user.id} style={styles.userText}>{user.Name}{user.age}</Text>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 70,
  },
  userText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});