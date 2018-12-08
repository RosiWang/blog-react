<?php
namespace app\index\controller;
use think\Controller;
use think\Db;

class Index extends Controller
{
    public function index()
    {
        $data = Db::name('artical')->find();
        $this->assign('result', $data);
        return $this->fetch();
    }

    /*
     * 插入记录
     */
    public function insertIntoData(){
//        $result = Db::execute('insert into think_data (id, data ) values (5, "ECMAScript32")');
//        dump($result);

        //查询构造器 --基于PDO实现
      $result =  Db::table('think_data')
            ->insert(['id' => 6, 'data' => 'thinkphp22']);
      dump($result);
    }

    /*
     * 查询
     */
    public function querySqlData(){
//        $list = Db::table('think_data')
//            ->field('data')
//            ->where('id', 1)
//            ->select();
        $result = Db::query('select * from think_data ');
//        dump($result);
        return json_encode($result,JSON_UNESCAPED_UNICODE);
    }

    /*
     * 更新记录
     */
    public function updateData($id){
//        $result = Db::execute('update think_data set data = "framework2" where id = 5');
//        dump($result);
        //查询构造器 --基于PDO实现
       $result =  Db::table('think_data')
            ->where('id', $id)
            ->update(['data' => "updateTest"]);
       dump($result);
    }

    /*
     * 删除记录
     */
    public function deleteSqlData(){
//        $result = Db::execute('delete from think_data where id = 5 ');
//        dump($result);

        // 删除数据
        Db::table('think_data')
            ->where('id', 6)
            ->delete();
    }

    public function hello($name = 'thinkphp'){
        $this -> assign('name',$name);
        return  $this->fetch();
    }

    public function test(){
        return 'public 方法 test';
    }

//    public function sqlTest()
//    {
//        $con = mysql_connect("localhost","root","root");
//        $sqlData = array( );
//        $returnStr = '';
//        if (!$con)
//        {
//            die('Could not connect: ' . mysql_error());
//            $sqlData = array('code'=>-1);
//            $returnStr = '连接失败  '.json_encode($sqlData,JSON_UNESCAPED_UNICODE);
//        }else{
//            header('Access-Control-Allow-Origin: *');
//            header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//            header('Access-Control-Allow-Methods: GET, POST, PUT');
//
//            mysql_select_db('blog',$con);//选中要操作的数据库
//            mysql_set_charset('utf8',$con);
//            $sql = 'select * from artical order by id asc';
//            $result = mysql_query($sql,$con);
//            $len = mysql_num_rows($result);
//            for($i=0; $i<$len; $i++){
//                $row = mysql_fetch_assoc($result);
//                array_push($sqlData, $row);
//            }
//            $returnStr = json_encode($sqlData,JSON_UNESCAPED_UNICODE);
//        }
//        return $returnStr;
//    }

}
