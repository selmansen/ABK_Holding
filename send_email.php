<?php

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(isset($_POST)){

    if($_POST["name"] && $_POST["phone"] && $_POST["email"] && $_POST["message"]){

        $mail = new PHPMailer(true);

        try {
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->From 	  = "support@tamayotoservis.com";
            $mail->FromName   = "Müşteri İletişim Formu";
            $mail->Host       = 'mail.markahost.net';
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = 'tls';
            $mail->Username   = 'support@tamayotoservis.com';
            $mail->Password   = 'LPC?462zm';
            $mail->CharSet = "utf8";
            $mail->Port       = 587;
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
        
            //Recipients
            $mail->addAddress("support@tamayotoservis.com", "Tamay Support");
        
            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Müşteri İletişim Formu';
            $mail->Body    = '<table width="640"><tr><th align="left">Ad Soyad:</th><td>'. $_POST["name"] .'</td></tr><tr><th align="left">Telefon:</th><td>' . $_POST["phone"] . '</td></tr><tr><th align="left">E-mail:</th><td>' . $_POST["email"] . '</td></tr><tr><th align="left">Mesaj:</th><td>' . $_POST["message"] . '</td></tr></table>';

            if ( $mail->send() ){
                
                $alert = array(
                    "message" => "Mesajınız başarılı bir şekilde gönderildi.",
                    "type"   => "success"
                );

            }else{

                $alert = array(
                    "message" => "Mesajınız gönderilirken bir hata oluştu.",
                    "type"   => "danger"
                );

            }

        }catch (Exception $e) {
            $alert = array(
                "message" => $e->getMessage(),
                "type"   => "danger"
            );

        } 

    }else{
        $alert = array(
            "message" => "Lütfen tüm alanları doldurunuz!",
            "type"   => "danger"
        );
    }

    $_SESSION["alert"] = $alert;
    header("Location: index#contact");

}