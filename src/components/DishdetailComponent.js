import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);


        this.toggleCommentModal = this.toggleCommentModal.bind(this);


        this.state = {
            isModalOpen: false
        };
    }

    toggleCommentModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleCommentModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (

            <React.Fragment>
                <Button outline onClick={this.toggleCommentModal} className="btn btn-default">
                    <span className="fa fa-sign-in fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control">
                                       <option>Select Rating</option>
                                       <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>


                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}

                                    />

                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" className="form-control" id="comment" name="comment"
                                        rows="6"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 5, offset: 2 }}>
                                    <Button type="submit" color="primary" >Submit</Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

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

function RenderComments({ comments, addComment, dishId }) {
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
           <li> <CommentForm dishId={dishId} addComment={addComment}/></li>
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
    
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

    else if(props.selectedDish !=  null) 
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
            
                <RenderComments comments={props.comments} addComment={props.addComment}
        dishId={props.dish.id} />
        </div>
         
        </div>
        </div>
    );
}


export default DishDetail;