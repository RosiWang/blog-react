
const Service = require('egg').Service;

var insertCount = 0;

class UserService extends Service {
    async find(uid) {
        const user = await this.app.mysql.get('users', { id: 1 });

        insertCount++;
        //   const result = await this.app.mysql.insert('article', { title: 'insert'+insertCount,content:'egg动态插入' }); // 在 post 表中，插入 title 为 Hello World 的记录

        const row = {
            title: 'egg update title',
        };

        const options = {
            where: {
              id: 1
            }
          };

        const result = await this.app.mysql.update('article',row,options );
        // const result = await this.app.mysql.delete('article', {
        //     id: 3,
        //   });

        //error--ToDo
        // const result = await this.app.mysql.query('update article set title =(inputsqltest) where id = ?', [2, id]);

        const articleData = await this.app.mysql.select('article');

        return { user, result, articleData };
    }
}

module.exports = UserService;