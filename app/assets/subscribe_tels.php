<?php
	$name = $_POST['name'];
	$tel = $_POST['tel'];

	$new_subscriber = "Name: $name, Cellphone: $tel"."\n";
	$file = fopen("mb_subscribed_tels.txt", "r+") or die("Unable to open file!");
	fread($file,filesize("mb_subscribed_tels.txt"));
	fwrite($file, $new_subscriber);
	fclose($file);
	echo("Subscriber data collected correctly.");
?>
