<?php 
	$recipient = "rhicks009@gmail.com, andrew@mandelbrot.mx";
	$subject = "You got mail";

	$name = $_POST['name'];
	$city = $_POST['city'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$formcontent="Hey Ryan, this is a new email written by a user through modrnbusiness.com official site; this is what they say:\n\nHi, my name is $name, I'm from $city and my email address is: $email\n\nI have a message for you, $message";
	$mailheader = "From: $email \r\n";
	
	if($subject == false || $name == false || $city == false || $email == false || $message == false){
		$mail_sent = false;
		
		?>

		<script type="text/javascript">
			alert("We can't send the message with blank fields, please fill the fields required.");
			window.location = '/';
		</script>

		<?php
	} else {
		$mail_sent = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
		if ($mail_sent == true){ ?>
			<script language="javascript" type="text/javascript">
				alert('Great! Your message was sent successfully.');
				window.location = '/';
			</script>

		<?php 
		} else { 
		?>

			<script type="text/javascript">
				alert('There was an error and the message could not be sent, try again and if the error persists, try to reach us on our social media channels.');
				window.location = '/';
			</script>
		
		<?php 
		} 
	}	
?>