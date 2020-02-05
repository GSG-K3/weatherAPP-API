let searchInput = document.getElementById("Enter-img");
let searchResults = document.getElementById("imgResult");


 
  document.getElementById('submitt').addEventListener('click', (imageId)=>{
    let xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function () {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        let response = JSON.parse(xhr.responseText);


        for (var i = 0; i < imgResponse.data.length; i++) {
             let gif = imgResponse.data[i];
          let gifUrl = gif.images.fixed_height.url;
            //  let gifUrl = gif.images['480w_still'].url;   
             let img = document.createElement('img');

          img.src = gifUrl;
          // img.setAttribute('width', 250);
          // img.setAttribute('height', 200);
          imgResult.appendChild(img);
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

  url2 =     'http://api.giphy.com/v1/gifs/search?q=' + cityName.value + '&limit=3' +'&api_key=PjePAILYBVdogMvZdg6PaRPNAQoLmbIX';
