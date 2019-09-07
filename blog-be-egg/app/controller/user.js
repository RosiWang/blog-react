
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;

    // const user = await ctx.service.user.find(1);
    const user = await ctx.service.user.query();
    ctx.body = user;
  }

  async login() {
    const ctx = this.ctx;
    const inputData = ctx.request.body;
    const user = await ctx.service.user.checkUser(inputData.username, inputData.password);
    ctx.body = user;
  }

  setcookie() {
    //encrypt 加密
    this.ctx.cookies.set('name', 'zhangsan', {
      httpOnly: false,
      signed: false,
    });
    console.log(this.ctx.cookies.get('name',{ 
      httpOnly: false, 
      signed: false 
    }));
  }

  async getcookie() {
    let username = this.ctx.cookies.get("username", {
      encrypt: true,
    });
    await this.ctx.render('getcookie', {
      username
    });
  }

  async clearcookie() {
    this.ctx.cookies.set("username", {
      password: null,
    });
    this.ctx.redirect("/");
  }

  // async query(){
  //   const ctx = this.ctx;
  //   const user = await ctx.service.user.query();
  //   ctx.body = user;
  // }
}

module.exports = UserController;