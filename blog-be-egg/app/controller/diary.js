'use strict';

const Controller = require('egg').Controller;

class DiaryController extends Controller {


  async index() {
    const { ctx } = this;

    // const item = {title:'updateTest',content:'update test desc'}
    // await ctx.service.testPage.update(item,1);


    const result = await ctx.service.diary.query();
    ctx.body = result;
    // await ctx.render('test/test.nj',{result})
  }

  async addDiary(title,content) {
    await ctx.service.diary.insert(title, content);
    const result = await ctx.service.diary.query();
    ctx.body = result;
  }

  async deleteDiary(id){
    await ctx.service.diary.delete(id);
    const result = await ctx.service.diary.query();
    ctx.body = result;
  }

  async updateDiary(itemData,id){
    await ctx.service.diary.update(itemData,id);
    const result = await ctx.service.diary.query();
    ctx.body = result;
  }

}

module.exports = DiaryController;
