'use strict';

const Controller = require('egg').Controller;

class TestPageController extends Controller {
  

  async index() {
    const { ctx } = this;
    
    // await ctx.service.testPage.insert('insertTest','insert test desc');

    // await ctx.service.testPage.delete(8);

    // const item = {title:'updateTest',content:'update test desc'}
    // await ctx.service.testPage.update(item,1);


    const result = await ctx.service.testPage.query();
    ctx.body = result;
    // await ctx.render('test/test.nj',{result})
  }
}

module.exports = TestPageController;
