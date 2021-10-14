import React from "react";
import axios from 'axios';

import { List, ListItem , ListItemButton, ListItemText} from "@mui/material";
export default class Batiments extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            batiments : []
        };
      }

    async componentDidMount() {
        await axios.get('http://localhost:3000/batiment').then(res => {
            this.setState({
                batiments: res.data
            })
        }).catch(err => console.error(err))
    }

    renderBatiments(){
        const { batiments } = this.state
        return batiments.map(batiment => (
            <ListItem key={batiment.ba_id}>
                <ListItemButton>
                    <ListItemText>
                        {batiment.ba_adresse}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        ))
    }

    render(){
        return <List>
            {this.renderBatiments()}
        </List>
    }
}

