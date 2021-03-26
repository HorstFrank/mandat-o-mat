import { txt } from "./txt";

export function createKeyLabelObjectFromTxtJson(txtJsonsonKey) {
  return Object.keys(txt(txtJsonsonKey)).map((txtdata) => {
    return {
      label: txt(txtJsonsonKey)[txtdata],
      key: txtdata,
    };
  });
}
