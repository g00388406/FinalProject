import React from "react";
import {BookItem} from './recipeItem';

export class Recipes extends React.Component{
    render(){
        return this.props.recipes.map(
            (book)=>{
                return <RecipeItem recipe={recipe} key={recipe._id}></RecipeItem>
            }
        );
    }
}