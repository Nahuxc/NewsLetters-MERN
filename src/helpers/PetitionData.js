

/* obtener peticiones desde la url y sus metodos */
export const PetitionData = async (url, methods, data_save = "", dataArch = false) => {

    let loading = true;
    let options = {
        method: "GET"
    }


    if (methods == "GET") {

    }

    if (methods == "GET" || methods == "DELETE") {
        options = {
            method: "GET"
        }
    }


    if (methods == "POST" || methods == "PUT") {

        let body = JSON.stringify(data_save)

        if(dataArch){
            options = {
                method: methods,
                body: data_save
    
            }
        }else{
            options = {
                method: methods,
                body,
                headers: {
                    "content-type": "application/json"
                }
    
            }
        }

        
    }

    /* obtener datos de la api */
    const dataApi = await fetch(url, options)

    const dataArray = await dataApi.json();

    loading = false;


    return {
        dataArray,
        loading
    }

}