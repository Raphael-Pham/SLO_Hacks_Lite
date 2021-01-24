const getGroceryForm = () => {
   var form = document.getElementById('fname');

   const entry = {item: form.value};

   fetch('/groceries_add', {
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
     getGroceryForm();
     e.preventDefault();
   }
});