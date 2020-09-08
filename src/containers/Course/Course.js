import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }
    
     getTitle = () => {
        const query = new URLSearchParams(this.props.location.search);
        const title = query.get("title");

        return title;
    }

    componentDidMount() {
       
        const title = this.getTitle()
        this.setState({title: title});
    }

    
    componentDidUpdate(){
        
       const title = this.getTitle();
        if (this.state.title != title){
            this.setState({title: title});
            console.log(title);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseid}</p>
            </div>
        );
    }
}

export default Course;