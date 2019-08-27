
const Service = require('egg').Service;
const db_name = 'diary';

class UserService extends Service {
  async query() {
    const articleData = await this.app.mysql.select(db_name);
    let code = articleData ? 0 : -1;
    return { code, articleData }
  }

  async insert(title, content) {
    const result = await this.app.mysql.insert(db_name, { title: title, content: content });
    let code = result ? 0 : -1;
    return { code }
  }

  async delete(id){
    const result = await this.app.mysql.delete(db_name, { id});
    let code = result ? 0 : -1;
    return { code }
  }

  async update(data,id){
    const row = data;
    const options = {
      where: { id}
    };
    const result = await this.app.mysql.update(db_name, row, options);
    let code = result ? 0 : -1;
    return { code }
  }

  
}

module.exports = UserService;