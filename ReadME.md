
# Project Documentation

## Project Overview
The YoungIndya project is a React Native application focused on providing onboarding functionality with dynamic image rendering, navigation, and user interaction. The app is designed to present an onboarding experience for users, displaying images, titles, descriptions, and navigation functionality to guide users to the Login screen.

## Steps and Implementation

### 1. **Onboarding Screens (OnBoarding.js)**
The Onboarding screen is a horizontally scrollable list of onboarding items that display images, titles, and descriptions to the user.

- The `FlatList` component is used to render each item.
- Each item consists of an image, title, and description.
- `pagingEnabled` and `snapToAlignment` are used to make the scrolling feel smooth, with one item showing at a time.



### 2. **Onboarding Item (OnBoardingItem.js)**
Each onboarding item displays an image, title, description, and a button to navigate to the login screen.

- The `TouchableOpacity` component is used to handle navigation when the "Go Ahead" button is pressed.
- The `useNavigation` hook from `@react-navigation/native` is used to access navigation without passing it as a prop.


### 3. **Adding Dependencies**
The following dependencies were used to implement the above functionality:

- `@react-navigation/native`: Used for navigation within the app. Provides the navigation hook (`useNavigation`) to handle screen navigation programmatically.
- `@react-navigation/stack`: Used for stack navigation to switch between different screens (e.g., Onboarding to Login).
- `react-native`: Base library for building mobile apps.
- `react-native-gesture-handler`: A dependency for React Navigation to handle gestures.

### 4. **Setting Up Navigation**
Navigation was set up using React Navigation:

- **Stack Navigator** is used to navigate from the Onboarding screen to the Login screen.
- The **useNavigation** hook was used in the `OnBoardingItem` component to enable the button to navigate to the Login screen without explicitly passing `navigation` as a prop.

### 5. **Project Structure**

The file structure of the project is as follows:
```plaintext
/src
  ├── components
  │   ├── OnBoarding.js           // Onboarding screen with FlatList
  │   └── OnBoardingItem.js       // Individual onboarding item with image, title, description, and button
  └── assets
      └── OnBoard
          ├── page1.png          // Image for page 1
          ├── page2.png          // Image for page 2
          └── page3.png          // Image for page 3
```
### 6. **Notes & Conclusion**
- The app uses horizontally scrollable onboarding screens with images and descriptions.
- The `FlatList` component ensures the onboarding screens are scrollable, with only one screen visible at a time.
- The `useNavigation` hook simplifies navigation logic, allowing for cleaner code without manually passing the `navigation` prop.
- A simple "Go Ahead" button is added to transition to the Login screen once the user is ready.

## Dependencies Used:
- `react-native`: Core React Native framework.
- `@react-navigation/native`: Used for navigation.
- `@react-navigation/stack`: Used for stack navigation.
- `react-native-gesture-handler`: Required for navigation gestures.
