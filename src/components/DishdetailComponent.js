import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return (
                <div className='container'>
                    <div className='row'>
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        let list = (<div></div>);
        if (comments != null) {
            list = (
                <ul className="list-unstyled">
                    {comments.map(c => {
                        return (
                            <li key={c.id}>
                                <ul>
                                    <li>{c.comment}
                                    <p><small>{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))} </small></p>
                                    </li>
                               
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            );
        }
        return (
            <div>
                <h4>Comments</h4>
                {list}
            </div>
        );

    }

    render() {

        return (
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>

                <div className="col-12 col-md-5 m-1">
                    {/* This works: */}
                    { this.props.selectedDish && this.renderComments(this.props.selectedDish.comments)}

                    {/* This doesn't:  */}
                    {/* { this.renderComments(this.props.selectedDish.comments)} */}
                </div>
            </div>
        );
    }
}

export default DishDetail;