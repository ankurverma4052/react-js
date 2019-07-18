import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Avatarlist from './Avatarlist';
import './Avatar.css';
import 'tachyons';


	class Avatar extends Component {

		constructor(){
			super();
			this.state = {
				name: "Welcome to My React App"
			}
		}

		nameChange(){
			this.setState({
				name : "Congrats Your First React App is Successfull"
			})
		}

		render(){

			const avatararray = [
		{
			id:1,
			name:"Harry Styles",
			work:"React Developer"

		},

		{
			id:2,
			name:"Morren 5",
			work:"Nodejs Developer"

		},

		{
			id:3,
			name:"Taylor Swift",
			work:"Angular Developer"

		},

		{
			id:4,
			name:"Anne-Marie",
			work:"Vuejs Developer"

		}
	]


	const arraycard = avatararray.map( (avatarcard, i) => {
		return 	<Avatarlist key={i} id={avatararray[i].name} 
							name={avatararray[i].name} 
							work={avatararray[i].work}/>

	})


			return ( <div className="mainpage">
				<h1> {this.state.name} </h1>
					{arraycard}
				<button onClick = {() => this.nameChange()} className="btn btn-primary tc"> Submit </button>
			</div>
		)


		}

	}


export default Avatar;