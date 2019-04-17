/**
 * Não da pra usar  markdown-parse porque
 * >  fica dando erro no yaml.js
 *    Module not found: Error: Can't resolve 'fs' in '/Users/maisa/Documents/Formality-Web/node_modules/yaml-js/lib'
 * > não encontra o fs no '/Users/maisa/Documents/Formality-Web/src'
 */
const {Component, render, linkEvent} = require("inferno");
// const md = require('markdown-it')();
// var readMarkdown = require('read-markdown');

const h = require("inferno-hyperscript").h;
const Canvas = require("inferno-canvas-component-2");

const s = require('./style');
const fs = require("./font-style");

const formality_md = require("./markdown/formality.md.js");
console.log(formality_md);

// Feature images
import formalityTitle from './images/formality-title.png';
import featureImage1 from './images/math.png';
import featureImage2 from './images/fast.png';
import featureImage3 from './images/code.png';
import logo from './images/logo-formality.png';
import githubLogo from './images/github.png';

// Colors
const primaryColor = "#444053";
const secondaryColor = "#ffffff";

class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {page: "specification"};
  }
  componentDidMount() {
    //this.setState({page: [10, 20, 30]});
  }
  render() {
    // function drawCanvas({ctx, time}) {
    //     const {width, height} = ctx.canvas;
    //     ctx.save();
    //     ctx.clearRect(0, 0, width, height);
    //     ctx.fillStyle = 'black';
    //     ctx.translate(width / 2, height / 2);
    //     ctx.rotate(((time / 10) % 360) * Math.PI / 180);
    //     ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2);
    //     ctx.restore();
    // }

    const formalityTitleContainer = {
      "width": "650px",
      "height": "85px",
      "object-fit": "cover",
      "background-repeat": "no-repeat, repeat",
      "background-size": "cover",
      "display": "flex",
      "flex-flow": "column nowrap",
      "justify-content": "flex-start",
      "align-items": "center",
      "background-image": "url(src/images/formality-title.png)",
      "margin-top": "200px",
      "margin-bottom": "30px"
    }

    const tryItButton = {
      "width": "100px", 
      "height": "50px", 
      "display": "flex", 
      "justify-content": "center", 
      "font-size": "20px",
      "margin-top": "60px",
      "color": primaryColor,
      "border": "2px solid #444053",
      "border-radius": "25px",
      "background-color": secondaryColor,
      "cursor": "pointer",
    }

    // ============= Home =============
    if (this.state.page === "home" ) {
      return h("div", [

        // Top menu
        h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
          h("img", {src: logo, alt: "logo", style: s.logo}),
          h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "90px"}}, [
            h(Tab, {title: "Home", isCurrentPage: true, onClick: () => { this.setState({page: "home"}) }}),
            h(Tab, {title: "Specification", isCurrentPage: false, onClick: () => { this.setState({page: "specification"}) }}),
            h(Tab, {title: "Try it!", isCurrentPage: false, onClick: () => { this.setState({page: "tryIt"}) }})
          ]),
        ]),

        // Top area: Formality title and subtitle
        h("div", {style: s.topContainer}, [
          h("div", {style: formalityTitleContainer}),    
          h("div", {style: fs.formalitySubtitle}, [
            h("span", {style: {"font-family": 'Open Sans' }}, "An efficient\u00A0"),
            h("span", {style: {"font-family": 'Open Sans', "font-weight": "bold"}}, "proof"),
            h("span", {style: {"font-family": 'Open Sans' }}, "gramming language"),
          ]),
          h("button", {style: tryItButton, onClick: () => { this.setState({page: "tryIt"}) }}, "Try it"),
        ]),

        // Canvas test
        // h(Canvas, {draw: drawCanvas, width: 200, height: 200, realtime: true})

        h(WhyGrid, {}),
        h(Usage,{}),
        h(Footer, {})
      ]);

    // ============= Specification Page =============
    } else if (this.state.page === "specification") {
      console.log("Specificiation carregou");
      return h("div", {"display": "flex", "justify-content": "space-between"}, [
        h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
          h("img", {src: logo, alt: "logo", style: s.logo}),
          h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "90px"}}, [
            h(Tab, {title: "Home", isCurrentPage: false, onClick: () => { this.setState({page: "home"}) }}),
            h(Tab, {title: "Specification", isCurrentPage: true, onClick: () => { this.setState({page: "specification"}) }}),
            h(Tab, {title: "Try it!", isCurrentPage: false, onClick: () => { this.setState({page: "tryIt"}) }})
          ]),
        ]),
        h("div", {style: {"height": "1000px", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
          h("div ", {style: {"font-family": 'Open Sans', "color": s.primaryColor, "margin-left": "90px", "margin-top": "20px", "line-height": "1.6"}}, [
            formality_md
          ]),
        ]),
        h("div", {}, [
          h("div", {style: {"background-color": s.primaryColor, "height": "1px"}}),
          h(Footer, {})
        ]),
      ]);
      

    // ============= Try it Page =============  
    } else if (this.state.page === "tryIt") {
      // h("div", {style: {"height": "1000px","display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center",}}, [
      //   h("div", {}, "content in MD"), 
      //   h("div", {"background-color": s.primaryColor, "heigth": "1px"}),
      //   h(Footer, {})
      // ])
    }
  }
}
//class MarkdownRender extends Component {
  //constructor(props) {
    //super(props)
    //this.markdown = props.markdown;
    //this.state = {};
  //}
  //render() {
    //return this.markdown;
  //}
//}

// --- Components --- 

// Top menu: logo and tabs
// class Header extends Component {
//   constructor(props) {
//     super(props)
//     this.onClick = props.onClick;
//     this.state = {linkTo: props.linkTo}
//   }

//   render() {
//     return h("div", {style: {"width": "100%", "display": "flex", "flex-flow": "row nowrap", "background-color": s.primaryColor, "color": s.secondaryColor}}, [
//             h("img", {src: logo, alt: "logo", style: s.logo}),
//             h("div", {style: {"width": "100%", "height": "30px", "margin-top": "10px", "display": "flex", "justify-content": "flex-end", "align-items": "center", "margin-right": "90px"}}, [
//               h(Tab, {title: "Home", onClick: () => { this.setState({page: this.state.linkTo}) }}),
//               h(Tab, {title: "Specification", onClick: () => { this.setState({page: "specification"}) }}),
//               h(Tab, {title: "Try it!", onClick: () => { this.setState({page: "tryIt"}) }})
//             ]),
//           ]);
//   }
// }


// ------ Auxiliars ---- 
class Tab extends Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick;
    this.state = {title: props.title, isCurrentPage: props.isCurrentPage};
  }
  
  render() {
    var element = h("div", {style: s.tabs},  this.state.title)
    if (this.state.isCurrentPage) {
      console.log(this.state.title+" on focus!");
      element = h("div", {style: s.tabsOnFocus, onClick: this.onClick}, this.state.title)
    } else {
      element = h(Hover, {normalComponent: h("div", {style: s.tabs},  this.state.title), 
                          onFocusComponent: h("div", {style: s.tabsOnFocus, onClick: this.onClick}, this.state.title)})
    }
    return element;                        
  }
}

class Hover extends Component {
  constructor(props) {
    super(props)
    this.state = {isOnFocus: false, normalComponent: props.normalComponent, onFocusComponent: props.onFocusComponent};
  }

  render() {
    const component = this.state.isOnFocus ? this.state.onFocusComponent : this.state.normalComponent ;

    return h("div", 
      {onMouseEnter: () => this.setState(this.state.isOnFocus = true), 
      onMouseLeave: () => this.setState(this.state.isOnFocus = false)}, 
      component);
  }
}
// -------------------


class WhyGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const gridContainer = {
      "display": "flex",
      // "grid-row-gap": "30px",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
    }

    const gridItem = {
      "display": "flex",
      "height": "350px",
      "width": "800px",
      "align-items": "center", 
      "font-size": "22px"
    }

    return h("div", {style: gridContainer}, [
      h("div", {style: fs.title}, "Why use Formality?"),
      // First element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"}, [
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Secure"),
          h("p", {}, "Formality has a type system capable of proving mathematical theorems about its own programs make it really secure. Theorem proving is possible due to dependent types, like on other proof assistants as Agda and Idris."),
          h("p", {style: {"cursor": "pointer", "margin-top": "15px"}}, "Read more..."),
        ]),
        h("img", {src: featureImage1, alt: "image1", style: s.featureImg})
      ]),
      // Second element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"},[
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Fast"),
          h("p", {}, "No garbage-collection, optimal beta-reduction and a massively parallel GPU compiler make it insanely fast."),
          h("p", {}, "Massively parallel evaluation is possible due to Symmetric Interaction Calculus (SIC), a new model of computation that combines the best aspects of the Turing Machine and the λ-Calculus."),
          h("p", {style: {"cursor": "pointer", "margin-top": "15px"}}, "Read more..."),
        ]),
        h("img", {src: featureImage2, alt: "image2", style: s.featureImg})
      ]),
      // Third element
      h("div", {style: gridItem}, [
        h("div", {style: fs.text, "width": "300px"}, [
          h("p", {style: {"font-size": "25px", "margin-bottom": "10px"}}, "Simple standart"),
          h("p", {}, "The entire implementation takes 500 LOC, making it a simple standard you could implement yourself.")
        ]),
        h("img", {src: featureImage3, alt: "image3", style: s.featureImg})
      ])
    ]);
  }

}

class Usage extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

    return h("div", {style: s.usageContainer}, [
      h("div", {style: fs.title}, "Usage"),
      h("div", {style: fs.subtitle }, "Formality is currently implemented as a small, dependency-free JavaScript library. It will futurely be implemented in other languages, and formalized in Agda/Coq. To use the current implementation:"), 
      h("div", {style: s.usageCodeContainer, "margin-top": "50px"}, [
        h("p", {style: {"color": '#6B747F' }}, "# Installs Formality"),
        h("p", {style: {"color": '#373D41' }}, "npm i -g formality "),
        h("br", {}, "     "),
        h("p", {style: {"color": '#6B747F' }}, "# Enters the repository"),
        h("p", {style: {"color": '#373D41' }}, "git clone https://github.com/maiavictor/formality"),
        h("p", {style: {"color": '#373D41' }}, "cd formality"),
        h("br", {}, "     "),
        h("p", {style: {"color": '#6B747F' }}, "# Checks and evaluates main"),
        h("p", {style: {"color": '#373D41' }}, "formality main"),
      ]),
    ]); 
  }
}

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

    return h("div", {style: s.footerContainer}, [
      h("div", {}, [
        h("p", {}, "Talk to us "),
        h("p", {}, "irc... "),
      ]),
      h("div", {}, [
        h("p", {}, "Social"),
        h("img", {src: githubLogo, alt: "logo", style: s.githubIcon}),
      ]),
    ]); 
  }
}


// Other Pages
const Specification = () => (
  h("div", {}, "Specification")
);


window.onload = () => {
  render(h("div", {}, [h(Site)]), document.getElementById("main"));
};
