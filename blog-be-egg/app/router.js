'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/newspage', controller.news.list);
  router.get('/user', controller.user.info);
  router.get('/diary', controller.diary.index);
  // router.get('/addDiary',controller.diary.addDiary);
  router.post('/addDiary', controller.diary.addDiary);
  router.delete('/deleteDiary', controller.diary.deleteDiary);
  router.put('/updateDiary',controller.diary.updateDiary);
  router.post('/login',controller.user.login);
};
