import React from 'react';
import {CastEntity} from '../../../domain/entities/cast.entity';
import {Image, StyleSheet, Text, View} from 'react-native';
interface Props {
  actor: CastEntity;
}
export const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}
      />
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
