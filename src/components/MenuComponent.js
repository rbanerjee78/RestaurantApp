import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay } from "reactstrap";
import { Link } from 'react-router-dom';


function RenderMenuItem({dish}){
    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
        <CardImg src={dish.image} width="100%" />
        <CardImgOverlay>{dish.name}</CardImgOverlay>
        </Link>
    </Card>
    );
}
  
const Menu = (props)=>{
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish}  />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;