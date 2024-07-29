export class Ui {
   displayDataGame(data) {
      let gamesBox = ``;
      for (let i = 0; i < data.length; i++) {
         gamesBox += `
         <div class="col-md-6 col-lg-3 col-12 slide">
         <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" ">
            <div  class="p-3 bg-3a497b h-100 position-relative">
               <figure class="position-relative">
                  <img class="object-fit-cover w-100" src="${data[i].thumbnail}" />
               </figure>
   
               <figcaption class="text-card text-light">
   
                  <div class="hstack tittel-card d-flex justify-content-between align-items-center">
                     <h3 class="h6 small">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="caption-text text-center hstack">
                     ${data[i].short_description}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer-text d-flex justify-content-between hstack align-content-center position-absolute bottom-0 pb-2 w-100 px-2">
               <span class="badge bg-dark">${data[i].genre}</span>
               <span class="badge bg-warning">${data[i].platform}</span>
            </footer>
         </div>
      </div>
         `;
      }

      document.getElementById("gameData").innerHTML = gamesBox;
   }

   displayDetails(data) {
      const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;

      document.getElementById("detailsContent").innerHTML = content;
   }
}
