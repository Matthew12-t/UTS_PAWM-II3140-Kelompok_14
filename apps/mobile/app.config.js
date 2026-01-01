// Dynamic config that handles plugin resolution gracefully
// This is needed because EAS Build reads config BEFORE installing dependencies

const plugins = [];

// Only add plugins if they can be resolved (i.e., dependencies are installed)
try {
  require.resolve("expo-router");
  plugins.push("expo-router");
} catch (e) {
  // expo-router not installed yet, skip plugin
  console.log("expo-router plugin not available, skipping...");
}

try {
  require.resolve("expo-splash-screen");
  plugins.push("expo-splash-screen");
} catch (e) {
  // expo-splash-screen not installed yet, skip plugin
  console.log("expo-splash-screen plugin not available, skipping...");
}

module.exports = {
  expo: {
    name: "ChemLab Mobile",
    slug: "chemlab-mobile",
    scheme: "chemlab",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/chemlab.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/chemlab.png",
      resizeMode: "contain",
      backgroundColor: "#4F46E5"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.chemlab.mobile"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/chemlab.png",
        backgroundColor: "#4F46E5"
      },
      package: "com.chemlab.mobile"
    },
    web: {
      favicon: "./assets/chemlab.png"
    },
    plugins: plugins,
    extra: {
      router: {},
      eas: {
        projectId: "3d6bedea-8ff2-4a22-8459-fa49c7ed43b6"
      }
    }
  }
};
