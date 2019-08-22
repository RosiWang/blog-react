
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;

    const user = await ctx.service.user.find(1);
    // const user = await ctx.service.user.query();
    ctx.body = user;
  }

  async query(){
    const ctx = this.ctx;
    const user = await ctx.service.user.query();
    ctx.body = user;
  }
}

module.exports = UserController;