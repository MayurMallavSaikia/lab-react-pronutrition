import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class FoodBox extends React.Component{

    constructor(props){
      super(props);
      this.state={

        Foods: [
          { id:1, name: 'apple', cal:81, quant:1 , images:'https://cdn-icons-png.flaticon.com/512/415/415682.png'},
          { id:2, name: 'orange',  cal:65, quant:1 , images:'https://cdn-icons-png.flaticon.com/512/1041/1041383.png' },
          { id:3, name: 'banana',  cal:105, quant:1, images:'https://cdn-icons-png.flaticon.com/512/2909/2909761.png'  },
          { id:4, name: 'chocolate', cal:208, quant:1, images:'https://cdn-icons-png.flaticon.com/512/2553/2553591.png'  },
          { id:5, name: 'dates', cal:228, quant:1, images:'https://cdn-icons-png.flaticon.com/512/3439/3439384.png' },
          {id:6, name:'noodles', cal:159, quant:1, images:'https://cdn-icons-png.flaticon.com/512/2718/2718224.png'}

      ],

          searchValue: '',
          appleQuant:'1',
          orangeQuant:'1',
          bananaQuant:'1',
          chocolateQuant:'1',
          datesQuant:'1',
          noodlesQuant:'1',


      }
    }


   setValue=(event)=>{
    this.setState({searchValue: event.target.value });
    console.log(this.state.searchValue);  
  
  }

   searchValue=()=>{

      if(this.state.searchValue.length===0)
          return this.state.Foods;

      else{
        let foodValue=this.state.Foods.filter((val)=>{
          return(this.state.searchValue===val.name)
        })

        return foodValue;
      }
  }

  changeQuant=(event, name)=>{
      if(name==="apple")
        this.setState({appleQuant: event.target.value});
      else if(name==="orange")
        this.setState({orangeQuant: event.target.value});
      else if(name==="banana")
        this.setState({bananaQuant: event.target.value});
      else if(name==="chocolate")
        this.setState({chocolateQuant: event.target.value});
      else if(name==="dates")
        this.setState({datesQuant: event.target.value});
      else if(name==="noodles")
        this.setState({noodlesQuant: event.target.value});

  }






   render(){  

    return <>
    <div className='headerBar'>Pro-Nutritions</div>
    <div className='search'>
        <h3>Search</h3>
        <input class="searchbox" placeholder='find a food' value={this.state.searchValue} 
        onChange={(event)=>{this.setValue(event)}} />
      </div>
     
    <div className='container' >
     
       <div className='foods'>
         {
            
            this.searchValue().map(val=>{
              return(
              <div className="details">
              <div>&emsp;&emsp;<img id="foodimg" src={val.images}></img></div>
  
              <div className="subDetails">
              <div id='foodName'>{val.name}</div>
              <div id='calValue'>{val.cal}</div>
              </div>
              <div><input id='quantInput' value={this.state.Foods.quant} type='number'  onChange={(event)=>this.changeQuant(event, val.name)} /></div>
              <div><button id='addQuant'><b>+</b></button></div>
             </div>
              
              )
            })

         }
       </div>

       <div className='calculate'>
        {

            console.log(this.searchValue())

        }
       <h3>Todays food 0 cal</h3>
       </div>
    </div>
    
    </>
  }
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <FoodBox/>
  </>
);


