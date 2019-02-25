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
