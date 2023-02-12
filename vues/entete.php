<!DOCTYPE html>
<html lang="fr">

<head>
	<title>Vino</title>

	<meta charset="utf-8">
	<meta http-equiv="cache-control" content="no-cache">
	<meta name="viewport" content="width=device-width, minimum-scale=0.5, initial-scale=1.0, user-scalable=yes">

	<link rel="stylesheet" href="./css/normalize.css" type="text/css" media="screen">
	<link rel="stylesheet" href="./css/base_h5bp.css" type="text/css" media="screen">
	<link rel="stylesheet" href="./css/main.css" type="text/css" media="screen">
	<link rel="stylesheet" href="./css/ren.css" type="text/css" media="screen">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<base href="<?php echo BASEURL; ?>">
	<script src="./js/main.js"></script>
	<script src="./js/validationForm.js"></script>
	<!-- <script src="./js/plugins.js"></script> -->
	<!--<script src="./js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>-->
</head>


<body>
	<header>
		<!-- <h1>Cellier - <span class="vino">Vino</span>  - Cellar</h1>  -->

<div>
	
	<div class="flexLogoMenu">
	<?php
		if ($_SESSION) {
			echo'<div><a href="?requete=listecellier"><img src="/vino_etu/img/Logo-vino_Blanc1.png" alt="logo" class="logo"></a></div>';
		} else {
			echo'<div><a href="?requete=login"><img src="/vino_etu/img/Logo-vino_Blanc1.png" alt="logo" class="logo"></a></div>';
		}
		if ($_SESSION) {
			echo 
			'<div>
			<div class="dropdown">
				<div class="flexUsaFle">	
					<div><button class="dropbtn">Bienvenue ' . $_SESSION['usager'][0]['nom']. '</button></div>
					<div class="imgArrow">
							<img src="/vino_etu/img/arrow-blanc.png">
					</div>
				</div>

				<div class="dropdown-content">
					<a href="?requete=profil">Profil</a>
					<a href="?requete=listecellier">Liste Celliers</a>
					<a href="?requete=deconnexion">Déconnexion</a>
				</div>
				</div>
			</div>';
		}
		?>

	<?php
		if(!$_SESSION) {
			echo 
			'<div class="flexConnCreer">
				<div class="imgCreer">
					<a href="?requete=register">
						<img src="/vino_etu/img/user-account.png">
					</a>
				</div>
				<div class="imgLogin">
					<a href="?requete=login">
						<img src="/vino_etu/img/login.png">
					</a>
				</div>
			</div>';
		}
	?>

</div>
	

</div>

		
</header>
