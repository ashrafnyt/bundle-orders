<h1>Hello, World.</h1>

<?php 
    // connect to the database
    dataBaseConnect('localhost','root','');
    
    // get variables value by ajax send
    $username = _POST['username'];
    $bundle = _POST['bundle'];
    $price = _POST['price'];
    
    
    $sql = 'insert into orders (username,bundle,price)values ("'.$username.'","'.$bundle.'","'.$price.'");';
    // End of insert data into orders table 

    $query = mysql_query($sql);
    // execute the query

    $reusult = mysql_fetch_assoc($query);
    // execute the result of the query

    echo json_encode($reusult);
    

    mysqli_close($connection);
    // close the database connection
 
    // database connection 
    function dataBaseConnect(hostName,userName,password,dbName){
        $servername =hostName; // database hostname
        $username = userName;  // database username
        $password = password;  // database password
        $dbName = dbName;       // database name

        // Create connection to database
        $connection = new mysqli($servername, $username, $password,$dbName);

        // Check database connection
        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        } 
        echo "Connected to Database successfully!"; 
    }

?>