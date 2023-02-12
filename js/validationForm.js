

window.addEventListener('load', function () {

    form = document.querySelector('[data-js-form-register]');
    btnSubmit = document.querySelector('[data-js-submit]');

    console.log(form);
    console.log(btnSubmit);


      btnSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        let bool = validateForm();
        if (bool)
        {
          form.submit()
        }
      });


  function validateForm(){

    let nom =  form.nom.value;
    let email =  form.email.value;
    let mdp =  form.mdp.value;
    
    let emailRegExp = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
      );

    if (nom == "") {
    form.elements.nom.nextElementSibling.textContent = "Veuillez entrer un nom";
    return false;
  } else {
    form.elements.nom.nextElementSibling.textContent = "";
  }
  if (email == "") {
    form.elements.email.nextElementSibling.textContent = "Veuillez entrer un email";
    return false;
  } else {
    form.elements.email.nextElementSibling.textContent = "";
  }
  if (!email.match(emailRegExp)) {
    form.elements.email.nextElementSibling.textContent = "Adresse email non valide";
    return false;
  } else {
    form.elements.email.nextElementSibling.textContent = "";
  }
  if (mdp == "") {
    form.elements.mdp.nextElementSibling.textContent = "Veuillez entrer un mot de passe";
    return false;
  } else {
    form.elements.mdp.nextElementSibling.textContent = "";
    return true;
  }
  }


})


