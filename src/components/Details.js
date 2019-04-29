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

    let nameForBarchart = (
      stats.map(ele => {
        return (
          data.labels.push(ele.stat.name)
        )
      }));

      let dataForBarchart=(
      stats.map(ele => {
        return (
          data.datasets[0].data.push(ele.base_stat)
  
        )
      })
    )
    
    


    return (
      <Card style={{
        backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          id
          }.png`})`, backgroundRepeat: "no-repeat"
      }} className="col-md-4 offset-4">
        <h5>Height:{height} Meters</h5>&nbsp;<h5>Weight:{weight} kg</h5>
        {dataForBarchart}
        {nameForBarchart}
        <Chart type="bar" data={data} />

        {/* {stats.map(ele => {
          let x = ele.stat.name
          return (
            data.labels.push(x)

          )
        })}
        {stats.map(ele => {
          let x = ele.base_stat
          return (
            data.datasets[0].data.push(x)

          )
        })} */}
        {/* <ul>
      {stats.map(ele =>{
          return <li>{ele.stat.name}:{ele.base_stat}</li>
      })}
      </ul> */}
        <ul>
          {type.map(elem => {
            return <Button label={elem.type.name} className="p-button-info" />
            //  <li>{elem.type.name}</li>

          })}
        </ul>
        <p><button onClick={backToPrev}>Back</button></p>

      </Card>
    )
  }
}
