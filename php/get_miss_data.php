<?php

//include config for database connection
//include_once '';

$id = $_GET["id"];
/* Select miss info by id and return miss info to $miss var
 * ...
 */

$missModel = [["id" => 0, "image" => "tieu_bang_001.jpeg"], ["id" => 1, "image" => "tieu_bang_002.jpeg"], ["id" => 2, "image" => "tieu_bang_003.jpeg"], ["id" => 3, "image" => "tieu_bang_004.jpeg"], ["id" => 4, "image" => "tieu_bang_005.jpeg"], ["id" => 5, "image" => "tieu_bang_006.jpeg"]];
$miss = ["missName" => "Tiểu băng", "missAddress" => "Hà Nội", "missBirthDate" => "28/10/1994", "missNumLikes" => "0", "missCommentShared" => "Kính áp tròng là phụ kiện không thể thiếu đối với giới trẻ, đặc biệt là các bạn nữ, và với mình nó rất thân thuộc, đặcbiệt là kính áp tròng của Mắt Nai. Các bạn vote ủng hộ cho mình nhé <3", "missModel" => $missModel];
echo json_encode($miss);
