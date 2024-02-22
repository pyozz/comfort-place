export const removeDuplicates = (data, property) => {
  let unique = data.map((item) => item[property]);

  if (property === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
