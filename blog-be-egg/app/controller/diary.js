'use strict';

const Controller = require('egg').Controller;

class DiaryController extends Controller {


  async index() {
    const { ctx } = this;
    console.log('diary index...');
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
    const date = new Date();
    const createDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    data.create_time = createDate;
    const result = await ctx.service.diary.insert(data.title, data.content,data.create_time);
    ctx.body = result;
  }

  async deleteDiary() {
    const { ctx } = this;
    const data = ctx.request.body
    const result = await ctx.service.diary.delete(data.id);
    ctx.body = result;
  }

  async updateDiary() {
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.diary.update(data);
    ctx.body = result;
  }

}

module.exports = DiaryController;
