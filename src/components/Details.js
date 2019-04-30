import React, { Component } from 'react'
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';

export default class Details extends Component {
  
  
  render() {
    console.log("inside detail page", this.props);

    const { height, weight, stats, type, id, backToPrev } = this.props.data;



    const data = {
      labels: [],
      datasets: [
        {
          label: 'Stats',
          backgroundColor: '#42A5F5',
          data: []
        }
      ]
    };

    function nameForBarchart (){
       stats.map(ele => {
        return (
          data.labels.push(ele.stat.name)
        )
      })};

    //   for (key in stats.stat.name) {
    //     if (obj.hasOwnProperty(key)){
    //       data.labels.push(stats.stat.name)
    //     } 
    // }

      function dataForBarchart(){
      stats.map(ele => {
        return (
          data.datasets[0].data.push(ele.base_stat)
  
        )
      })
      }
    
    


    return (
      <Card style={{
        backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          id
          }.png`})`, backgroundRepeat: "no-repeat"
      }} className="col-md-4 offset-4">
        <h5>Height:{height} Meters</h5>&nbsp;<h5>Weight:{weight} kg</h5>
        {dataForBarchart()}
        {nameForBarchart()}
        <Chart type="bar" data={data} />

        
      <p>Type:</p>
        
          {type.map(elem => {
            return (<div>
             
            <badge label={elem.type.name} style={{backgroundColor:"green",padding:"10px 10px"}} >{elem.type.name}</badge><br/><br/>
            </div>
            )
            //  <li>{elem.type.name}</li>

          })}
        <br/>
       
        <p><button onClick={backToPrev}>Back</button></p>

      </Card>
    )
  }
}
