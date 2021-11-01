<?php
    require_once(_DIR_.'/vendor/autoload.php');
    use \Mailjet\Ressources;
    define('API_USER','c11b26c9a847003e54bc21247895b23d');
    define('API_LOGIN','0512b35944652e4588b7c57878fbfc4c');
    $mj = new \Mailjet\Client(API_USER, API_LOGIN, true,['version' => 'v3.1']);
    
    if (!empty($_POST['surname']) && !empty($_POST['firstname']) && !empty($_POST['message'])){

        $surname = htmlspecialchars($_POST['surname']);
        $firstname = htmlspecialchars($_POST['firstname']);
        $email=htmlspecialchars($_POST['email']);
        $message = htmlspecialchars ($_POST['message']);

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $body = [
                'Messages' => [
                  [
                    'From' => [
                      'Email' => "nzamba_n@yahoo.fr",
                      'Name' => "Phyl"
                    ],
                    'To' => [
                      [
                        'Email' => "nzamba_n@yahoo.fr",
                        'Name' => "Phyl"
                      ]
                    ],
                    'Subject' => "Greetings from Mailjet.",
                    'TextPart' => "$email, $message",
                   
                  ]
                ]
              ];
              $response = $mj->post(Resources::$Email, ['body' => $body]);
              $response->success();
              echo "Email envoyé avec success !"
        }else{
            echo "Email non valide";
        }
    }else{
        header('location:index.php');
        die();
    }
   
