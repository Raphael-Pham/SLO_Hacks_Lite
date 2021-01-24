var restaurant;

const getLocationForm = () => {
   var form = document.getElementById('fname');
   const data = {location: form.value};

   fetch('/yelp_req', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
   })
      .then(res => {
         return res.json();
      })
      .then(data => {
         restaurant = data.name;
         console.log(data);
         showRest(restaurant);
   })
   .catch((error) => {
      console.error('Error:', error);
   });
}

function showRest(restaurant){
   //reveal html
   var modal = document.getElementById("myModal");
   var result = document.getElementById("restaurant");
   result.innerText = '~' + restaurant + '~';
   modal.style.display = "block";
}

window.onclick = function(event) {
   var modal = document.getElementById("myModal");
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

document.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
     getLocationForm();
     e.preventDefault();
   }
});
