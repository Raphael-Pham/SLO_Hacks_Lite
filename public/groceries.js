const getGroceryForm = () => {
   var form = document.getElementById('search');

   const entry = {item: form.value};

   fetch('/groceries_req', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(entry),
   })
      .then(res => res.json())
      .then(entry => {
         console.log(`Success:`, entry);
   })
   .catch((error) => {
      console.error('Error:', error);
   });
}

document.addEventListener('click', event => {
   if (event.target.id === 'submit')
      getGroceryForm();
})