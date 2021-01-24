const getLocationForm = () => {
   var form = document.getElementById('fname');
   const data = {location: form.value};

   fetch('/yelp_req', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
   })
      .then(res => {
         console.log(res);
         return res.json();
      })
      .then(data => {
         console.log(`Success:`, data);
   })
   .catch((error) => {
      console.error('Error:', error);
   });
}

document.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
     getLocationForm();
     e.preventDefault();
   }
});
