<?php

//include config for database connection
//include_once '';

$id = $_GET["id"];
/* Select bank info by id and return bank info to $bank var
 * ...
 */
$bank = ["accountName" => "Bank 1", "accountNumber" => "122313213", "department" => "Ha Noi"];
echo json_encode($bank);
