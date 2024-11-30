function cleanWandmakerData(data) {
    const keyOrders = [
      'language_id',
      'wandmaker_id',
      'name',
      'last_name',
      'specialty',
    ]
    return data.map(data =>{

      const cleanData= {};
      keyOrders.forEach(key => {
        
        let ogKey;

        switch(key){
          case 'name':
            ogKey = 'wandmaker.name';
            break;
          case 'last_name':
            ogKey = 'wandmaker.last_name';
            break;
          default:
            ogKey = key;
        }

        if(ogKey in data){
          cleanData[key] = data[ogKey];
        }
      });
      return cleanData;
    })
  }
export default cleanWandmakerData;