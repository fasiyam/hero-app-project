const getStoredApps = () => {

    const appsIdSTR = localStorage.getItem("appsId");
    
    if(appsIdSTR){
        const appsId = JSON.parse(appsIdSTR);
        return appsId;
    } else {
        return [];
    }
}


const addToLS = (id) => {
    const storedAppId = getStoredApps();

    if(!storedAppId.includes(id)) {
        storedAppId.push(id);
        const data = JSON.stringify(storedAppId);
        localStorage.setItem("appsId", data);
    }
}


export {getStoredApps, addToLS};