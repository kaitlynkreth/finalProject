import React from "react";
import { Button } from "react-native-elements";

export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
};

export default function CustomButton({ title, type, onPress }) {
  let buttonStyle, titleStyle;

  switch (type) {
    case ButtonType.PRIMARY:
      buttonStyle = styles.primaryButton;
      titleStyle = styles.primaryTitle;
      break;
    case ButtonType.SECONDARY:
      buttonStyle = styles.secondaryButton;
      titleStyle = styles.secondaryTitle;
      break;
    case ButtonType.TERTIARY:
      buttonStyle = styles.tertiaryButton;
      titleStyle = styles.tertiaryTitle;
      break;
    default:
      // Default case can be defined as needed
      break;
  }

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


  
  tertiaryButton: {
    backgroundColor: "#D3D3D3", // Grey color
    borderRadius: 24,          // Smaller radius for a smaller button
    height: 30,               // Smaller height for a smaller button
    marginBottom: 10,
  },
  tertiaryTitle: {
    color: '#000000',            // Black or any other color for the title
    fontSize: 10,             // Smaller font size
    fontWeight: 'bold',
  },
};