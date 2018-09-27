import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(stores => {
    return { articleStore: stores.articleStore }
})  @observer
class ArticleDetail extends React.Component {
    componentWillMount() {
        this.props.articleStore.fetchArticles({})
    }

    getArticle() {
        const id = this.props.match.params.id
        return this.props.articleStore.detailsMap[id]
    }

    render() {
        const article = this.getArticle()
        const isSyncing = this.props.articleStore.syncing
        
        return(
            <div>
                { isSyncing ? (
                    <span>jiazaizhong</span>
                ):(
                    <div>
                        <p>{article.id }</p>
                        <p>{article.title}</p>
                        <p>{article.content}</p>
                        <hr/>
                    </div>
                )}
            </div>  
        )
    }
}

export default ArticleDetail;