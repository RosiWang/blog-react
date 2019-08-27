
const Service = require('egg').Service;

class UserService extends Service {
  async query() {
    const data = await this.app.mysql.select('users');
    let code = data ? 0 : -1;
    return { code, data }
  }

  // async insert(title, content) {
  //   const result = await this.app.mysql.insert('users', { title: title, content: content });
  //   let code = result ? 0 : -1;
  //   return { code }
  // }

  async delete(id) {
    const result = await this.app.mysql.delete('users', { id });
    let code = result ? 0 : -1;
    return { code }
  }

  async update(data, id) {
    const row = data;
    const options = {
      where: { id }
    };
    const result = await this.app.mysql.update('users', row, options);
    let code = result ? 0 : -1;
    return { code }
  }

  async find(id) {
    const result = await this.app.mysql.get('users', { id });
    let code = result ? 0 : -1;
    return { code,user:result };
  }
}

module.exports = UserService;