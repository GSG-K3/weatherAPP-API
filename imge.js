let searchInput = document.getElementById("Enter-img");
let searchResults = document.getElementById("result");


 
  document.getElementById('submitt').addEventListener('click', (imageId)=>{
    let xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function () {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        let response = JSON.parse(xhr.responseText);


        for (var i = 0; i < response.data.length; i++) {
             let gif = response.data[i];
          let gifUrl = gif.images.fixed_height.url;
            //  let gifUrl = gif.images['480w_still'].url;   
             let img = document.createElement('img');

          img.src = gifUrl;
          // img.setAttribute('width', 250);
          // img.setAttribute('height', 200);
          searchResults.appendChild(img);
          img.setAttribute('id', imageId);
          console.log(gifUrl);
          
        }
      }
    };
    xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=' + searchInput.value + '&limit=3' +'&api_key=PjePAILYBVdogMvZdg6PaRPNAQoLmbIX');
    xhr.send();
    // removeImage(gifUrl,result);
    searchResults.innerHTML = ""; 
  });