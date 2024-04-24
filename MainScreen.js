import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import db from './firebase.js';

const MainScreen = () => {
  const [url, setUrl] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, '/PopSmoke.jpg');
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      });
    };

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
    func();
  }, []);

  console.log(users);

  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user) => (
          <Text key={user.id} style={styles.userText}>{user.Name} {user.age}</Text>
        ))}
      </ScrollView>
      {url && <Image style={{ width: 200, height: 200 }} source={{ uri: url }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
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

export default MainScreen;