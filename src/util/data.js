import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export const header = [
  {
    heading: "Personal info",
    text: "Please provide your name, email address, and phone number.",
  },
  {
    heading: "Select your plan",
    text: "You have the option of monthly or yearly billing.",
  },
  {
    heading: "Pick add-ons",
    text: "Add-ons help enhance your gaming experience.",
  },
  {
    heading: "Finishing up",
    text: "Double-check everything looks OK before confirming.",
  },
];

export const Plans = [
  {
    plan: "Arcade",
    monthly: 9,
    yearly: 108,
    image: arcade,
  },
  {
    plan: "Advanced",
    monthly: 12,
    yearly: 144,
    image: advanced,
  },
  {
    plan: "Pro",
    monthly: 15,
    yearly: 180,
    image: pro,
  },
];

export const AddOns = [
  {
    addon: "Online service",
    about: "Access to multiplayer games",
    monthly: 1,
    yearly: 12,
    id: "Onlineservice",
  },
  {
    addon: "Larger storage",
    about: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 24,
    id: "Largerstorage",
  },
  {
    addon: "Customizable Profile",
    about: "Custom theme on your profile",
    monthly: 2,
    yearly: 24,
    id: "CustomizableProfile",
  },
];
