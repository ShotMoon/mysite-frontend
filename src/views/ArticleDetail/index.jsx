import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => {
    return{
        articleStore: stores.articleStore,
        appState: stores.appState
    }
})
@observer
class ArticleDetail extends React.Component {
    getComents() {
        //TODO
    }

    getArticle() {
        const id = this.props.match.params.id
        console.log(id)
        return this.props.articleStore.detailsMap[id]
    }

    render() {
        const article = this.getArticle()
        console.log(JSON.stringify(article)+'----')
        return(
            <div>
                <p>{article.id}</p>
                <p>{article.title}</p>
                <p>{article.content}</p>
                <hr/>

            </div>
        )
    }
}

export default ArticleDetail;