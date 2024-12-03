function cleanWoodData(woodData) {
  const keyOrder = [
    "language_id",
    "wood_id",
    "name",
    "discover_date",
    "description",
  ];

  const woodArray = Array.isArray(woodData) ? woodData : [woodData];

  const cleanedWoods = woodArray.map((wood) => {
    const cleanWood = {};
    keyOrder.forEach((key) => {
      let ogKey;

      switch (key) {
        case "discover_date":
          ogKey = "wand_has_wood.discover_date";
          break;
        default:
          ogKey = key;
      }
      if (ogKey in wood) {
        cleanWood[key] = wood[ogKey];
      }
    });
    return cleanWood;
  });
  return Array.isArray(woodData) ? cleanedWoods : cleanedWoods[0];
}
export default cleanWoodData;
