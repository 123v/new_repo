import React, { Component } from 'react';
import './header.css';
import SelectDropDown from '../../components/SelectDropDown';
import Dock from 'react-dock';
import Georgia from '../../fonts/georgia/Georgia.ttf';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({
  hashType: 'slash'
});

const mapping = {
  'products':{
    name: 'Products',
    icon: 'fa fa-cube tab-icons',
    icon_active: 'fa fa-cube tab-icons  active',
    path:'products',
    isActive: true
  },

  'risk':{
    name: 'Risk Engine',
    icon: 'fa fa-cogs tab-icons',
    icon_active: 'fa fa-cogs tab-icons active',
    path:'risk_engine',
    isActive: true
  },

  'uw' :{
    name: 'UW Questions',
    icon: 'fa fa-heart-o tab-icons',
    icon_active: 'fa fa-heart-o tab-icons active',
    path:'uw_questions',
    isActive: true
  },

  'personalization':{
  name: 'Personalization',
  icon: 'fa fa-pencil-square-o tab-icons',
  icon_active: 'fa fa-pencil-square-o tab-icons active',
  path:'personalization',
  isActive: true
  },

}

class Header extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      active:'',
      select_value:'',
      isVisible:false,
      select_option:[
        {value:'Team Life',label:'Team Life'},
        {value:'Income Completer',label:'Income Completer'},
        {value:'Add Product',label:'Add Product'}
      ],
      mapping: mapping,
      route_list:["/products","/product_pricing","/risk_engine","/uw_questions","/personalization",'/personalization_design','/personalization_label'],
      menu_list:["Product Specifications","Product Pricing","Pricing Rules","RX Rules","MIB Rules","MVR Rules","Mortality Score","UW Questions",
                  "Application Process Log",'Underwriting Questions Management',"Products Questions Mapping","Journey Personalization","Design personalization",
                  "Content Personalization"
            ],
      catOne:false,
      catTwo:false,
      catThree:false,
      catFour:false,
      fluid: true,
      size: 0.175
    }
  }

  componentWillMount=()=>{
    console.log("inside componentWillMount");
  }

  showSettings (event) {
    event.preventDefault();
  }

  onSelectItem=(newValue)=>{
    this.setState({select_value:newValue});
    sessionStorage.removeItem('product_name');
    sessionStorage.setItem('product_name',newValue);
  }

  clickOnMenuButton=()=>{
    // console.log("inside clickOnMenuButton");
    this.setState({isVisible:true});
  }

  productsparameter=()=>{
    history.push({
      pathname: "/products"
    });
    history.go();
  }

  productspricing=()=>{
    history.push({
      pathname: "/product_pricing"
    });
    history.go();
  }
  pricingRules=()=>{
    history.push({
      pathname: "/risk_engine"
    });
    history.go();
  }
  rxRules=()=>{
    // history.push({
    //   pathname: "/product_pricing"
    // });
    // history.go();
  }
  mirRules=()=>{
    // history.push({
    //   pathname: "/product_pricing"
    // });
    // history.go();
  }
  mvrRules=()=>{
    // history.push({
    //   pathname: "/product_pricing"
    // });
    // history.go();
  }
  moratlityScore=()=>{
    // history.push({
    //   pathname: "/product_pricing"
    // });
    // history.go();
  }
  uwQuestionRules=()=>{
    // history.push({
    //   pathname: "/product_pricing"
    // });
    // history.go();
  }
  appProcessLog=()=>{
    // history.push({
    //   pathname: "/product_pricing"
    // });
    // history.go();
  }
  globalQuestionMapping=()=>{
    history.push({
      pathname: '/uw_questions'});
    history.go();
  }
  productQuestionsMapping=()=>{
    // history.push({
    //   pathname: "/personalization"
    // });
    // history.go();
  }
  journeyPersonalization=()=>{
    history.push({
      pathname: "/personalization"
    });
    history.go();
  }
  designPersonalization=()=>{
    history.push({
      pathname: "/personalization_design"
    });
    history.go();
  }
  labelPersonalization=()=>{
    history.push({
      pathname: "/personalization_label"
    });
    history.go();
  }

  setcatOne=()=>{
    if(this.state.catOne === false)
    {
      this.setState({catOne:true});
    }
    else
    {
      this.setState({catOne:false});
    }
    this.setState({catTwo:false});
    this.setState({catThree:false});
    this.setState({catFour:false});
  }

  setcatTwo=()=>{
    this.setState({catOne:false});
    if(this.state.catTwo === false)
    {
      this.setState({catTwo:true});
    }
    else
    {
      this.setState({catTwo:false});
    }
    this.setState({catThree:false});
    this.setState({catFour:false});
  }

  setcatThree=()=>{
    this.setState({catOne:false});
    if(this.state.catThree === false)
    {
      this.setState({catThree:true});
    }
    else
    {
      this.setState({catThree:false});
    }
    this.setState({catTwo:false});
    this.setState({catFour:false});
  }

  setcatFour=()=>{
    this.setState({catOne:false});
    if(this.state.catFour === false)
    {
      this.setState({catFour:true});
    }
    else
    {
      this.setState({catFour:false});
    }
    this.setState({catTwo:false});
    this.setState({catThree:false});
  }

  _render_catone=()=>{
    if(this.state.catOne === true)
    {
      return(
        <div className="sidebar_content">
          <span onClick={() => this.productsparameter()} active={this.state.active}>Products Spacifications</span>
          <span onClick={() => this.productspricing()} active={this.state.active}>Products Pricing</span>
        </div>
      );
    }
    else
    {
      return(
        <div></div>
      )
    }
  }

  _render_cattwo=()=>{
    if(this.state.catTwo=== true)
    {
      return(
        <div className="sidebar_content">
          <span onClick={() => this.pricingRules()} active={this.state.active}>Pricing Rules</span>
          <span onClick={() => this.rxRules()} active={this.state.active}>RX Rules</span>
          <span onClick={() => this.mirRules()} active={this.state.active}>MIB Rules</span>
          <span onClick={() => this.mvrRules()} active={this.state.active}>MVR Rules</span>
          <span onClick={() => this.moratlityScore()} active={this.state.active}>Mortality Score</span>
          <span onClick={() => this.uwQuestionRules()} active={this.state.active}>UW Question Rules</span>
          <span onClick={() => this.appProcessLog()} active={this.state.active}>Application Process Log</span>
        </div>
      );
    }
    else
    {
      return(
        <div></div>
      )
    }
  }

  _render_catthree=()=>{
    if(this.state.catThree=== true)
    {
      return(
        <div className="sidebar_content">
          <span onClick={() => this.globalQuestionMapping()} active={this.state.active}>Underwriting Question Management</span>
          <span onClick={() => this.productQuestionsMapping()} active={this.state.active}>Products Questions Mapping</span>
        </div>
      );
    }
    else
    {
      return(
        <div></div>
      )
    }
  }
  _render_catfour=()=>{
    if(this.state.catFour=== true)
    {
      return(
        <div className="sidebar_content">
          <span onClick={() => this.journeyPersonalization()} active={this.state.active}>Journey Personalization</span>
          <span onClick={() => this.designPersonalization()} active={this.state.active}>Design Configuration</span>
          <span onClick={() => this.labelPersonalization()} active={this.state.active}>Content Configuration</span>
        </div>
      );
    }
    else
    {
      return(
        <div></div>
      )
    }
  }

  activeTagProvider = () => {
    return(
       <div className="tab-container">
          {
            Object.keys(this.state.mapping).map(function(key, index){
              if(mapping[key].path === 'products'){
                return(
                  <div className="sidebar_container">
                    <AccordionItem className="accordion__item" onClick={() => this.setcatOne()}>
                    <AccordionItemTitle>
                        <span className="u-position-relative">
                          <i className="products-icon" style={{float:'left'}}></i>
                          <span className="tab-text">{mapping[key].name}</span>
                        </span>
                        <div className="accordion__arrow" role="presentation" />
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      {this._render_catone()}
                    </AccordionItemBody>
                    </AccordionItem>
                  </div>
                );
              }
              else if (mapping[key].path === 'risk_engine') {
                return(
                  <div className="sidebar_container">
                  <AccordionItem className="accordion__item" onClick={() => this.setcatTwo()}>
                    <AccordionItemTitle>
                        <span className="u-position-relative">
                          <i className="risk-icon" style={{float:'left'}}></i>
                          <span className="tab-text">{mapping[key].name}</span>
                        </span>
                        <div className="accordion__arrow" role="presentation" />
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      {this._render_cattwo()}
                    </AccordionItemBody>
                  </AccordionItem>
                  </div>
                );
              }
              else if (mapping[key].path === 'uw_questions') {
                return(
                  <div className="sidebar_container">
                    <AccordionItem className="accordion__item" onClick={() => this.setcatThree()}>
                      <AccordionItemTitle>
                          <span className="u-position-relative">
                            <i className="uw-icon" style={{float:'left'}}></i>
                            <span className="tab-text">{mapping[key].name}</span>
                          </span>
                          <div className="accordion__arrow" role="presentation" />
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        {this._render_catthree()}
                      </AccordionItemBody>
                    </AccordionItem>
                  </div>
                );
              }
              else if (mapping[key].path === 'personalization') {
                return(
                  <div className="sidebar_container">
                  <AccordionItem className="accordion__item" onClick={() => this.setcatFour()}>
                    <AccordionItemTitle>
                        <span className="u-position-relative">
                          <i className="pr-icon" style={{float:'left'}}></i>
                          <span className="tab-text">{mapping[key].name}</span>
                        </span>
                        <div className="accordion__arrow" role="presentation" />
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      {this._render_catfour()}
                    </AccordionItemBody>
                  </AccordionItem>
                  </div>
                );
              }
            }.bind(this))
            }
         </div>
    )
  }

  render_searchbox=()=>{
      return(
        <div className="search-box-container">
          <div className="search-text">Select Product</div>
          <div style={{width:'50%','margin-left': '3%'}}>
            <SelectDropDown
              placeholder="Select"
              optionsdata={this.state.select_option}
              onChange={(e)=>{this.onSelectItem(e)}}
              value={this.state.select_value}
              fieldName=""
              isRequiredField="true"
            />
          </div>
        </div>
      );
  }

  render_sidebar=()=>{
    return(
      <div>
        <Dock position={"left"}
            size={this.state.size}
            dimMode={"transparent"}
            isVisible={this.state.isVisible}
            onVisibleChange={this.handleVisibleChange}
            // onSizeChange={this.handleSizeChange}
            fluid={this.state.fluid}
            dockStyle={{backgroundColor:'#323F52',width:'20%'}}
            dimStyle={{ background: 'rgba(0, 0, 100, 0.2)' }}>
            {({ position, isResizing }) =>
              <div>
                <div className="cross-icon" onClick={() => this.setState({ isVisible: !this.state.isVisible })}><span className="cross"></span></div>
                <div className="user_details">
                  <div className="image_content"></div>
                  <span className="account_name">
                    <div className="details">Hello, BDI</div>
                    <div className="details">Manager</div>
                  </span>
                </div>
                <Accordion accordion={false}>
                  {this.activeTagProvider()}
                </Accordion>

              </div>
            }
          </Dock>
     </div>
    );
  }

  _renderLogin=()=>{
    console.log("inside _renderLogin");
    sessionStorage.removeItem("checkLogin");
    localStorage.removeItem('user_details');
    history.push({
      pathname: "/"
    });
    history.go();
  }

  render_sidebar_title=()=>{
    console.log("++++++++++++++++++++++++++++++++");
    console.log(this.props.active);
    if (this.props.active === 1) {
      return(
        <div className="sidebar-title">{this.state.menu_list[0]}</div>
      );
    }else if (this.props.active === 2) {
      return(
        <div className="sidebar-title">{this.state.menu_list[1]}</div>
      );
    }else if (this.props.active === 3) {
      return(
        <div className="sidebar-title">{this.state.menu_list[2]}</div>
      );
    }else if (this.props.active === 4) {
      return(
        <div className="sidebar-title">{this.state.menu_list[3]}</div>
      );
    }else if (this.props.active === 5) {
      return(
        <div className="sidebar-title">{this.state.menu_list[4]}</div>
      );
    }else if (this.props.active === 6) {
      return(
        <div className="sidebar-title">{this.state.menu_list[5]}</div>
      );
    }else if (this.props.active === 7) {
      return(
        <div className="sidebar-title">{this.state.menu_list[6]}</div>
      );
    }else if (this.props.active === 8) {
      return(
        <div className="sidebar-title">{this.state.menu_list[7]}</div>
      );
    }else if (this.props.active === 9) {
      return(
        <div className="sidebar-title">{this.state.menu_list[8]}</div>
      );
    }else if (this.props.active === 10) {
      return(
        <div className="sidebar-title">{this.state.menu_list[9]}</div>
      );
    }else if (this.props.active === 11) {
      return(
        <div className="sidebar-title">{this.state.menu_list[10]}</div>
      );
    }else if (this.props.active === 12) {
      return(
        <div className="sidebar-title">{this.state.menu_list[11]}</div>
      );
    }else if (this.props.active === 13) {
      return(
        <div className="sidebar-title">{this.state.menu_list[12]}</div>
      );
    }else if (this.props.active === 14) {
      return(
        <div className="sidebar-title">{this.state.menu_list[13]}</div>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }

  render() {

    // console.log("inside header constructor");
    let url = window.location.href;
    let b = new URL(url).pathname;
    console.log(b);
    if(b === "/")
    {
      return (
        <div></div>
      );
    }
    else
    {
      let check = "";
      for(let i=0; i < this.state.route_list.length; i++)
      {
        if(this.state.route_list[i].toString() === b)
        {
          check = "match";
          break;
        }
        else
        {
          check = "unmatch";
        }
      }

      if(check === "match")
      {
        return (
          <header className="header-height">
            <div className="header-container">
            <div className="left-container">
              <div className="left-side">
                {this.render_sidebar()}
              </div>
              <div className="logo-container"></div>
            </div>
              {this.render_searchbox()}
            </div>
            <div className="menu-bar">
              <div className='sidebar_button' onClick={() => this.clickOnMenuButton()}></div>
              {this.render_sidebar_title()}
            </div>
          </header>
        );
      }

    }
  }
}

export default Header;
