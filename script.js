fetch('https://whatyearisit-backend-pi-drab.vercel.app/')
   .then(response => response.json())
   .then(data => {
         document.querySelector("#year").textContent = data.year });
         