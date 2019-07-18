import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


const Demo = ({name}) => {
	return <div className="heading">
				<h1> Hello {name} </h1>
				<p> Welcome to my first React Js </p>
			</div>

}

// class Demo extends Component{
// 		render() {
// 			return <div className="heading">
// 				<h1> Hello {this.props.name} </h1>
// 				<p> Welcome to my first React Js </p>
// 				</div>
// 		}
// }

export default Demo;