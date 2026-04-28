import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, Avatar, Badge } from 'react-native-paper';

const ListScreen = ({ navigation }: any) => {
  const heroes = [
    { id: 1, name: 'Grog', class: 'Bárbaro', level: 12, icon: 'sword' },
    { id: 2, name: 'Lira', class: 'Bardo', level: 8, icon: 'music' },
    { id: 3, name: 'Valerius', class: 'Clérigo', level: 15, icon: 'shield-cross' },
  ];

  return (
    <ScrollView style={styles.container}>
      {heroes.map((hero) => (
        <List.Item
          key={hero.id}
          title={hero.name}
          description={hero.class}
          onPress={() => navigation.navigate('Detalhes', { hero })}
          left={() => <Avatar.Icon size={44} icon={hero.icon} />}
          right={() => (
            <Badge style={styles.badge}>{`Nv. ${hero.level}`}</Badge>
          )}
          style={styles.item}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  item: { borderBottomWidth: 0.5, borderBottomColor: '#ccc', paddingVertical: 8 },
  badge: { backgroundColor: '#001F3F', alignSelf: 'center' }
});

export default ListScreen;