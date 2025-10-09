 export const parseDownloads = (value) => {
  if (typeof value === "string") {
    value = value.replace("+", "").toUpperCase(); // remove '+' and make uppercase

    if (value.includes("M")) {
      return parseFloat(value) * 1_000_000;
    }else {
      return parseFloat(value);
    }
  }
  return value || 0;
};
