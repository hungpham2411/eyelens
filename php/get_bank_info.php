<?php

//include config for database connection
//include_once '';

$id = $_GET["id"];
/* Select bank info by id and return bank info to $bank var
 * ...
 */
$bank = array("bankAccountName" => "Bank 1", "bankAccountNumber" => "122313213", "bankDepartment" => "Ha Noi");
echo json_encode($bank);
