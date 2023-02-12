

<div class="form-style-8">
	<h2>Votre Profil</h2>

	<?php
	
	if($_SESSION){
		echo '<div style="text-align: center;">';
		echo '<p>Numero ID: ' . $_SESSION['usager'][0]['id'] . '</p>';
		echo '<p>Nom: ' . $_SESSION['usager'][0]['nom'] . '</p>';
		echo '<p>Email: ' . $_SESSION['usager'][0]['email'] . '</p>';
		echo '</div>';
	}
	?>
</div>

<a href="?requete=profilmod" class="button-28 btnmodprofil">Modifier profil</a>


