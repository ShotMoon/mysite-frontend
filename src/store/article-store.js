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
                    const articles = res.data.content.map(article => {
                      return new Article(createArticle(article))
                    })
                    this.articles = articles
                    this.syncing = false
                    resolve()
                }).catch(err => {
                  reject(err)
                })
              }
          })
      }

      @computed get detailsMap() {
        return this.articles.reduce((result, article) => {
            result[article.id] = article
            return result
        }, {})
      }

      @action
      getComents() {
          return new Promise(() => {
              //TODO
          })
      }
}