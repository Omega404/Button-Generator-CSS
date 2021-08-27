let app = {};
//funciones como expresion
app = (() => {
   let self = {};
   self.version = '1.0';
   self.generar = (numero) => {
      let cleft = document.getElementById("left")
      let cmid = document.getElementById("mid");
      let cright = document.getElementById("right");
      let j = 0
      for (let i = 0; i < numero; i++) {
         j++
         let btn = document.createElement("button");
         btn.innerHTML = "Boton " + (i+1);
         if (j==13) {
            j -= 12
         }
         if (j <= 3) {
            btn.className = "btn btn-primary col-4 mt-2 me-12";
            cleft.appendChild(btn)
         }
         if (j > 3 && j <= 9) {
            btn.className = "btn btn-success col-2 mt-2 me-12";
            cmid.appendChild(btn)
         } 
         if (j > 9 && j <= 12) {
            btn.className = "btn btn-danger col-4 mt-2 me-12";
            cright.appendChild(btn)
         }
      }
   }
   return self;
})();