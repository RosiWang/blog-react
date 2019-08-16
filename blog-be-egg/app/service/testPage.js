
const Service = require('egg').Service;

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

  
}

module.exports = UserService;