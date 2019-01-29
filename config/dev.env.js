"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json");
const envConfig = config[env];

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_VIDEO_KEY: `"${envConfig.YOUTUBE_API_KEY}"`
});
