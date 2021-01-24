const getLocationForm = () => {
   var form = document.getElementById('search');

   const data = {location: form.value};

   fetch('/yelp_req', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
   })
      .then(res => res.json())
      .then(data => {
         console.log(`Success:`, data);
   })
   .catch((error) => {
      console.error('Error:', error);
   });
}

document.addEventListener('click', event => {
   if (event.target.id === 'submit')
      getLocationForm();
})