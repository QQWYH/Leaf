<?php

$db = mysqli_connect("localhost", "root", "root", "leaf");

$sql="SELECT * FROM goodslist";

$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>