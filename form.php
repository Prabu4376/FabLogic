<?php 
ob_start(); 
error_log();
if(isset($_POST['name']) && isset($_POST['email'])){

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobilenumber'];
$city = $_POST['city'];
$message = $_POST['message'];

$mailHeading = 'FabLogic';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: MyFreeOnlineTools <mailmyfreeonlinetools.com>' . PHP_EOL .
'Reply-To: MyFreeOnlineTools <mailmyfreeonlinetools.com>' . PHP_EOL .
'X-Mailer: PHP/' . phpversion();

$to = 'prabu4376@gmail.com'; 


$messageSent = '<div>Name Sender : '.$name .'</div><div> Name Email : '.$email.' </div><div>Mobile Number : '.$mobile.'</div><div> City : <br/> '.$city.'</div><div> Message : <br/> '.$message.'</div>';

if( $name != '' || $email != '' || $mobile != ''|| $city != ''|| $message != ''){
mail($to,$subject,$messageSent,$headers);
echo 'Mail Send I Will Get Back to You....';
} 
}

?>