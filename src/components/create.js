import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeRecipeTitle = this.onChangeBookTitle.bind(this);
        this.onChangeRecipeCover = this.onChangeBookCover.bind(this);
        this.onChangeRecipeAuthor = this.onChangeBookAuthor.bind(this);
        
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);

        const book ={
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }

        axios.post('http://localhost:4000/api/recipes',recipe)
        .then()
        .catch();

        this.setState({
            title:'',
            cover:'',
            author:''
        })
    }

    onChangeRecipeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeRecipeCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeRecipeAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Recipe Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeRecipeTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Recipe Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeRecipeCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeRecipeAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Recipe" />
                </form>
            </div>
        );
    }
}