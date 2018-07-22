import  axios  from 'axios';

export const sendPostRequest = (url, data) => {
    return new Promise((resolve, reject)=>{
        console.log(url, data);
        axios.post(url, data)
          .then(function (response) {
              if(response.status === 200)
                resolve(response);
              else 
                reject(response.data)  
          })
          .catch(function (error) {
            reject(error);
            console.log(error);
          });
    }) 
}