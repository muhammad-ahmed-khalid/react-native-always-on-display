# react-native-always-on-display

## Description

`react-native-always-on-display` is a lightweight and easy-to-use npm package designed to prevent mobile devices from going to sleep, thus keeping them awake during critical operations. This package is specifically tailored for React Native applications and provides seamless integration for both Android and iOS platforms.

## Installation

Install `react-native-always-on-display` using npm:

```bash
npm install react-native-always-on-display
```

or using yarn:

```bash
yarn add react-native-always-on-display
```

## Usage

Import the module in your React Native application and call the `activate` method to prevent the device from sleeping:

```javascript
import { activate, deactivate } from 'react-native-alway-on-display'

// Activate keep awake mode
activate()
```

To deactivate keep awake mode and allow the device to sleep again, call the `deactivate` method:

```javascript
// Deactivate keep awake mode
deactivate()
```

Final Code:

```javascript
 useEffect(() => {
  activate()
   return () => {
    deactivate()
   }
},[])
```

## Platform Compatibility

`react-native-always-on-display` is compatible with both Android and iOS platforms.

## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This package was inspired by the need for a simple and reliable solution to keep mobile devices awake during critical tasks in React Native applications.
