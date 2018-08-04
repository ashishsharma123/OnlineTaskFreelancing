import  axios  from 'axios';

export const sendPostRequest = (url, data, isForImageUpload, token) => {
    return new Promise((resolve, reject)=>{
        console.log('token ', token);
        let headers;
        if(isForImageUpload) {
          headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          }
        }
          else {
            headers = {
              'Content-Type': 'application/json'
            }
          }
        
        axios.post(url, data, headers)
          .then(function (response) {
              if(response.status === 200)
                resolve(response.data);
              else 
                reject(response.data)  
          })
          .catch(function (error) {
            reject(error);
            console.log(error);
          });
    }) 
}


export const sendGetRequest = (url) => {
  return new Promise((resolve, reject)=>{
      axios.get(url)
        .then(function (response) {
              resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
          console.log(error);
        });
  }) 
}