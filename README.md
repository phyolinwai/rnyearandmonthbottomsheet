# React native Year and Month Buttom Sheet

# Screenshot

<img src="https://github.com/phyolinwai/rnyearandmonthbottomsheet/blob/main/screenshots/1.png?raw=true" width="300"> <img src="https://github.com/phyolinwai/rnyearandmonthbottomsheet/blob/main/screenshots/2.png?raw=true" width="300">

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# Props

|       Prop       |                                                    Description                                                     |
| :--------------: | :----------------------------------------------------------------------------------------------------------------: |
|      title       |                                  Modal only: Title text. Can not be set to null.                                   |
|      isShow      | Boolean indicating if modal should be used. Default: "false". When enabled, the other modal props needs to be used |
|     minYear      |                                            Modal only: Number indicate.                                            |
|     maxYear      |                                            Modal only: Number indicate.                                            |
| onSelectedPicker |                                       (year: number, month: number) => void                                        |
|  onClickCancel   |                                                     () => void                                                     |
