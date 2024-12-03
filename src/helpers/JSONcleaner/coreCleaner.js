function cleanCoreData(coreData) {
  const keyOrder = [
    "language_id",
    "core_id",
    "name",
    "discover_date",
    "description",
  ];

  
  const coreArray = Array.isArray(coreData) ? coreData : [coreData];

  const cleanedCore = coreArray.map((core) => {
    const cleanCore = {};
    keyOrder.forEach((key) => {
      let ogKey;

      switch (key) {
        case "discover_date":
          ogKey = "wand_has_core.discover_date";
          break;
        default:
          ogKey = key;
      }
      if (ogKey in core) {
        cleanCore[key] = core[ogKey];
      }
    });
    return cleanCore;
  });
  return Array.isArray(coreData) ? cleanedCore : cleanedCore[0];
}

export default cleanCoreData;
