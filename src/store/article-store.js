import {
    observable,
    toJS,
    computed,
    action,
    extendObservable,
} from 'mobx'
import { get, post } from '../utils/http'
import { articleSchema } from '../utils/domain-define'

export class Article {
    constructor(data){
        extendObservable(this, data)
    }
    @observable syncing = false

}

const createArticle = (data) => {
    return Object.assign({}, articleSchema, data)
}

export class ArticleStore {
    @observable articles
    @observable syncing = false
    @observable tab = undefined
    
    constructor(
        { syncing = false, articles = [], tab = null } = {},
      ) {
        this.syncing = syncing
        this.articles = articles.map(article => new Article(createArticle(article)))
        this.tab = tab
      }

      @action fetchArticles(tab){
          return new Promise((resolve, reject) => {
            if (tab === this.tab && this.articles.length > 0) {
                resolve()
              } else {
                this.tab = tab
                this.articles = []
                this.syncing = true
                get('/article/all', {
                    page: 0,
                    size: 5,
                    sortCode: 1
                //   mdrender: false,
                //   tab,
                }).then(res => {
                //     console.log(res.success)
                //     console.log(JSON.stringify(res.data.content))
                //   if (res.success) {
                //     console.log('.........')
                //     const articles = res.data.content.map(article => {
                //       return new Article(createArticle(article))
                //     })
                //     console.log("aaaa"+JSON.stringify(articles))
                //     this.articles = articles
                //     this.syncing = false
                //     resolve()his.syncing = false
                //     resolve()
                //   } else {
                //     this.syncing = false
                //     reject()
                //   }
                    console.log('.........')
                    const articles = res.data.content.map(article => {
                      return new Article(createArticle(article))
                    })
                    console.log("aaaa"+JSON.stringify(articles))
                    this.articles = articles
                    this.syncing = false
                    resolve()
                }).catch(err => {
                  reject(err)
                })
              }
          })
      }
}