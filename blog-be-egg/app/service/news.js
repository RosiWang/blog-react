const Service = require('egg').Service;

class NewsService extends Service {
    async list(page_number) {
        // read config
        const { serverUrl, page_size } = this.config.news;

        // use build-in http client to GET hacker-news api
        // const { data: idList } = await this.ctx.curl(`${serverUrl}`, {
        //   data: {
        //     orderBy: '"$key"',
        //     startAt: `"${pageSize * (page - 1)}"`,
        //     endAt: `"${pageSize * page - 1}"`,
        //   },
        //   dataType: 'json',
        // });

        // parallel GET detail
        // const newsList = await Promise.all(
        //   Object.keys(idList).map(key => {
        //     const url = `${serverUrl}/item/${idList[key]}.json`;
        //     const url = `${serverUrl}`;
        //     console.log(idList);
        //     return this.ctx.curl(url, { dataType: 'json' });
        //   })
        // );

        const { data } = await this.ctx.curl(`${serverUrl}`);
        const getData = JSON.parse(data);
        // const newList = { data: [{ app: `${getData.data.list}`, url: '' }, { app: `${page_size}`, url: '' }, { app: `${page_number}`, url: '' }] }
        // return newList.data;
        return getData.data.list;
    }
}

module.exports = NewsService;