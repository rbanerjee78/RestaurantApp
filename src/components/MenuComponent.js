import React, { Component } from "react";
import { Card,  CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDish: null
        }

        console.log("Menu Component Constructor is invoked")
    }

    componentDidMount(){
        console.log("Menu Component componentDidMount is invoked")

    }

    onSelectDish(dish) {

        this.setState({
            selectedDish: dish
        })

    }

    renderDish(dish) {
        if (dish != null) {
            const dish = this.state.selectedDish;         
            return (
                <DishDetail dish={dish} test="myprop"></DishDetail>
          
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }

    render() {

        const menu = this.props.dishes.map((dish => {
            return (
                <div key={dish.id} className="col-12 col-md-2 m-1">
                    <Card onClick={() => this.onSelectDish(dish)}>

                        <CardImg  src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>
                    </Card>

                </div>
            )
        }));

        console.log("Menu Component render is invoked")
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;