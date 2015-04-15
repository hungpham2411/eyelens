<?php

//include config for database connection
//include_once '';

$id = $_GET["id"];
/* Select repositories by id and return repository list to $repositoryList array
 * ...
 */
$repositoryList = array();
$repositoryList[] = "kho 1";
$repositoryList[] = "kho 2";
$checkEye = array("respositoryList" => $repositoryList, "available" => false);
echo json_encode($checkEye);
