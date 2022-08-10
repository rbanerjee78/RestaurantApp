import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";



class DishDetail extends Component {

    render() {

        const data = this.props.dish.comments;
        

        return (

            <div className="row">
                <div className="col-12 col-md-5 col-xs-12">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 col-xs-12">
                    <Card>
                    <CardBody>
                            <CardTitle>Comments</CardTitle>
                        <div>
                            {data.map(function (d) {
                                return (<li key={d.id}>{d.comment}</li>)
                            })}
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

        )



    }//end render

}//end class


export default DishDetail;