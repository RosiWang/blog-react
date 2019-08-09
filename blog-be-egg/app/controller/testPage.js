'use strict';

const Controller = require('egg').Controller;

class TestPageController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'test page!!!';
  }
}

module.exports = TestPageController;
