import React from "react";
import { Button } from "react-native-elements";

export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export default function CustomButton({ title, type, onPress }) {
  const isPrimary = type === ButtonType.PRIMARY;
  const buttonStyle = isPrimary ? styles.primaryButton : styles.secondaryButton;
  const titleStyle = isPrimary ? styles.primaryTitle : styles.secondaryTitle;
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
    />
  );
}

const styles = {
  primaryButton: {
    backgroundColor: "#FF69B4",
    borderRadius: 24,
    height: 56,
    marginBottom:10,
  },
  primaryTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: "#fcd2e7",
    borderRadius: 24,
    height: 56,
    marginBottom: 10,
  },
  secondaryTitle: {
    color: '#FF69B4',
    fontSize: 20,
    fontWeight: 'bold',
  },
};