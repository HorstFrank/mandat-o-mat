import txtjson from "../json/text.json";

// export function txt(key, frObject) {
//   if (typeof txtjson[key] === "string") {
//     return txtFindReplace(txtjson[key], frObject);
//   }

//   if (typeof txtjson[key] === "object") {
//     return txtjson[key] = txtjson[key].map((v,k) =>{

//     })
//   }
// }

export function txt(key, frObject) {
  return frObject ? txtFindReplace(txtjson[key], frObject) : txtjson[key];
}

export function txtFindReplace(src, replaceObject) {
  Object.keys(replaceObject).map((key) => {
    src = src.replace(`##${key}##`, replaceObject[key]);
  });
  return src;
}
