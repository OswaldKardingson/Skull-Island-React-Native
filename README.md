# Skull-Island-React-Native

```markdown
# Skull Island - React Native

This is the React Native implementation of the Skull Island app. Originally built for Android, this updated version supports both **Android** and **iOS**.

## 📖 Overview

Skull Island is a secure, cross-platform app designed with performance, scalability, and modularity in mind. This new version replaces the older implementation with React Native to allow rapid updates, easier maintenance, and support for iOS and Android out of the box.

---

## 🚀 Features
1. **Cross-Platform**: Fully supports Android and iOS platforms.
2. **Modern Architecture**: Refactored using the React Native framework, ensuring better maintainability and performance.
3. **Updated Libraries**: Migrated to the latest React Native and associated dependencies.
4. **Modular Components**: Components structured for readability and reusability.
5. **Improved Testing**: Includes Jest-based unit tests with GitHub Actions integration.
6. **FOSS License**: Complies with the FOSS ethos by using the [MIT License](LICENSE).

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OswaldKardingson/Skull-Island-React-Native.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Skull-Island-React-Native
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## 🔧 Building and Running the App

### Android
1. Start the Metro bundler:
   ```bash
   npm start
   ```
2. Open the app in Android Studio, build the project, and run on a connected device or emulator:
   ```bash
   npx react-native run-android
   ```

### iOS
1. Install CocoaPods dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```
2. Build and run the app on an iOS device or simulator:
   ```bash
   npx react-native run-ios
   ```

---

## 🧪 Testing

This project uses **Jest** for unit testing and integrates with **GitHub Actions** for automated testing. 

### Run Tests Locally
```bash
npm test
```

---

## 🗂️ Folder Structure

```
Skull-Island-React-Native/
├── android/                     # Android-specific files
│   ├── app/                     # Contains the main Android app code
│   ├── gradle/                  # Gradle build system files
│   ├── settings.gradle          # Gradle settings
│   ├── build.gradle             # Main build configuration for Android
│   └── ...                      # Other Android-related files
├── ios/                         # iOS-specific files
│   ├── SkullIslandReactNative/  # Contains the main iOS app code
│   ├── Podfile                  # CocoaPods dependencies
│   ├── Info.plist               # iOS app configuration
│   └── ...                      # Other iOS-related files
├── src/                         # Source files
│   ├── components/              # Reusable React Native components
│   ├── screens/                 # Application screens/views
│   ├── utils/                   # Utility/helper functions
│   ├── App.js                   # Main React Native app entry point
│   └── index.js                 # React Native entry file
├── assets/                      # Static assets (e.g., images, icons)
├── node_modules/                # Node.js dependencies
├── metro.config.js              # Metro bundler configuration
├── package.json                 # Project metadata and dependencies
├── babel.config.js              # Babel configuration for React Native
├── README.md                    # Project documentation
├── .gitignore                   # Git ignored files
├── app.json                     # Application configuration
└── index.js                     # React Native bootstrap file
```

---

## 🌍 Deployment

### Android
1. Build a signed APK or AAB:
   ```bash
   cd android && ./gradlew assembleRelease
   ```
2. Distribute the APK or upload the AAB to Google Play.

### iOS
1. Open the Xcode workspace in the `ios/` folder.
2. Archive the app for distribution.
3. Upload to the App Store via Xcode or Transporter.

---

## 📝 Changelog

### Recent Updates
- Migrated to React Native.
- Added iOS support.
- Refactored components and testing framework.
- Integrated GitHub Actions for CI/CD.
- Updated dependencies to the latest stable versions.

---

## 🤝 Contributing

Contributions are welcome! Please submit a pull request or create an issue to discuss the changes you'd like to make.

---

## 🛡️ License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📧 Support

For any questions or issues, please contact us by creating an issue in this repository.

