const getIngredientForm = () => {
   var form = document.getElementById('fname');

   const entry = {ingredient: form.value};

   fetch('/ingredients_req', {
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

document.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
     getIngredientForm();
     e.preventDefault();
   }
});