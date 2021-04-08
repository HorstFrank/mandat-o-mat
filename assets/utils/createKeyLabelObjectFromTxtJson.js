import { txt } from "./txt";
import txtjson from "../json/text.json";

export function createKeyLabelObjectFromTxtJson(txtJsonsonKey) {
  return Object.keys(txtjson[txtJsonsonKey]).map((txtdata) => {
    return {
      label: txtjson[txtJsonsonKey][txtdata],
      key: txtdata,
    };
  });
}
