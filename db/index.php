<?php
    class Database {
        // properties
        private $hostname = "localhost";
        private $username = "root";
        private $password = "root";
        private $database = "astrograma";
        
        public $conn;

        // constructor
        public function __construct()
        {
            $this->conn = $this->getConnection();
        }

        //methods
        private function getConnection() {
            $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->database, $this->port);

            if($connection == false) {
                echo "no connection with database";
                die();
            }else{
            echo " connection with database";
            return $connection;
            }
           
        }

        public function selectQuery($sql) {
            return mysqli_query($this->conn, $sql)->fetch_all(MYSQLI_ASSOC);
        }

        // public function selectAndInsertQuery($sqlToInsert, $sqlToSelect) {
        //     mysqli_query($this->conn, $sqlToInsert);
        //     return mysqli_query($this->conn, $sqlToSelect)->fetch_all(MYSQLI_ASSOC);
        // }
        
        public function insertQuery($sql){
            mysqli_query($this->conn, $sql);
        }
    }
?>