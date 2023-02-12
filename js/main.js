/**
 * @file Script contenant les fonctions de base
 * @author Jonathan Martel (jmartel@cmaisonneuve.qc.ca)
 * @version 0.1
 * @update 2019-01-21
 * @license Creative Commons BY-NC 3.0 (Licence Creative Commons Attribution - Pas d’utilisation commerciale 3.0 non transposé)
 * @license http://creativecommons.org/licenses/by-nc/3.0/deed.fr
 *
 */



//const BaseURL = "https://vino-etu.000webhostapp.com/";
const BaseURL = "http://localhost:8080/vino_etu/";


window.addEventListener('load', function () {

  
  /*
  * Gerer l evenement lorsqu on clique sur le boutton  'Boire'
  */
  document.querySelectorAll(".btnBoire").forEach(function (element) {
    console.log(element);
    element.addEventListener("click", function (evt) {
      let id = evt.target.parentElement.dataset.id;
      let requete = new Request(BaseURL + "index.php?requete=boireBouteilleCellier", { method: 'POST', body: '{"id": ' + id + '}' });

      fetch(requete)
        .then(response => {
          if (response.status === 200) {
            // Récharger la page  
            location.reload();
            return response.json();
          } else {
            throw new Error('Erreur');
          }
        })
        .then(response => {
          console.debug(response);
        }).catch(error => {
          console.error(error);
        });
    })

  });

  /*
  * Gerer l evenement lorsqu on clique sur le boutton  'Ajouter'
  */
  document.querySelectorAll(".btnAjouter").forEach(function (element) {
    console.log(element);
    element.addEventListener("click", function (evt) {
      let id = evt.target.parentElement.dataset.id;
      let requete = new Request(BaseURL + "index.php?requete=ajouterBouteilleCellier", { method: 'POST', body: '{"id": ' + id + '}' });

      fetch(requete)
        .then(response => {
          if (response.status === 200) {
            // Récharger la page 
            location.reload();
            return response.json();
          } else {
            throw new Error('Erreur');
          }
        })
        .then(response => {

          console.debug(response);
        }).catch(error => {
          console.error(error);
        });
    })

  });
  /*
  * Gerer l evenement lorsqu on clique sur le boutton  'Boire'
  */
  document.querySelectorAll(".btnBoiresaq").forEach(function (element) {
    console.log(element);
    element.addEventListener("click", function (evt) {
      let id = evt.target.parentElement.dataset.id;
      let requete = new Request(BaseURL + "index.php?requete=boireBouteilleCellierSAQ", { method: 'POST', body: '{"id": ' + id + '}' });

      fetch(requete)
        .then(response => {
          if (response.status === 200) {
            // Récharger la page  
            location.reload();
            return response.json();
          } else {
            throw new Error('Erreur');
          }
        })
        .then(response => {
          console.debug(response);
        }).catch(error => {
          console.error(error);
        });
    })

  });

  /*
  * Gerer l evenement lorsqu on clique sur le boutton  'Ajouter'
  */
  document.querySelectorAll(".btnAjoutersaq").forEach(function (element) {
    console.log(element);
    element.addEventListener("click", function (evt) {
      let id = evt.target.parentElement.dataset.id;
      let requete = new Request(BaseURL + "index.php?requete=ajouterBouteilleCellierSAQ", { method: 'POST', body: '{"id": ' + id + '}' });

      fetch(requete)
        .then(response => {
          if (response.status === 200) {
            // Récharger la page 
            location.reload();
            return response.json();
          } else {
            throw new Error('Erreur');
          }
        })
        .then(response => {

          console.debug(response);
        }).catch(error => {
          console.error(error);
        });
    })

  });


  /*
  * Gerer l evenement lorsqu on keyup fait autocomplete'
  */
  let inputNomBouteille = document.querySelector("[name='nom_bouteille']");
  //console.log(inputNomBouteille);
  let liste = document.querySelector('.listeAutoComplete');

  if (inputNomBouteille) {
    inputNomBouteille.addEventListener("keyup", function (evt) {
      console.log(evt);
      let nom = inputNomBouteille.value;
      liste.innerHTML = "";
      if (nom) {
        let requete = new Request(BaseURL + "index.php?requete=autocompleteBouteille", { method: 'POST', body: '{"nom": "' + nom + '"}' });
        fetch(requete)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error('Erreur');
            }
          })
          .then(response => {
            //console.log(response);
            response.forEach(function (element) {
              liste.innerHTML += "<p data-id='" + element.id + "'>" + element.nom + "</p>";
            })
          }).catch(error => {
            console.error(error);
          });
      }


    });

        let bouteille = {
        nom : document.querySelector(".nom_bouteille"),
        millesime : document.querySelector("[name='millesime']"),
        id_cellier : document.querySelector("[name='id_cellier']"),
        quantite : document.querySelector("[name='quantite']"),
        // notes : document.querySelector("[name='notes']"),
        date_achat : document.querySelector("[name='date_achat']"),
        garde_jusqua : document.querySelector("[name='garde_jusqua']"),
      };



    liste.addEventListener("click", function (evt) {
      console.dir(evt.target)
      if (evt.target.tagName == "P") {
        bouteille.nom.dataset.id = evt.target.dataset.id;
        bouteille.nom.innerHTML = evt.target.innerHTML;
        liste.innerHTML = "";
        inputNomBouteille.value = "";
      }
    });

    let btnAjouter = document.querySelector("[name='ajouterBouteilleCellier']");
    if (btnAjouter) 
    {
      btnAjouter.addEventListener("click", function (evt) {
        
        let id = evt.target.parentElement.dataset.id;
        evt.preventDefault();

        var param = {
          "id_cellier": bouteille.id_cellier.value,
          "id_bouteille":bouteille.nom.dataset.id,
          "date_achat":bouteille.date_achat.value,
          "garde_jusqua":bouteille.garde_jusqua.value,
         // "notes":bouteille.notes.value,
          "quantite":bouteille.quantite.value,
          "millesime":bouteille.millesime.value,
        };
        
        // Said :    
        // Validation des champs
        let status = validAjoutNouvelleBouteilleSaq(param);
        if(status)
        {  
          let requete = new Request(BaseURL + `index.php?requete=ajouterNouvelleBouteilleCellier`, { method: 'POST', body: JSON.stringify(param) });
          console.log(JSON.stringify(param));
          fetch(requete)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error('Erreur');
            }
          })
          .then(response => {
            console.log(response);

            //window.location = BaseURL + "?requete=listecellier";
            window.location = BaseURL + `?requete=cellierid&id=${id}`;

            }).catch(error => {
              console.error(error);
              window.location = BaseURL + `?requete=cellierid&id=${id}`;
            });
        }
      });
    }
  }

      /*
      * Affichage de la vue de modification d'une bouteille  
      */
      let btnModifier = document.querySelectorAll(".btnModifier").forEach(function(e){
        //console.log(e);
        e.addEventListener('click', function(evt){
          let id = evt.target.parentElement.dataset.id;

          
          console.log(location.href);
          //let requete = new Request(BaseURL+`index.php?requete=modifier`);//, {method: 'GET'}?id=${id}`,
          location.href = BaseURL+`index.php?requete=getBouteille&id=${id}`;//
        })
      });
      let btnModifiersaq = document.querySelectorAll(".btnModifiersaq").forEach(function(e){
        //console.log(e);
        e.addEventListener('click', function(evt){
          let id = evt.target.parentElement.dataset.id;
          
          console.log(location.href);
          //let requete = new Request(BaseURL+`index.php?requete=modifier`);//, {method: 'GET'}?id=${id}`,
          location.href = BaseURL+`index.php?requete=getBouteillesaq&id=${id}`;//
        })
      });

      /*
      * Affichage de la vue de cellier
      */
     let cellier = document.querySelectorAll(".cellierid").forEach(function(e){

       //console.log(e);
       e.addEventListener('click', function(evt){
        let id = evt.target.parentElement.dataset.id;
           location.href = BaseURL+`index.php?requete=cellierid&id=${id}`; 
        })
      });


    /**
     * Modification d'une bouteille
     */
    document.querySelectorAll(".modifierBouteille").forEach(function(e) {
      console.log(e);
      e.addEventListener('click', function(evt){        
        let id = evt.target.parentElement.dataset.id;
        //console.log(id);
        var bouteille = {
          nom : document.querySelector(".nom_bouteille"),
          id : document.querySelector("[name=id]"),
          millesime : document.querySelector("[name='millesime']"),
          pays : document.querySelector("[name='pays']"),
          id_cellier : document.querySelector("[name='id_cellier']"),
          id_type : document.querySelector("[name='id_type']"),
          quantite : document.querySelector("[name='quantite']"),
          date_achat : document.querySelector("[name='date_achat']"),
          prix_achat : document.querySelector("[name='prix_achat']"),
          garde_jusqua : document.querySelector("[name='garde_jusqua']"),
          notes : document.querySelector("[name='notes']"),          
        };
        let boolModifPrive = formValModPrive();
        
        /**Validation des champs de modif des bouteille privé */
        console.log(bouteille.quantite.value);
        function formValModPrive() {
          let prixRex = /^(\d+)(.\d{1,2})?$/,
              nomRex = /^([0-9a-zA-Z\_&':`èûüêÉ;ïîë-]+\s?){1,6}$/i,
              notesRex = /^10|[1-9]$/,
              paysRex = /([a-z\']+\s?){1,6}$/i,
              quantiteRex = /^[0-9]{0,4}$/i,
              garde_jusquaRex = /^\d{4}|[a-z]{2,4}$/i,
              millesimeRex = /(^[1|2]\d{3}$)/;
              console.log(bouteille.nom.value.trim().replace(/\s+/g, ' '));
          if (nomRex.test(bouteille.nom.value.trim().replace(/\s+/g, ' ')) == false) {
            document.getElementById("nom").textContent = "Veuillez entrer un nom";
            return false;
          } else {
            document.getElementById("nom").textContent = "";
          }           
          if (millesimeRex.test(bouteille.millesime.value.trim()) == false) {
            document.getElementById("millesime").textContent = "Veuillez entrer une année";
            return false;
          } else {
            document.getElementById("millesime").textContent = "";
          } 
          if (quantiteRex.test(bouteille.quantite.value.trim()) == false) {
            document.getElementById("quantite").textContent = "Veuillez entrer un chiffre";
            return false;
          } else {
            document.getElementById("quantite").textContent = "";
          } 
          if (bouteille.date_achat.value == "") {
            document.getElementById("date_achat").textContent = "Veuillez entrer une date d'achat";            
            return false;
          } else {
            document.getElementById("date_achat").textContent = "";
          }
          if (garde_jusquaRex.test(bouteille.garde_jusqua.value) == false) {
            document.getElementById("garde_jusqua").textContent = "Besoin de garder jusqua?";
            return false;
          } else {
            document.getElementById("garde_jusqua").textContent = "";
          }
          if (prixRex.test(bouteille.prix_achat.value) == false) {
            document.getElementById("prix_achat").textContent = "Veuillez entrer un prix d'achat";
            return false;
          } else {
            document.getElementById("prix_achat").textContent = "";
          } 
          if (notesRex.test(bouteille.notes.value) == false) {
            document.getElementById("notes").textContent = "Veuillez entrer une note sur 10";
            return false;
          } else {
            document.getElementById("notes").textContent = "";
          }
          console.log(paysRex.test(bouteille.pays.value.trim().replace(/\s+/g, ' ')));
          if (paysRex.test(bouteille.pays.value.trim().replace(/\s+/g, ' ')) == false || bouteille.pays.value.trim().replace(/\s+/g, '') == "") {
            document.getElementById("pays").textContent = "Veuillez entrer un pays";
            return false;
          } else {
            document.getElementById("pays").textContent = "";
          }      
          console.log("submit");
          return true;
        }
         console.log(bouteille.pays.value.trim().replace(/\s+/g, ' '));
        var param = {
          "id":bouteille.id.value,
          "nom":bouteille.nom.value.trim().replace(/\s+/g, ' '),
          "pays":bouteille.pays.value.trim().replace(/\s+/g, ' '),
          "millesime":bouteille.millesime.value.trim(),
          "id_cellier": bouteille.id_cellier.value,
          "id_type": bouteille.id_type.value,
          "quantite":bouteille.quantite.value.trim(),
          "date_achat":bouteille.date_achat.value,
          "prix_achat":bouteille.prix_achat.value.trim(),
          "garde_jusqua":bouteille.garde_jusqua.value.trim(),
          "notes":bouteille.notes.value.trim(),
        };
    if (boolModifPrive) {      
    
      let requete = new Request(BaseURL+"index.php?requete=modifierBouteilleCellier", {method: 'POST', body: JSON.stringify(param)});

      fetch(requete)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Erreur');
        }
      })
      .then(response => {
        console.log(response);
      
      }).catch(error => {
        console.error(error);

        //window.location = BaseURL + "?requete=listecellier";
        window.location = BaseURL + `?requete=cellierid&id=${id}`;
      });
        
    }
      })
    });

    /**
     * Modification d'une bouteille saq
     */
    document.querySelectorAll(".modifierBouteillesaq").forEach(function(e) {
      console.log(e);
      e.addEventListener('click', function(evt){
        let id = evt.target.parentElement.dataset.id;
        //console.log(id);
        let bouteille = {
          id : document.querySelector("[name=id]"),
          millesime : document.querySelector("[name='millesime']"),
          id_cellier : document.querySelector("[name='id_cellier']"),
          date_achat : document.querySelector("[name='date_achat']"),
          garde_jusqua : document.querySelector("[name='garde_jusqua']"),
          notes : document.querySelector("[name='notes']"),
        };

        var param = {
          "id":bouteille.id.value,
          "millesime":bouteille.millesime.value,
          "id_cellier": bouteille.id_cellier.value,
          "date_achat":bouteille.date_achat.value,
          "garde_jusqua":bouteille.garde_jusqua.value,
          "notes":bouteille.notes.value,
        };

        // Said :
        
        // Validation des champs
        let status = validModifBouteilleSaq(param);
        if(status)
        {              
          let requete = new Request(BaseURL+"index.php?requete=modifierBouteilleCelliersaq", {method: 'POST', body: JSON.stringify(param)});
          fetch(requete)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error('Erreur');
            }
          })
          .then(response => {
            console.log(response);
          
          }).catch(error => {
            console.error(error);
            window.location = BaseURL + `?requete=cellierid&id=${id}`;

          });
        }    
      })

    });

    /**Listenner pour le form ajoutPrive */
    let currentRequete = window.location.search.substring(window.location.pathname.lastIndexOf('/'));
    if (currentRequete.includes("ajouterNouvelleBouteilleCellierPrive") == true) {
      console.log(window.location.search.substring(window.location.pathname.lastIndexOf('/')));
      console.log(currentRequete.includes("ajouterNouvelleBouteilleCellierPrive"));
      
      let btn = this.document.querySelector("#ajoutPrive"); // [data-js-submit]      
      let form = document.getElementById("ajouterPrive");  // '[data-name="form"]'    
      btn.addEventListener("click", function (evt) { 
        evt.preventDefault(); 
        console.log(formValidator());      
        let bool = formValidator();
        console.log(bool);      
        if (bool) {
          form.submit();
        }    
      })
       /**
     * Methode de validation du form d'ajout privé
     * @return bool
     * @author Yordan 
     * 
    */
    function formValidator() {       
      let nomRex = /^([0-9a-zA-Z\_&':`èûüêÉ;ïîë-]+\s?){1,6}$/i,      
          nom = document.querySelector("[name='nom']").value.trim().replace(/\s+/g, ' '),
          millesimeRex = /(^[1|2]\d{3}$)/, 
          millesime = millesimeRex.test(form[2].value),
          quantite = form[3].value,
          prixRex = /^(\d+)(.\d{1,2})?$/,
          prix_achat = form[4].value.trim().replace(/\s+/g, ''),
          paysRex = /([a-z\']+\s?){1,6}$/i,
          pays = form[5].value.trim().replace(/\s+/g, ' '),
          date_achat = form[6].value,
          garde_jusquaRex = /^\d{4}|[a-z]{2,4}$/i,
          garde_jusqua = form[7].value.trim().replace(/\s+/g, ' ');
        console.log(millesime); //str.replace(/\s+/g, ' ')
        console.log(nomRex.test(form[1].value));

      if (nomRex.test(nom) == false) {
        document.getElementById("nom").textContent = "Veuillez entrer un nom";        
        return false;
      } else {
        document.getElementById("nom").textContent = "";
      } 
      if (millesime == false) {
        document.getElementById("millesime").textContent = "Veuillez entrer une année";        
        return false;
      } else {
        document.getElementById("millesime").textContent = "";
      } 
      if (quantite < 1) {
        document.getElementById("quantite").textContent = "Veuillez entrer une quantité";
        formValid = false;

        return false;
      } else {
        document.getElementById("quantite").textContent = "";
      } 
      if (prixRex.test(prix_achat) == false) {
        document.getElementById("prix_achat").textContent = "Veuillez entrer un prix d'achat";
        return false;
      } else {
        document.getElementById("prix_achat").textContent = "";
      } 
      if (paysRex.test(pays) == false) {
        document.getElementById("pays").textContent = "Veuillez entrer un pays";
        return false;
      } else {
        document.getElementById("pays").textContent = "";
      } 
      if (date_achat == "") {
        document.getElementById("date_achat").textContent = "Veuillez entrer une date d'achat";
        return false;
      } else {
        document.getElementById("date_achat").textContent = "";
      }
      if (garde_jusquaRex.test(garde_jusqua) == false) {
        document.getElementById("garde_jusqua").textContent = "Besoin de garder jusqua?";
        return false;
      } else {
        document.getElementById("garde_jusqua").textContent = "";
      } 
      console.log("submit");      
      return true;      
    }    
    } 
        
    /**Validation de modif profil */
    if (currentRequete.includes("profilmod") == true) {        
      let btnModProfil = document.querySelector("[name='btnModProfil']"),
          formModProfil= document.querySelector('#modProfilForm');
      //console.log(formModProfil[0]);
      document.querySelector("[name='btnModProfil']").addEventListener('click', function (e) {
        e.preventDefault();      
        let boolModProf = formModProfilVal(); 
        console.log(boolModProf);  
        if (boolModProf) {
          formModProfil.submit();
        }
      });

      //
      /**Methode de validation du form modification du profil
     * @return bool
     * @author Yordan 
     */
    function formModProfilVal() { 
      let nomRex = /^([0-9a-zA-Z\_&':]+\s?){1,3}$/i,
          nom = document.querySelector("[name='nom']");//formModProfil[0].value;
          console.log(nom);
      if (nomRex.test(nom.value) == false) {
        document.getElementById("nom").textContent = "Veuillez remplir ce champ";        
        return false;
      }  else {
        document.getElementById("nom").textContent = "";
        return true;
      } 
    }
    }

    /*Validation du formulaire ajout de cellier*/
    if (currentRequete.includes("ajoutercellier")) {      
      formAjoutCellier = this.document.getElementById("formAjoutCellier");
      
      formAjoutCellier[2].addEventListener("click", (e) => {
        e.preventDefault();
        console.log(formAjoutCellier.length);
        let boolean = valAjoutCellier();
        if (boolean) {
          formAjoutCellier.submit();
        }
      });

      /**
       * Methode de validation d'ajout cellier
       * @returns boolean
       * @author Yordan 
       * 
       */
      function valAjoutCellier() {
        let nomLieuRex = /^([0-9a-zA-Z\_&':`èûüêÉ;ïîë-]+\s?){1,6}$/i;
        for (let i = 0; i < formAjoutCellier.length - 1; i++) {          
          if (nomLieuRex.test(formAjoutCellier[i].value) == false) {
            //let value = deburr(formAjoutCellier[i].value);
            //console.log(value);
            document.getElementById(i).textContent = "Veuillez remplir ce champ";
            return false;
          } 
          document.getElementById(i).textContent = "";
        }          
        console.log("ajouter");
        return true;        
      }
    } 
    
    /**Validation du login */
   /*  if (currentRequete.includes("login") == true) {
      console.log(window.location.search);
      let formLogin = this.document.getElementById("login");
      console.log(formLogin[2]);
      formLogin[2].addEventListener("click", (e) => {
        e.preventDefault();
        let boolean = valLogin();
        if (boolean) {
          formLogin.submit();
        }
        
      }); */

      /**
       * Methode de validation d'ajout cellier
       * @returns boolean
       * @author Yordan 
       */
     /*  function valLogin() {
        let courrielRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
            mdpRex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        for (let i = 0; i < formLogin[2].length -1; i++) {
          if (courrielRex.test(formLogin[i].value) == false && formLogin[i].name == "email" || mdpRex.test(formLogin[i].value) == false && formLogin[i].name == "mdp") {
            document.getElementById("erreurLogin").textContent = "Combinaison courriel/mot de passe erronée";            
            return false;            
          }          
        }
        console.log("ajouter");
        return true; 
      }

    } */


    // SAID ..
    /**
     * Methode de validation de l'ajout d une nouvelle bouteille SAQ
     */
    function validAjoutNouvelleBouteilleSaq(params) {
      
      let formValid = true,  
          id_bouteille = params.id_bouteille;    
          millesime = params.millesime;
          quantite = params.quantite; 
          date_achat = params.date_achat; 
          garde_jusqua = params.garde_jusqua;
  
      // Valider nom bouteuille
      if (id_bouteille == "") {
        document.getElementById("nom_bouteille").textContent = "Veuillez choisir une bouteille";
        formValid = false;
        return false;
      } else {
        document.getElementById("nom_bouteille").textContent = "";
      } 

      // Valider date de recolte
      if (millesime == "") {
        document.getElementById("millesime").textContent = "Veuillez entrer une année";
        formValid = false;
        return false;
      } else {
        // N'est pas un chiffre
        if (!millesime.match(/^[0-9]{4}$/)){
          document.getElementById("millesime").textContent = "Veuillez entrez une année de 4 chiffres";
          formValid = false;
          return false;
        }else{  
            if (millesime > '2023') {
              document.getElementById("millesime").textContent = "Veuillez rentrez une année inférieure a 2023";
              formValid = false;
              return false;
            }else{
              document.getElementById("millesime").textContent = "";
            } 
        }
      }

      // Valider Quantite
      if (!quantite.match(/^[0-9]+$/)){
        document.getElementById("quantite").textContent = "Veuillez entrez une quantité";
        formValid = false;
        return false;
      }else{  
        if (quantite < 0){
          document.getElementById("quantite").textContent = "Veuillez entrer un chiffre positif";
          formValid = false;
          return false;
        } else {
          document.getElementById("quantite").textContent = "";
        }
      }

      // Valider date achat
      if (date_achat == "") {
        document.getElementById("date_achat").textContent = "Veuillez entrez une date d'achat";
        formValid = false;
        return false;
      } else {
        document.getElementById("date_achat").textContent = "";
      }
      
      // Valider garde_jusqua
      if (garde_jusqua == "") {
        document.getElementById("garde_jusqua").textContent = "Besoin de garder jusqua?";
        formValid = false;
        return false;
      } else {
        document.getElementById("garde_jusqua").textContent = "";
      } 

      // Retourner Resultat      
      if (formValid === true) {
        return true;
      }
    }

    
    /**
     * Methode de validation lors de la modification d une bouteille SAQ
    */
    function validModifBouteilleSaq(params) {
          
      let formValid = true,  
          millesime = params.millesime;
          notes = params.notes; 
          date_achat = params.date_achat; 
          garde_jusqua = params.garde_jusqua;

      // Valider date achat
      if (date_achat == "") {
        document.getElementById("date_achat").textContent = "Veuillez entrez une date d'achat";
        formValid = false;
        return false;
      } else {
        document.getElementById("date_achat").textContent = "";
      }
      
      // Valider garde_jusqua
      if (garde_jusqua == "") {
        document.getElementById("garde_jusqua").textContent = "Besoin de garder jusqua?";
        formValid = false;
        return false;
      } else {
        document.getElementById("garde_jusqua").textContent = "";
      } 

      // Valider date de recolte
      if (millesime == "") {
        document.getElementById("millesime").textContent = "Veuillez entrer une année";
        formValid = false;
        return false;
      } else {
        // N'est pas un chiffre
        if (!millesime.match(/^[0-9]{4}$/)){
          document.getElementById("millesime").textContent = " Veuillez entrez une année de 4 chiffres";
          formValid = false;
          return false;
        }else{  
            if (millesime > '2023') {
              document.getElementById("millesime").textContent = "Veuillez rentrez une année inférieure a 2023";
              formValid = false;
              return false;
            }else{
              document.getElementById("millesime").textContent = "";
            } 
        }
      }

      // Valider Notes
      if (!notes.match(/^[0-9]+$/)){
        document.getElementById("notes").textContent = "Veuillez entrez une notes sur 10";
        formValid = false;
        return false;
      }else{  
        if ((notes < 1) || (notes > 10)) {
          document.getElementById("notes").textContent = "Veuillez entrez un chiffre de 1 à 10";
          formValid = false;
          return false;
        } else {
          document.getElementById("notes").textContent = "";
        }
      }

      // Retourner resultat
      if (formValid === true) {
        return true;
      }
    }

});

