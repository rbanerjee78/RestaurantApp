import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

function RenderDish({dish}) {
   
    if (dish != null){    
       
        return (
            
                <div className='row'>
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            
        )}
    else
        return (
            <div></div>
        );
}

function RenderComments({ comments }) {
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
           <li> <CommentForm /></li>
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

const DishDetail = (props) => {
    
    if(props.selectedDish !=  null) 
    console(props);
    return (

        <div className='container'>
        <div className="row">
        <Breadcrumb>         
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
        <div className='col-12 col-md-5 m-1'>
           
                <RenderDish dish={props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
            
                <RenderComments comments={props.comments} />
        </div>
         
        </div>
        </div>
    );
}


export default DishDetail;