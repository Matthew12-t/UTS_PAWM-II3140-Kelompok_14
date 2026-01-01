// Dynamic Expo config for EAS Build compatibility
module.exports = ({ config }) => {
  // Plugins are only needed during prebuild (after npm install)
  // During initial config read, we return empty plugins array
  const isEASBuild = process.env.EAS_BUILD === 'true';
  const hasExpoRouter = (() => {
    try {
      require.resolve("expo-router");
      return true;
    } catch (e) {
      return false;
    }
  })();

  const plugins = hasExpoRouter 
    ? ["expo-router", "expo-splash-screen"]
    : [];

  return {
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
  };
};
