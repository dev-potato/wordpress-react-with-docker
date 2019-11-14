<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['firstName']) && empty($_POST['email']) ) {
	echo json_encode(
		[
			'sent' => false,
			"message" => "Something went wrong. Some of the fields were not entered correctly."
		]
	);
	exit();
}

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = 'Contact from : ' . $_POST['firstName'];
	$from = $_POST['email'];
	$to = "nictayt.dev@gmail.com";

	// data

	$msg = $_POST['number'] . $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

	?>