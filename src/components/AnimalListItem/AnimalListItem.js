import React, { Component } from 'react';

// DO NOT MODIFY THIS FILE FOR BASE MODE!

class AnimalListItem extends Component {
    // Renders the list of animals
    render() {
        return (
            <tr>
                <td>{this.props.classData.species_name}</td>
                <td>{this.props.classData.class_name}</td>
            </tr>
        );
    }
}

export default AnimalListItem;
