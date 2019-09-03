'use strict';

const Controller = require('egg').Controller;

class DiaryController extends Controller {


  async index() {
    const { ctx } = this;

    // const item = {title:'updateTest',content:'update test desc'}
    // await ctx.service.testPage.update(item,1);

    const queryData = this.ctx.query;
    console.log('queryData');
    const result = await ctx.service.diary.query();
    ctx.body = result;
    // await ctx.render('test/test.nj',{result})
  }

  async addDiary() {
    const { ctx } = this;
    // console.log(ctx.queries,ctx.queries.title,ctx.queries.content);
    // console.log(ctx.params,ctx.params.title);
    // console.log('addDiary',ctx.request.body);
    const data = ctx.request.body;
    await ctx.service.diary.insert(data.title, data.content);
    const result = await ctx.service.diary.query();
    ctx.body = result;
  }

  async deleteDiary(id){
    const { ctx } = this;
    await ctx.service.diary.delete(id);
    const result = await ctx.service.diary.query();
    ctx.body = result;
  }

  async updateDiary(itemData,id){
    const { ctx } = this;
    await ctx.service.diary.update(itemData,id);
    const result = await ctx.service.diary.query();
    ctx.body = result;
  }

}

module.exports = DiaryController;
