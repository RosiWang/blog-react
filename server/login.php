<?php
header('Access-Control-Allow-Origin:*');
echo header('Content-Type:text/plain;charset=utf-8');;
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
	 
	 mysql_select_db('blog',$con);//选中要操作的数据库
	 mysql_set_charset('utf8',$con);
	 $sql = 'select * from artical order by id asc';
   $sqlData = array( );
	  $result = mysql_query($sql,$con);
	   for($i=0; $i<2; $i++){
                    $row = mysql_fetch_assoc($result);
                     array_push($sqlData, $row);                    
                }

   // header("Content-type:text/html;charset=utf-8");

    // echo json_encode(array('name' => '孙晓辉', 'age' => 23),JSON_UNESCAPED_UNICODE);
     echo json_encode($sqlData,JSON_UNESCAPED_UNICODE);
    
	  
  }
?>