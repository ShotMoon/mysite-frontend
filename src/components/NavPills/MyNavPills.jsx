import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

class MyNavPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      
        <NavPills
            color="primary"
            tabs={[
            {
                tabButton: "Dashboard",
                tabIcon: Dashboard,
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
              
    );
  }
}

export default withStyles(pillsStyle)(MyNavPills);
