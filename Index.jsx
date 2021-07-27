import { Component } from "react";
import './style.css';


export default class User extends Component {

    state = { Name: "", Surname: "", Age:"", Location:"",
        list: [
            ["Kunkie", "Makgatho", "29", "plk"],
            ["Kabo", "Rapholo", "12", "janefurse" ],
            ["Tyson", "Moyahabo", "5", "janefurse" ],
            ["Maria", "Fenyane", "18", "plk"]
        ]
    }

    render() {
        return ( 
            <div>
                
                <h1>  A list of users </h1>

                <h3>Name &nbsp;&nbsp;  Surname &nbsp;&nbsp; Age &nbsp;&nbsp; Message</h3>
                <ul> {
                this.state.list.map(array => <li> {
                    array[0] + "," + array[1] + 
                    ","  + array[2] + ","  + this.CheckAge(array[2])}
                    </li>) } 
                </ul> </div>
            
            );
    }

    CheckAge(Age) {
        if (Age > 18) {
                const statement = " You are old enough to code!";
                return statement; 
            } else {
                const statement = "You are not old enough to code!";
            return statement
        }
    }
}