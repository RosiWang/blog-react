'use strict';

const Controller = require('egg').Controller;
class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    // await this.ctx.render('news/list.tpl', dataList);
    // this.ctx.body = dataList;
    const ctx = this.ctx;
    const page = ctx.query.page || 2;
    const newsList = await ctx.service.news.list(page);
    console.log('news controller',this.ctx.queries,this.ctx.queries.age);
    await this.ctx.render('news/list.nj', { list: newsList });

  }
}

module.exports = NewsController;