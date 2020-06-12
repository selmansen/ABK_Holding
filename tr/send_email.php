<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-type: application/json');
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Origin: *");

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$name = $input['name'];
$email = $input['email'];
$tel = $input['tel'];
$subject = $input['subject'];

if(isset($_POST)){

    if($name && $email && $tel && $subject){

        $mail = new PHPMailer;

        try{
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->From 	  = "info@abk-holding.com";
            $mail->FromName   = "www.abk-holding.com";
            $mail->Host       = 'smtpout.secureserver.net';
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = 'ssl';
            $mail->Username   = 'info@abk-holding.com';
            $mail->Password   = 'VY@;7TuYE';
            $mail->CharSet = "utf8";
            $mail->Port       = 465;
            
            //Recipients
            $mail->addAddress("info@abk-holding.com", "info@abk-holding.com");

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'ABK Contact Form';
            $mail->Body    = '<table width="640"><tr><th align="left">Name Surname:</th><td>'. $name .'</td></tr><tr><th align="left">Phone:</th><td>' . $tel . '</td></tr><tr><th align="left">E-mail:</th><td>' . $email . '</td></tr><tr><th align="left">Subject:</th><td>' . $subject . '</td></tr></table>';

            if ( $mail->send() ){
                echo json_encode(["message" => "Your message has been successfully sent.", "type"   => "success" ], true);  
            }else{
                echo json_encode(["message" => "There was an error sending your message.", "type"   => "danger" ], true);

            }
        }catch (Exception $e) {
            echo json_encode(["message" => $e->getMessage(), "type"   => "danger" ], true);
        } 

    }else{
        echo json_encode(["message" => "Please fill all the fields!", "type"   => "danger" ], true);
    }
}

?>