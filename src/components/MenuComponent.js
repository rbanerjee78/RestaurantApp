import React from "react";
import { Card, CardImg, CardImgOverlay } from "reactstrap";


function RenderMenuItem({dish, onClick}){
    return(
        <Card key={dish.id} onClick={() => onClick(dish.id)}>
        <CardImg src={dish.image} width="100%" />
        <CardImgOverlay>{dish.name}</CardImgOverlay>
    </Card>
    );
}
  
const Menu = (props)=>{
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;