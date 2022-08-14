import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay } from "reactstrap";



class Menu extends Component {
  
    render() {
     return(    
        this.props.dishes.map((dish) => {
      
            return (    
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg src={dish.image} width="100%" />
                        <CardImgOverlay>{dish.name}</CardImgOverlay>
                    </Card>
                    </div>
                   )
        })
        )
    }
}

export default Menu;