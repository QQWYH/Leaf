<?php
	
$db = mysqli_connect("localhost", "root", "root", "leaf");


$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$email    = $_REQUEST["email"];

$sql = "SELECT * FROM user WHERE username='$username'";
// print_r($sql);
# 执行SQL语句
$result = mysqli_query($db,$sql);


if(mysqli_num_rows($result) == 0)
{

$sql = "INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES (NULL, '$username', '$password', '$email')";
$result = mysqli_query($db, $sql);
  
// $arr = array("status"=>"success","msg"=> "恭喜你，注册成功！");
// echo json_encode($arr);
  echo '{"status":"success","msg":"恭喜你，注册成功！"}';
}else{
  # 该用户已经存在，不能再注册
  echo '{"status":"error","msg":"抱歉，该用户名已经被注册，请重新选择一个更优秀的名字！！"}';
}
?>