<div class="register">

<!--     <h1>Création de compte</h1>
   <form method="post">
        <p>Nom : <input name="nom"></p>
        <p>Email : <input name="email"></p>
        <p>Mot de passe : <input name="mdp"></p>

    </form> 
    <button>Créer</button>
 -->

    <div class="form-style-8">
  <h2>Création de compte</h2>
  <form data-js-form-register action="?requete=register" method="post">
    <input type="text" name="nom" placeholder="Nom" />
    <div class="error-message"></div>
    <input type="email" name="email" placeholder="Email" />
    <div class="error-message"></div>
    <input type="password" name="mdp" placeholder="Mot de passe" />
    <div class="error-message"></div>
    <button data-js-submit type="submit" class="top button-28">S'inscrire</button>
  </form>
</div>


</div>