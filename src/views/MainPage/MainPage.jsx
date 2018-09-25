import React from 'react'
import MyNavPills from 'components/NavPills/MyNavPills'

class MainPage extends React.Component{

    render(){
        return(
            <div>
                <MyNavPills history={this.props.history} />
            </div>
        )
    }
}

export default MainPage