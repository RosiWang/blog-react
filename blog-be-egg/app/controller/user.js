
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
      const ctx = this.ctx;
      const userId = ctx.params.id;
      // await ctx.service.user.insert('接口测试','接口测试描述');
     // await ctx.service.user.delete(4);
     const data = {
       title:'修改测试',
       content:'update修改描述'
     }
     await ctx.service.user.update(data,1);
      const user = await ctx.service.user.query();
      ctx.body = user;
    }
  }

  module.exports = UserController;