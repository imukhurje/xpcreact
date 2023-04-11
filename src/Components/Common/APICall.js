/* global fetch */
import token from './token.js'
import Store from './Store.js'

class APICall {
  processReturn(result, callback) {
    result = JSON.stringify(result);
    result = result.replace(/'+/g,"'");
    result = result.replace(/--and--+/g,"&");
    result = JSON.parse(result);
    callback(result);
  }

  command(url, callback, method, postData) {
    if(method === null)method='GET'
    if(method === 'GET') {
      fetch(url, {method: 'GET',  headers: {'Content-Type': 'application/json', 'Accept' : 'application/json'}}).then(response => {  return response.json();})
      .then(data => {  this.processReturn(data, callback);})
      .catch(error => {  console.log(error);  return(null); });
    } else {
      postData.token = token
      if(postData.debug === null)return
      
      let final_url = postData.debug ? "https://editor.xplore.cloud/dev_command" : "/command"
      if(url !== '' && url !== null) {
          final_url = url
      }

      fetch(final_url, {method: method, headers: {'Content-Type': 'application/json', 'Accept' : 'application/json'}, body: JSON.stringify(postData)})
      .then(response => { 
      return response.json();}).then(data => {  this.processReturn(data, callback);})
      .catch((xhr, status, error) => {  console.log(xhr.responseText);  return(null); });
    }
  }  
}


export default APICall;