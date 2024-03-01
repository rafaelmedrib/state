import { readFileSync } from "fs";
import { constantCase } from 'change-case-all'

function populateEnvironment() {
  try {
    const feature_toggles = JSON.parse(readFileSync("feature_toggles.json", "utf-8"));

    for (const layer_key in feature_toggles) {
      for (const resource in feature_toggles[layer_key]) {
        process.env[`CONFIG_${constantCase(resource)}`] = feature_toggles[layer_key][resource].state
      }
    }
  } catch (error) {
    console.error("ERROR ON POPULATING ENVIRONMENT:: ", error)
  }
}

populateEnvironment()

import './src';