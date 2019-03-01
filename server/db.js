/** 2019/2/25
 *author:zhanglibing
 *email:1053081179@qq.com
 *功能:
 */

const mysql = require('mysql');

module.exports = (sql, callback) => {
	const db = mysql.createConnection({
        host : 'localhost:801',
        user : 'root',
        password : '',
        database : 'tour'
    });

    db.connect();
    db.query(sql, callback);
   	db.end();
};

/*
* 简单封装
* */
const databaseConfig={
  host : 'localhost:801',
  user : 'root',
  password : '',
  database : 'tour'
}
//向外暴露方法
module.exports = {
  query : function(sql,params,callback){
    //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
    var connection = mysql.createConnection(databaseConfig);
    connection.connect(function(err){
      if(err){
        console.log('数据库链接失败');
        throw err;
      }
      // 它接受三个参数，第一个是SQL语句，但是要注意，当传变量的时候要用‘?’代替，不要使用字符串拼接；
      // 第二个参数就是按照参数一中‘?’的顺序将变量排列的数组；
      // 第三个参数就是回调函数，返回进行数据操作后的数据或者影响；（也可以传两个参数，SQL语句和回调函数，但是这种方法不安全，同时会让SQL语句过于复杂，所以我们一般不推荐使用）！
      connection.query( sql,params, function(err,results,fields ){
        if(err){
          console.log('数据操作失败');
          throw err;
        }
        //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
        callback && callback(results, fields);
        //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
        //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
        connection.end(function(err){
          if(err){
            console.log('关闭数据库连接失败！');
            throw err;
          }
        });
      });
    });
  }
};


// var db=require('../model/mysql.js');
// 查询实例
db.query('select * from t_user', [],function(result,fields){
  console.log('查询结果：');
  console.log(result);
});
//添加实例
var  addSql = 'INSERT INTO websites(username,password) VALUES(?,?)';
var  addSqlParams =['咕噜先森', '666'];
db.query(addSql,addSqlParams,function(result,fields){
  console.log('添加成功')
