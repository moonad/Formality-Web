const primaryColor = "#444053";

const formalityName = {
  "font-size": "80px",
  "color": primaryColor,
  "margin-top": "200px"
}   

const formalitySubtitle = {
  "font-size": "25px",
  "font-family": 'Open Sans',
  "color": "#444053"
}

const title = {
  "width": "100%",
  "height": "100px",
  "display": "flex",
  "justify-content": "center",
  "font-size" : "40px",
  "align-items": "center",
  "font-family": "Open Sans",
  "color": primaryColor,
  "top": "25px",
  "position": "relative",
}

const text = {
  "padding": "40px",
  "font-size": "15px",
  "font-family": "Open Sans",
  "color": primaryColor,
  "line-height": "1.6",
  "text-align": "justify",
}

const subtitle = {
  ...text, 
  "font-size": "20px",
  "width": "800px",
  "margin-top": "20px",
  "text-align": "center", 
  "line-height": "1.6",
}

export {title, formalityName, formalitySubtitle, text, subtitle};
