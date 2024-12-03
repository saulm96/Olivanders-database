  function wandmakerCleaner(wandmakersData) {
    const keyOrder = [
      "language_id",
      "wandmaker_id",
      "name",
      "last_name",
      "specialty",
    ];

    // Convertir el input a un array si no lo es
    const wandmakersArray = Array.isArray(wandmakersData)
      ? wandmakersData
      : [wandmakersData];

    const cleanedWandmakers = wandmakersArray.map((wandmaker) => {
      const cleanWandmaker = {};
      keyOrder.forEach((key) => {
        let value;

        switch (key) {
          case "name":
            value = wandmaker.wandmaker?.name;
            break;
          case "last_name":
            value = wandmaker.wandmaker?.last_name;
            break;
          default:
            value = wandmaker[key];
        }

        if (value !== undefined) {
          cleanWandmaker[key] = value;
        }
      });
      return cleanWandmaker;
    });

    return Array.isArray(wandmakersData)
      ? cleanedWandmakers
      : cleanedWandmakers[0];
  }


export default wandmakerCleaner;
