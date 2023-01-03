import React from "react";
import Card from 'react-bootstrap/Card';

export class RecipeItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
            <Card.Header>{this.props.recipe.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.recipe.cover}></img>
            <footer >
                {this.props.recipe.author}
                    </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}