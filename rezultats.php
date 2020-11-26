<!DOCTYPE html>
<html>
<head>
    
    <link rel="icon" href="Helpio_logo_melns.png">
    <meta charset="utf-8">
    <title>Helpio - karte.</title>
    <link rel="stylesheet" href="stils.css">
  	<link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;800&display=swap" >
    <style>
      .augsa {
            background-color: #3ddb86;
            list-style-type: none;
              margin: 0;
              padding: 0;
          }
          .helpio_augsa {
            display: inline-block;
            padding: 15px;
          }
          .vardarbiba {
            display: inline-block;
            padding-right: 4%;
            float: right;
            padding-top: 46px;
          }
       .teksts_rez{
         font-weight: 500;
         font-family: 'Manrope', sans-serif;
         display: block;
         font-size: 22px;
         padding: 2%;
         padding-left: 5%;
         padding-right: 5%;
         text-align: center;
         background-color:#D8EFFF;
         border-radius: 20px;
         margin: 3%;
       }
       .links_rez{
         color:#4481F4;
       }
       @media only screen and (max-device-width: 600px) {
          .teksts_rez{
           font-size: 42px;
           padding: 7%;
           padding-left: 6%;
           padding-right:6%;
           border-radius: 60px;
           margin: 2%;
         }
         .links_rez{
           color:#4481F4;
         }
       }
    </style>
</head>

<body>
  <div>
		<ul class="augsa">
			<li class="helpio_augsa">
				<a href="index.html">
					<img src="helpio.jpg" alt="Logo" height="106" width="277" >
				</a>
			</li>
			<li class="vardarbiba">
				<a href="lapa_vardarbiba.html">
					<img src="vardarbiba_ista.png" alt="par vardarbibu" height="42" width="290">
				</a>
			</li>
		</ul>
	</div>
  <br>
  <p>
    <?php
        $c=0;
        for($id = 1; $id <= 32; $id++){
          if(isset($_POST[$id.''])){
            $c++;
            //echo $_POST[$id.''], "<br>";
          }
        }
        //echo $c;
        if($c > 0){
          //echo $c;
          echo "<p class='teksts_rez'>Tavas sniegtās atbildes norāda uz iespējamu vardarbību tavā dzīvē. Atbalstu un risinājumu vari meklēt <a class='links_rez' href='lapa-karte.html'>šeit</a>.</p>";
          //echo "Tevis sniegtās atbildes norāda uz iespējamu vardarbību tavā dzīvē. Atbalstu un risinājumu vari meklēt "; //<p >class="teksts_2" <a href="lapa-karte.html">šeit</a></p>
        }else{
          //echo $c;
          echo "<p class='teksts_rez'>Tavas sniegtās atbildes nenorāda uz iespējamu vardarbību tavā dzīvē. Bet, ja neesi vēl pārliecināts, tad palīdzību vari meklēt <a class='links_rez' href='lapa-karte.html'>šeit</a>.</p>";
          //echo"<p class="teksts_2">Tevis sniegtās atbildes mūsu testā uz vardarbību tavā dzīvē nenorāda. Bet, ja Tev vajadzīgs atbalsts, vari to meklēt <a href="lapa-karte.html">šeit</a>.</p>";
        }
    ?>
  </p>

</body>
