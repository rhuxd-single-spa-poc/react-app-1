const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "react-app-1",
    webpackConfigEnv,
  });

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/],
  };

  return webpackMerge.smart(defaultConfig, rxjsExternals, {
    // customizations go here
  });
};
