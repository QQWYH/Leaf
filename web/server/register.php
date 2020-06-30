<?php
include_once "./commonDB.php";


$username=$_REQUEST["username"];
$password=$_REQUEST["password"];
$email=$_REQUEST["email"];

$sql = "SELECT * FROM `user` WHERE username = '$username'";
$r = mysqli_query($db, $sql);
$num= mysqli_num_rows($r);
if($num == 1){
    echo '{"status":"error","msg":"该用户已经存在，请重新填写注册的昵称!!"}';
    
  }else{
    $sql = "INSERT INTO user " .
      "(id,username,password,user_date,phone)" .
      "VALUES " .
      "(NULL,'$username','$password','2020-06-28',$phone)";
  
    $retval = mysqli_query($db, $sql);
  
    if (!$retval) {
      die('无法插入数据: ' . mysqli_error($conn));
    }
  
    echo '{"status":"success"}';
  }
?>