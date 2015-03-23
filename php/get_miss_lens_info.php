<?php

//include config for database connection
//include_once '';

$id = $_GET["id"];
/* Select lens info by id and return lens info to $lens var
 * ...
 */

$lens = ["lensImage" => "images/lens/lens_001.png", "lensGroup" => "Starry", "lensName" => "NPW-C15 Starry Xám"];
echo json_encode($lens);
