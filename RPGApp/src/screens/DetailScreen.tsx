import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ProgressBar, Card, Text, Avatar, Divider } from 'react-native-paper';

const DetailScreen = ({ route }: any) => {
  const { hero } = route.params || { hero: { name: 'Herói', class: 'Classe', level: 1 } };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title 
          title={hero.name} 
          subtitle={hero.class} 
          left={(props) => <Avatar.Icon {...props} icon="account" />} 
        />
        <Card.Content>
          <Text variant="labelLarge">Pontos de Vida (HP)</Text>
          <ProgressBar progress={0.8} color="#d9534f" style={styles.progress} />
          
          <Text variant="labelLarge" style={{ marginTop: 10 }}>Mana / Energia</Text>
          <ProgressBar progress={0.4} color="#0074D9" style={styles.progress} />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Habilidades & Itens</Text>
          <Divider style={styles.divider} />
          <Text>• Ataque Furtivo (Dano: 2d6)</Text>
          <Text>• Percepção Passiva: 14</Text>
          <Text>• Poção de Resistência</Text>
          <Text>• Corda de Cânhamo (15m)</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0f0f0' },
  card: { marginBottom: 16, elevation: 4 },
  progress: { height: 12, borderRadius: 6, marginTop: 4 },
  divider: { marginVertical: 8 }
});

export default DetailScreen;