import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => {
    return { articleStore: stores.articleStore }
})  @observer
class ArticleDetail extends React.Component {
    componentDidMount() {
        console.log('dids')
        this.props.articleStore.fetchArticles({})
    }
    // fetchArticles() {
    //     console.log("000000"+this.props.articleStore.articles)
    //     this.props.articleStore.fetchArticles({})
    //     if(this.props.articleStore.articles === null) {
    //         console.log("11111")
    //         this.props.articleStore.fetchArticles({})
    //     }
    // }

    getArticle() {
        const id = this.props.match.params.id
        return this.props.articleStore.detailsMap[id]
    }

    render() {
        const article = this.getArticle()
        console.log(JSON.stringify(article)+'----')
        return(
            <div>
                <p>{article.id }</p>
                <p>{article.title}</p>
                <p>{article.content}</p>
                <hr/>
            </div>
        )
    }
}

export default ArticleDetail;