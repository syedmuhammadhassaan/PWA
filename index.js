 console.log("helloworld");
 
 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }


  function getData()
  {
    console.log("testing");
    fetch("http://localhost:3000/").then(function(response)
    {
        return response.json()
    })
    .then(function(users){
    console.log("data from network",users);
    })
    .catch(function(error){
    console.log("Not Working");
    })

    caches.match("http://localhost:3000/").then(function(response)
    {
      if (!response){

        console.log("nodata");
      }
      return response.json();
    }).then(function(data){
      console.log("data from Cache =" ,data);
    }).then (function(){
      console.log("error");
    })
  

};