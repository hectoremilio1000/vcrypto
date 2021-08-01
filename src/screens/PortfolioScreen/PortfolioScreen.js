import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import image from "../../../assets/images/Saly-10.png";
import PortfolioCoin from "../../components/PortfolioCoin/PortfolioCoin";

const PortfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg",
    symbol: "USD",
    amount: 69.4,
    valueUSD: 69420,
  },
  {
    id: "2",
    name: "Bitcoin",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 30420,
  },
  {
    id: "3",
    name: "Etherium",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio Balance</Text>
        <Text style={styles.balance}>$69.420</Text>
      </View>

      <FlatList
        style={{ width: "100%" }}
        data={PortfolioCoins}
        renderItem={({ item }) => (
          <PortfolioCoin portfolioCoin={item} key={item.id} />
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
