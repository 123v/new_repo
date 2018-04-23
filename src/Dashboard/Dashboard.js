import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import './dashboard.css';
import { createBrowserHistory } from 'history';
import { elastic as Menu } from 'react-burger-menu';
import Header from './Header';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const history = createBrowserHistory({

hashType: 'slash'
})

const options = [
  'Beneficiary Type Eligibility', 'Occupation Eligibility'
]


const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const styles = {
  root: {
    fontSize: '16px',
    color: '#999',
    height: '100vh'
  },
  main: {
    width: '100%',
    height: '150%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30vh'
  },
  dockContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  remove: {
    position: 'absolute',
    zIndex: 1,
    right: '10px',
    top: '10px',
    cursor: 'pointer',
    color:'white'
  }
}

class Dashboard extends Component {
  constructor()
  {
    super();
    this.state = {
      slider:'',
      check:false,
      smoker:false
    }
  }

  componentWillMount=()=>{
    console.log("inside componentWillMount");
  }

  showSettings (flag) {
    if (flag == 2) {
      history.push({
        pathname: '/parameter_pricing'});
      history.go();
    }
  }

  onCheck=()=>{
    console.log("inside onCheck");
    if (this.state.check === false) {
      this.setState({check:true});
    }else {
      this.setState({check:false});
    }
  }

  onCheckSmoker=()=>{
    console.log("inside onCheck");
    if (this.state.smoker === false) {
      this.setState({smoker:true});
    }else {
      this.setState({smoker:false});
    }
  }

  sliderValue=(e)=>{
    console.log("inside sliderValue");
    if(e === 0){
      this.setState({slider:'All'});
    }else{
      this.setState({slider:e});
    }
    console.log(e);
  }

  onSelectDropdown=()=>{
    console.log("inside onSelectDropdown");
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <div className="menu-bar">
          <Menu>
            <a id="home" className="menu-item active" href="/"><span className="menu-items">Product Parameter</span></a>
            <a onClick={ this.showSettings.bind(this, '2') } className="menu-item" href=""><span className="menu-items">Product Pricing</span></a>
          </Menu>
        </div>
          <Grid>
          <div className="dashboard-container">
            <Row>
              <Col md={4}>
                <div className="box-container">
                  <div className="box-header"><span>Rate Classes</span></div>
                  <div className="box-content">
                    <div className="checkbox-container">
                      <label className="container-check">Preferred
                        <input type="checkbox" checked={this.state.check} onChange={this.onCheck} value={this.state.check}/>
                        <span className="checkmark-check"></span>
                      </label>
                      <label className="container-check">Preferred Plus
                        <input type="checkbox" checked={this.state.check} onChange={this.onCheck} value={this.state.check}/>
                        <span className="checkmark-check"></span>
                      </label>
                      <label className="container-check">Standart
                        <input type="checkbox" checked={this.state.check} onChange={this.onCheck} value={this.state.check}/>
                        <span className="checkmark-check"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="box-container">
                  <div className="box-header"><span>Face Amount Bands</span></div>
                    <div className="box-content">
                      <div className="min-box">
                        <span className="value-content">Min</span>
                        <span className="value-content">Max</span>
                      </div>
                      <div className="min-box">
                        <span className="value-content">$0</span>
                        <span className="value-content">$3000</span>
                      </div>
                      <div className="min-box">
                        <span className="value-content">$4001</span>
                        <span className="value-content">$7000</span>
                      </div>
                    </div>
                 </div>
              </Col>
              <Col md={4}>
                <div className="box-container">
                  <div className="box-header"><span>Smoker Rate Classes</span></div>
                  <div className="box-content">
                    <div className="checkbox-container">
                      <label className="container-check">No Smoker Classes
                        <input type="checkbox" checked={this.state.smoker} onChange={this.onCheckSmoker} value={this.state.smoker}/>
                        <span className="checkmark-check"></span>
                      </label>
                      <label className="container-check">1 Smoker Classes
                        <input type="checkbox" checked={this.state.smoker} onChange={this.onCheckSmoker} value={this.state.smoker}/>
                        <span className="checkmark-check"></span>
                      </label>
                      <label className="container-check">2 Smoker Classes
                        <input type="checkbox" checked={this.state.smoker} onChange={this.onCheckSmoker} value={this.state.smoker}/>
                        <span className="checkmark-check"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="box-container">
                  <div className="box-header"><span>Issue Age</span></div>
                  <div className="box-content">
                    <div className="min-box">
                      <span className="value-content">Min</span>
                      <span className="value-content">Max</span>
                    </div>
                    <div className="min-box">
                      <span className="value-content">20 y.o</span>
                      <span className="value-content">50 y.o</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="box-container">
                  <div className="box-header"><span>Allowed Team Years</span></div>
                  <div className="box-content">
                    <div className="checkbox-container">
                      <label className="container-check">20 Years
                        <input type="checkbox" checked={this.state.smoker} onChange={this.onCheckSmoker} value={this.state.smoker}/>
                        <span className="checkmark-check"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="box-container">
                  <div className="box-header"><span>Riders</span></div>
                  <div className="box-content">
                    <div className="checkbox-container">
                      <label className="container-check">Term Rider
                        <input type="checkbox" checked={this.state.smoker} onChange={this.onCheckSmoker} value={this.state.smoker}/>
                        <span className="checkmark-check"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <div className="box-container1">
                  <div className="box-header"><span>Slider Range and Increments</span></div>
                    <div className="box-content1">
                      <div className="min-box1">
                        <span className="value-content">Min Slider Value</span>
                        <span className="value-content">Max Slider Value</span>
                      </div>
                    </div>
                    <div className="slider-content">
                    <Slider min={1} max={10} step={1} defaultValue={0} onChange={this.sliderValue}
                      trackStyle={{ backgroundColor: '#0075dd'}}
                      handleStyle={{
                        borderColor: '#0075dd',
                        height: 14,
                        width: 14,
                        marginLeft: -10,
                        marginTop: -5,
                        backgroundColor: '#0075dd',
                      }}
                      railStyle={{ backgroundColor: '#b1b1b1'}}
                      handle={handle}
                          />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="box-container1">
                  <div className="box-header"><span>Other Eligibility</span></div>
                  <div className="box-content">
                    <Dropdown options={options} onChange={this.onSelectDropdown}  placeholder="Select Eligibility" />
                  </div>
                </div>
              </Col>
            </Row>
            </div>
          </Grid>
      </div>
    );
  }
}

export default Dashboard;
