<!doctype HTML>

<html>
	<head>
		<meta charset='utf-8'>
		<title><?php echo $title; ?></title>
		<link href='http://fonts.googleapis.com/css?family=Roboto|Roboto+Slab' rel='stylesheet' type='text/css'>		
		<link rel="stylesheet" type='text/css' href='assets/css/style.css'>

		<?php include('assets/php/favicons.php'); ?>
	</head>

	<body>
		<header>
			<?php include('assets/php/nav.php'); ?>

			<h1><a href="index.php">Framework</a></h1>

			<div id="menu-toggle" class="mobile">
				<?php include('assets/svgs/hamburger.php'); ?>
			</div>
		</header>