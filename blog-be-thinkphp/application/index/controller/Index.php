<?php
namespace app\index\controller;
use think\Controller;
use think\Db;

class Index extends Controller
{
    public function index()
    {
        $data = Db::name('think_data')->find();
        $this->assign('result', $data);
        return $this->fetch();
    }

    public function hello($name = 'thinkphp'){
        $this -> assign('name',$name);
        return  $this->fetch();
    }

    public function test(){
        return 'public 方法 test';
    }

    public function sqlTest()
    {
        $con = mysql_connect("localhost","root","root");
        $sqlData = array( );
        $returnStr = '';
        if (!$con)
        {
            die('Could not connect: ' . mysql_error());
            $sqlData = array('code'=>-1);
            $returnStr = '连接失败  '.json_encode($sqlData,JSON_UNESCAPED_UNICODE);
        }else{
            mysql_select_db('blog',$con);//选中要操作的数据库
            mysql_set_charset('utf8',$con);
            $sql = 'select * from artical order by id asc';
            $result = mysql_query($sql,$con);
            $len = mysql_num_rows($result);
            for($i=0; $i<$len; $i++){
                $row = mysql_fetch_assoc($result);
                array_push($sqlData, $row);
            }
            $returnStr = '连接成功  '.json_encode($sqlData,JSON_UNESCAPED_UNICODE);
        }
        return $returnStr;
    }

}
