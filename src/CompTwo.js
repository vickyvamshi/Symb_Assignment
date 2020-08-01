import React,{Component} from 'react';
import './CompTwo.css';

class CompTwo extends Component{
    render(){
        return(
            <div className="CompTwo">
                <div className="CompTwo-head">
                    <h3>Verbessere dein Profil <a href="#">Mehr Tipps anzeigen</a></h3>
                </div>
             <div class="card-deck">
                <div class="card">
                    <div class="card-body">
                    <h6 class="card-title">Lade hochwertige bider diener Fahrschule hoch</h6>
                    <p class="card-text">Aktuell nuzt du eines unserver Beispiel bilder Um mehr Vertrauen fur potenzille Fahrschuler zu schaffen,eigene bilder hochzuladen.</p>
                    <div className="row justify-content-center"><button className="btn btn-primary">Bider hinzufugen</button></div>
                    </div>
                    
                </div>
                <div class="card">
                    <div class="card-body">
                    <h6 class="card-title">Lade diene Kollegen zu drivEddy ein</h6>
                    <p class="card-text">Um von unserere  Softwar bestmoglish zu profitiren,nuzen all diene Kollegen drivEddy.Heir kannst du sei gan enfach einladden</p>
                    <div className="row justify-content-center">
                    <button className="btn btn-primary text-center">Kollegen einladen</button>
                    </div>
                   
                    </div>
                   
                </div>
                <div class="card">
                    <div class="card-body">
                    <h6 class="card-title">Erstelle Fuhrescheinapakete mit Preiserspansis</h6>
                    <p class="card-text">Mach dein Angebot uir Fahrschuler attracktiver in dem du Presvorteile durch Pakebuchungen anbeitest.</p>
                    <div className="row justify-content-center">
                    <button className="btn btn-primary">Neue Pakete hinzufigen</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default CompTwo;