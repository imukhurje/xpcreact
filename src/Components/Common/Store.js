class Store {
    constructor() {
        this.storeData = {};
    }

    updateStore = (data_id, data) => {
        this.storeData[data_id] = data
    }

    getStoreAllData = () => {
        return (this.storeData);
    }

    getStoreData = (data_id) => {
        if(data_id in this.storeData) return (this.storeData[data_id]);
        else return null;
    }
    
    getAllStoreData = () => {
        return JSON.parse(JSON.stringify(this.storeData));
        
    }
}

export default new Store();