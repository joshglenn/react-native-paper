import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { ToggleComboButton, List, useTheme } from 'react-native-paper';

type StatusState = 'checked' | 'unchecked';
type JogIncrState = '.001' | '.01' | '.1' | '1';
const ToggleComboButtonExample = () => {
  const [first, setFirst] = React.useState<string>('bold');
  const [fruit, setFruit] = React.useState<string>('watermelon');
  const [status, setStatus] = React.useState<StatusState>('checked');
  const [jogIncr, setJogIncr] = React.useState<JogIncrState|string>('.001');
  const {
    colors: { background },
  } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <List.Section title="Single" >
        <View style={styles.padding}>
          <ToggleComboButton
            text="Android"
            icon="android"
            value="android"
            status={status}
            onPress={status =>
              setStatus(status === 'checked' ? 'unchecked' : 'checked')
            }
          />
        </View>
      </List.Section>
      <List.Section title="Group">
        <ToggleComboButton.Row
          value={first}
          onValueChange={(value: string) => setFirst(value)}
          style={styles.padding}
        >
          <ToggleComboButton disabled icon="format-italic" value="italic" />
          <ToggleComboButton icon="format-bold" value="bold" />
          <ToggleComboButton icon="format-underline" value="underlined" />
          <ToggleComboButton icon="format-color-text" value="format-color" />
        </ToggleComboButton.Row>
      </List.Section>
      <List.Section title="Custom Group">
        <ToggleComboButton.Row
          value={jogIncr}
          onValueChange={(value: string) => setJogIncr(value)}
          style={styles.padding}
        >
          <ToggleComboButton  value="Slow" text="Slow" />
          <ToggleComboButton  value="Med" text="Med"/>
          <ToggleComboButton  value="Fast" text="Fast"/>
        </ToggleComboButton.Row>
        <ToggleComboButton.Row
          value={jogIncr}
          onValueChange={(value: string) => setJogIncr(value)}
          style={styles.padding}
        >
          <ToggleComboButton  value=".001" text=".001" />
          <ToggleComboButton  value=".01" text=".01"/>
          <ToggleComboButton  value=".1" text=".1"/>
          <ToggleComboButton  value="1" text="1"/>
        </ToggleComboButton.Row>
      </List.Section>
      <List.Section title="Custom Text Style">
          <ToggleComboButton value=".001" text=".001" style={{
              borderWidth: 5,
              height: 75,
              width: 120
            }} textStyle={{
              fontSize:22,
            }} />
          <ToggleComboButton 
            icon={{ source: "android", direction: 'rtl' }}
            value=".001" 
            text=".001" 
            style={{
            borderWidth: 5,
            height: 95,
            width: 120
            }} textStyle={{
            fontSize:22,
            }} />
      </List.Section>
      <List.Section title="Custom">
        <View style={[styles.padding, styles.row]}>
          <ToggleComboButton.Group
            value={fruit}
            onValueChange={(value: string) => setFruit(value)}
          >
            <ImageBackground
              style={{
                width: 143,
                height: 153,
                margin: 2,
              }}
              source={{
                uri:
                  'https://images.pexels.com/photos/1068534/pexels-photo-1068534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            >
              <ToggleComboButton
                value="watermelon"
                size={24}
                style={{
                  position: 'absolute',
                  right: 0,
                }}
                color="white"
                icon={fruit === 'watermelon' ? 'heart' : 'heart-outline'}
              />
            </ImageBackground>
            <ImageBackground
              style={{
                width: 143,
                height: 153,
                margin: 2,
              }}
              source={{
                uri:
                  'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            >
              <ToggleComboButton
                value="strawberries"
                size={24}
                style={{
                  position: 'absolute',
                  right: 0,
                }}
                color="white"
                icon={fruit === 'strawberries' ? 'heart' : 'heart-outline'}
              />
            </ImageBackground>
          </ToggleComboButton.Group>
        </View>
      </List.Section>
    </View>
  );
};

ToggleComboButtonExample.title = 'Toggle Combo Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  buttonItem: {
    borderWidth: 2,
    borderRightWidth: 0,
    borderRadius: 0,
  }
});

export default ToggleComboButtonExample;
