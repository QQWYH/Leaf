<?php
// mysqli_query($db,"SET NAMES utf8");
$db = mysqli_connect("localhost", "root", "root", "leaf");
$ids=$_REQUEST["url"];
$sql="SELECT * FROM nvgoodslist where id=$ids";
// mysqli_query($db,"SET NAMES utf8");
$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>