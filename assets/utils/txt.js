import txtjson from "../json/text.json";

export function txt(src, frObject) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: frObject ? txtFindReplace(src, frObject) : src,
      }}
    ></span>
  );
}

export function txtFindReplace(src, replaceObject) {
  Object.keys(replaceObject).map((key) => {
    src = src.replace(`##${key}##`, replaceObject[key]);
  });
  return src;
}
