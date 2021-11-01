<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div class="container"> 

            <div class="d-flex justify-content-center">

                <div class="col-8 m-4">

                    <form action="contact.php" method='POST'>

                        <div class="form-group">
                            <div class="text-center">
                                <h1>Contactez-moi</h1>

                            </div>

                            <div class="d-flex">

                                <input type="text" name="surname" placeholder="Nom" autocomplete="off" class="form-control"/>
                                <input type="text" name="firstname" placeholder="Prénom" autocomplete="off" class="form-control"/>

                            </div>

                                </br>

                                <input type="email" name="email" placeholder="Email" autocomplete="off" class="form-control"/>
                                </br>

                                <textarea rows="10" name="message" placeholder="votre message" class="form-control"></textarea>

                            </br>

                            <button type="submit" class="btn btn-lg btn-primary">Envoyer</button>

                        </div>

                    </form>

                </div>
                

            </div>



    </div>

</body>
</html>