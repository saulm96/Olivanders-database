function cleanWandData(wandData) {
  const formattedData = [];
  const wands = Array.isArray(wandData) ? wandData : [wandData];

  wands.forEach((wand) => {
    if (!wand || !wand.wand_has_languages) {
      return; // Validation: if key data is missing, move to the next one.
    }

    const {
      wand_id,
      length,
      wandmaker,
      wand_has_languages,
      wand_has_wood,
      wand_has_core,
    } = wand;

    const wandmakerName = wandmaker?.name || "Unknown";
    const wandmakerLastName = wandmaker?.last_name || "Unknown";

    // Sort wand_has_languages array by language_id in ascending order
    wand_has_languages.sort((a, b) => a.language_id - b.language_id);

    wand_has_languages.forEach((language) => {
      if (!language || !language.language_id) {
        return; // Avoid processing if no language data is available.
      }

      const { language_id, flexibility, name, description } = language;

      // Extract the corresponding names in the current language
      const woodName =
        wand_has_wood?.wood_has_languages?.[language_id - 1]?.name || "Unknown";
      const coreName =
        wand_has_core?.core_has_languages?.[language_id - 1]?.name || "Unknown";

      formattedData.push({
        language_id,
        wand_id: wand_id || null,
        "wandmaker.name": wandmakerName,
        "wandmaker.last_name": wandmakerLastName,
        "wood_name": woodName,
        "core_name": coreName,
        length: length || null,
        flexibility: flexibility || "Unknown",
        name: name || "Unnamed Wand",
        description: description || "No description available",
      });
    });
  });

  return formattedData;
}

export default cleanWandData;