function cleanWandData(wandArray) {
  return wandArray.map(wand => {
      return {
          language_id: wand.wand_has_languages[0]?.language_id || null,
          wand_id: wand.wand_id,
          "wandmaker.name": wand.wandmaker?.name || null,
          "wandmaker.last_name": wand.wandmaker?.last_name || null,
          wood_name: wand.wand_has_wood?.wood_has_languages[0]?.name || null,
          core_name: wand.wand_has_core?.core_has_languages[0]?.name || null,
          length: wand.length || null,
          flexibility: wand.wand_has_languages[0]?.flexibility || null,
          name: wand.wand_has_languages[0]?.name || null,
          description: wand.wand_has_languages[0]?.description || null
      };
  });
}

export default cleanWandData;