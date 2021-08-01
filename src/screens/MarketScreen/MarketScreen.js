import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import image from "../../../assets/images/Saly-17.png";
import MarketCoin from "../../components/MaketCoin/MarketCoin";

const MarketCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg",
    symbol: "USD",
    valueChange24H: 6.4,
    valueUSD: 69420,
  },
  {
    id: "2",
    name: "Bitcoin",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg",
    symbol: "USD",
    valueChange24H: -1.12,
    valueUSD: 30420,
  },
  {
    id: "3",
    name: "Etherium",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg",
    symbol: "ETH",
    valueChange24H: 3.54,
    valueUSD: 30120,
  },
];

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={MarketCoins}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />

            <Text style={styles.label}>Market</Text>
          </>
        )}
        renderItem={({ item }) => (
          <MarketCoin marketCoin={item} key={item.id} />
        )}
      />
    </View>
  );
};

export default MarketScreen;
