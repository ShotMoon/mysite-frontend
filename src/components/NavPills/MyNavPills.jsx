import React from "react";
// import queryString from 'query-string'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import { CircularProgress } from '@material-ui/core/Progress'

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle";

//mobx
import { inject, observer } from 'mobx-react';
// import { ArticleStore } from "../../store/article-store";

@inject(stores => {
    return { articleStore: stores.articleStore }
}) 
@observer
class MyNavPills extends React.Component {

    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles() {
        this.props.articleStore.fetchArticles({})
    }

    toDetail(article) {
        this.props.history.push(`/detail/${article.id}`)
    }


  render() {
    const { classes } = this.props;
    const articles = this.props.articleStore.articles;
    const syncing = this.props.articleStore.syncing
    return (
        <div className={classes.whole}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={7}>
                <NavPills
                color="primary"
                tabs={[
                {
                    tabButton: "Article",
                    tabIcon: Dashboard,
                    tabContent: (
                        articles.map(article => 
                            (<div>
                                <Card className={classes.card} onClick={()=>{this.toDetail(article)}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {article.title}
                                            </Typography>
                                            <Typography component="p">
                                                {article.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <br />
                            </div>)
                        )
                    )
                },
                {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                    <span>
                        <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely
                        deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions. Dramatically visualize
                        customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets
                        via plug-and-play networks. Dynamically
                        procrastinate B2C users after installed base
                        benefits.
                        </p>
                    </span>
                    )
                },
                {
                    tabButton: "Tasks",
                    tabIcon: List,
                    tabContent: (
                    <span>
                        <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                        </p>
                        <br />
                        <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                        </p>
                        <br />
                        <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                        </p>
                    </span>
                    )
                }
                ]}
                
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                    <div>
                        <h1>other</h1>
                    </div>
                </GridItem>
            </GridContainer>
            
            {
                syncing ?
                    (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                padding: '40px 0',
                            }}
                        >
                            jiazaizhong
                        </div>
                    ) :
                    null
            }
        </div>
        
        
              
    );
  }
}

export default withStyles(pillsStyle)(MyNavPills);
