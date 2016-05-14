<?php
	$title = 'Contact | Beansprout';

	include('assets/php/header.php');
?>

	<main>
		<h1>Contact</h1>

		<form>
			<fieldset>
				<label for="Name">Name</label>
				<input type="text" name="Name">
			</fieldset>

			<fieldset>
				<label for="Email">Email</label>
				<input type="text" name="Email">
			</fieldset>
			
			<fieldset>
				<label for="Subject">Subject</label>
				<input type="text" name="Subject">
			</fieldset>
			
			<fieldset>
				<label for="Message">Message</label>
				<textarea></textarea>
			</fieldset>
		</form>
	</main>

<?php
	include('assets/php/footer.php');
?>
