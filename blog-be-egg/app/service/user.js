
const Service = require('egg').Service;

var insertCount = 0;

class UserService extends Service {
  async query() {
    const articleData = await this.app.mysql.select('article');
    let code = articleData ? 0 : -1;
    return { code, articleData }
  }

  async insert(title, content) {
    const result = await this.app.mysql.insert('article', { title: title, content: content });
    let code = result ? 0 : -1;
    return { code }
  }

  async delete(id){
    const result = await this.app.mysql.delete('article', { id});
    let code = result ? 0 : -1;
    return { code }
  }

  async update(data,id){
    const row = data;
    const options = {
      where: { id}
    };
    const result = await this.app.mysql.update('article', row, options);
    let code = result ? 0 : -1;
    return { code }
  }

  async find(uid) {
    const user = await this.app.mysql.get('users', { id: 1 });

    insertCount++;
    //  

    const row = {
      title: 'egg update title',
    };

    const options = {
      where: {
        id: 1
      }
    };

    const result = await this.app.mysql.update('article', row, options);
    // const result = await this.app.mysql.delete('article', {
    //     id: 3,
    //   });

    //error--ToDo
    //const result = await this.app.mysql.query('update article set title =(inputsqltest) where id = ?', [2, id]);

    const articleData = await this.app.mysql.select('article');

    return { user, result, articleData };
  }
}

module.exports = UserService;