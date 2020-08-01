import React,{Component} from 'react';
import './CompOne.css';
import button from './button.js';

class CompOne extends Component{
    render(){
        return(
            <div className="CompOne">
                <div className="CompOne-header">
                    <div className="CompOne-header1">
                        <h2 className="CompOne-h">Ubersicht deiner Fahrshulen <button className="btn btn-primary">Profilevorchu</button></h2>
                        
                    </div>
                </div>
                <div className="CompOne-para">
                    <p className="CompOne-p">Jede Fahrschule hat unterschiedliche Bedurfnisse an ein ubersichtilches DashBoard. Auf sieser Seite finset <br></br>eine Ubersicht aller Funktonen and wertvolle Tipps,um decine Farhschule besser online u prasantarien. <a href="#">Profil bearbiten</a> </p>
                </div>
                <div className="CompOne-body">
                    <div className="CompOne-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDRC0RzDlFMlp2f1GeCPr4J6gZ7jH7mPqDxA&usqp=CAU"/>
                    </div>
                    <div className="CompOne-list">
                        <h2>Farhrshule Achselpeter</h2>
                        <ul>
                            <li>Seddiner stabbe 7 | 10135 Berlin</li>
                            <li>(030) 51 65  64 26</li>
                            <li>Achsel Peter Senior</li>
                            <li ><i class="far fa-envelope-open"></i>achsel@peter.net</li>
                            <li>achselpetervollinfahrt.de</li>
                        </ul>
                    </div>
                </div>

                    
            </div>
        );
    }
}

export default CompOne;