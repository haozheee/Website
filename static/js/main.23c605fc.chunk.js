(this.webpackJsonpHaozhe_Zhou_Website=this.webpackJsonpHaozhe_Zhou_Website||[]).push([[0],{35:function(e,t,a){e.exports=a(73)},40:function(e,t,a){},41:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),i=a.n(r),c=(a(40),a(41),a(16)),o=a(15),s=a(2),m=a(3),u=a(5),d=a(4),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("li",{id:this.props.item,className:this.props.className},l.a.createElement("a",{href:this.props.tolink,className:"navitemlink"},this.props.item))}}]),a}(n.Component),E=(a(24),a(31)),p={bmBurgerButton:{position:"fixed",width:"3vw",height:"3vw",right:"3.65vw",top:"4.8vw"},bmBurgerBars:{background:"var(--text-color)"},bmBurgerBarsHover:{background:"var(--text-color)"},bmCrossButton:{width:"3vw",height:"3vw"},bmCross:{background:"var(--text-color)"},bmMenuWrap:{position:"fixed",height:"100%",top:"0px"},bmMenu:{fontSize:"var(--fontsize-nav)",width:"40vw",background:"var(--theme-color)",float:"right","padding-top":"10vw","border-left":"1px solid var(--text-color)"},bmMorphShape:{},bmItemList:{color:"#b8b7ad",display:"block"},bmItem:{},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).activeitem=function(e){n.setState({isOpen:!1})},n.closeMenu=function(){n.setState({isOpen:!1})},n.handleStateChange=function(e){n.setState({isOpen:e.isOpen})},n.updateDimensions=function(){var e=window,t=document,a=t.documentElement,l=t.getElementsByTagName("body")[0],r=e.innerWidth||a.clientWidth||l.clientWidth;e.innerHeight||a.clientHeight||l.clientHeight;n.setState({isTablet:r<1380}),n.setState({isPhone:r<1023})},n.state={NavItemActive:"",isTablet:!1,isPhone:!1,isOpen:!1},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),this.setState({isOpen:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return l.a.createElement("div",{class:"navmargin"},this.state.isPhone&&l.a.createElement("nav",{class:"mynav"},l.a.createElement(h,{className:"navhome",item:"Haozhe Zhou",tolink:"/",activec:this.activeitem}),l.a.createElement(E.slide,{right:!0,styles:p,isOpen:this.state.isOpen,onStateChange:this.handleStateChange},l.a.createElement("ul",null,l.a.createElement(h,{className:"navitem",item:"Publication",tolink:"#publications",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Vatea",tolink:"/HaozheCV.pdf",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Contacts",tolink:"#contacts",activec:this.activeitem})))),!this.state.isPhone&&this.state.isTablet&&l.a.createElement("nav",{class:"mynav"},l.a.createElement("ul",null,l.a.createElement(h,{className:"navhome",item:"Haozhe Zhou",tolink:"/",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Contacts",tolink:"#contacts",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Vitae",tolink:"/HaozheCV.pdf",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Publication",tolink:"#publications",activec:this.activeitem}))),!this.state.isPhone&&!this.state.isTablet&&l.a.createElement("nav",{class:"mynav"},l.a.createElement("ul",null,l.a.createElement(h,{className:"navhome",item:"Haozhe Zhou",tolink:"/",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Contacts",tolink:"#contacts",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Vitae",tolink:"/HaozheCV.pdf",activec:this.activeitem}),l.a.createElement(h,{className:"navitem",item:"Publication",tolink:"#publications",activec:this.activeitem}))))}}]),a}(n.Component),g=function(e){var t=e.mailto,a=e.label;return l.a.createElement(c.b,{className:"contactlink",to:"#",onClick:function(e){window.location=t,e.preventDefault()}},a)},v=a(7),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"consec",style:{"border-bottom":"none"},id:"contacts"},l.a.createElement(v.a,null,l.a.createElement("h4",null," Contact ")),l.a.createElement("div",{class:"socialdiv",style:{display:"flex","justify-content":"space-around"}},l.a.createElement(v.a,null,l.a.createElement("div",{className:"social_icon"},l.a.createElement("a",{href:"https://github.com/haozheee",className:"contactlink"},"GitHub")),l.a.createElement("div",{className:"social_icon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/haozhe-zhou-8b6882170/",className:"contactlink"},"LinkedIn")),l.a.createElement("div",{className:"social_icon"},l.a.createElement(g,{label:"E-Mail",mailto:"mailto:zhou929@purdue.edu"})))))}}]),a}(n.Component),f=(n.Component,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).publications=[{title:"RoboMal: Malware Detection for Robot Network Systems",authors:"Upinder Kaur, Haozhe Zhou, Xiaxin Shen, Byung-Cheol Min, Richard M. Voyles",venue:"IEEE International Conference on Robotic Computing (IRC)",status:"",link:"",image:"/images/robomal.jpg"},{title:"TupperwareEarth: Bringing Intelligent User Assistance to the 'Internet of Kitchen Things'",authors:"Sangjun Eom, Upinder Kaur, Haozhe Zhou, David Kusuma, Richard M. Voyles",venue:"IEEE Internet of Things Journal",status:"",link:"https://example.com/tupperware-earth",image:"/images/tupperware-earth.jpg"}],e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"conparent",style:{"border-top":"none"}},l.a.createElement("h4",null,"Publications and Presentations"),l.a.createElement("div",{className:"consec",style:{"padding-left":"1rem","padding-right":"1rem"}},l.a.createElement(v.a,null,this.publications.map((function(e,t){return l.a.createElement("div",{key:t,className:"publication-card"},l.a.createElement("div",{className:"publication-image"},l.a.createElement("a",{href:e.link},l.a.createElement("img",{src:e.image,alt:e.title}))),l.a.createElement("div",{className:"publication-info"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.authors),l.a.createElement("p",null,e.venue),l.a.createElement("p",null,e.status)))})))))}}]),a}(n.Component)),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"condiv"},l.a.createElement("h2",{className:"subtopic"}," Haozhe Zhou \u5468\u6d69\u54f2 "),l.a.createElement("h3",null," Software Engineering; Machine Learning; System Security "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component),N=a(34),S=(a(67),[{title:"TupperwareEarth Kitchen IoT",subtitle:"Co-Authored paper accepted to IEEE IoT Journal",time:"Janurary 2022",image:"/ble.png",link:"https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9674047&casa_token=eN4UHl5hXO4AAAAA:E8ISKjZSk4VQrj81AdxNEpXP8oC83smQ-IouuwyV7L429DKtCUpTCa9rNoYcSZ5x_5LngR70&tag=1"},{title:"ROS Malware Dataset & Detection",subtitle:"Co-Authored paper accepted to 2021 IEEE IRC",time:"November 2021",image:"/robomal_yellow.jpg",link:"https://purr.purdue.edu/publications/3860"},{title:"Estimate Tranportation Covid Risk",subtitle:"Third Place at SAE MobilityForward Challenge",time:"November 2021",image:"/saef.png",link:"https://saemobilityforwardchallenge.com/"}]),k={autoplay:!0,arrows:!1,transitionDuration:450,duration:2500},C=(n.Component,n.Component,a(29),a(12)),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updateDimensions=function(){var e=window,t=document,a=t.documentElement,l=t.getElementsByTagName("body")[0],r=e.innerWidth||a.clientWidth||l.clientWidth;e.innerHeight||a.clientHeight||l.clientHeight;n.setState({isTablet:r<1380}),n.setState({isPhone:r<1023})},n.state={isTablet:!1,isPhone:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)})),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return l.a.createElement("div",{className:"conparent"},l.a.createElement(v.a,{cascade:!0},l.a.createElement("div",{className:"consec",style:{"border-top":"none","border-bottom":"none"}},l.a.createElement("div",{className:"consec"},!this.state.isPhone&&l.a.createElement("div",{style:{display:"block"}},l.a.createElement("img",{src:"./haozhe.jpg",className:"conimg-s"}),l.a.createElement("p",{style:{"line-height":"1.5","padding-left":"1.5rem","padding-right":"2.5rem"}},l.a.createElement("h5",null,"Education"),l.a.createElement("ul",null,l.a.createElement("li",null," Ph.D.  ",l.a.createElement("a",{className:"inlinea",href:"https://www.cmu.edu"},"Carnegie Mellon University")),l.a.createElement("li",null," School of Computer Science, Societal Computing"),l.a.createElement("li",null," 2022/08 - Present "),l.a.createElement("li",null," Advisors: Yuvraj Agarwal, Mayank Goel ")),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null," B.S.  ",l.a.createElement("a",{className:"inlinea",href:"https://www.purdue.edu"},"Purdue University")),l.a.createElement("li",null," Department of Computer Science, Computer Science Honors "),l.a.createElement("li",null," 2018/08 - 2021/12 ")),l.a.createElement("h5",null,"Research Overview"),"My current research is dedicated to addressing practical sensing challenges in the field of Ubiquitous Computing (UbiComp) and Internet of Things (IoT). I create effective and privacy-aware sensing systems on human subjects, spanning applications such as human activity recognition, pose estimation, health sensing, and more. I build systems for managing multi-user privacy in shared spaces through negotiation and on-device machine learning-based filtering of speech information for acoustic sensing applications. My research methods involve system prototyping, machine learning, and user studies.")),this.state.isPhone&&l.a.createElement("div",null,l.a.createElement("img",{src:"./haozhe.jpg",className:"conimg-s"}),l.a.createElement("p",{style:{"padding-left":"1vw","padding-bottom":"1vw"}},l.a.createElement("h5",null,"Education"),l.a.createElement("ul",null,l.a.createElement("li",null," Ph.D. ",l.a.createElement("a",{className:"inlinea",href:"https://www.cmu.edu"},"Carnegie Mellon University")),l.a.createElement("li",null," School of Computer Science, Societal Computing"),l.a.createElement("li",null," 2022/08 - Present "),l.a.createElement("li",null," Advisors: Yuvraj Agarwal, Mayank Goel ")),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null," B.S. ",l.a.createElement("a",{className:"inlinea",href:"https://www.purdue.edu"},"Purdue University"),". 2018/08 - 2021/12 "),l.a.createElement("li",null," Department of Computer Science, Computer Science Honors "),l.a.createElement("li",null," 2018/08 - 2021/12 ")),l.a.createElement("br",null),l.a.createElement("h5",null,"Research Overview"),"My current research is dedicated to addressing practical sensing challenges in the field of Ubiquitous Computing (UbiComp) and Internet of Things (IoT). I create effective and privacy-aware sensing systems on human subjects, spanning applications such as human activity recognition, pose estimation, health sensing, and more. I build systems for managing multi-user privacy in shared spaces through negotiation and on-device machine learning-based filtering of speech information for acoustic sensing applications. My research methods involve system prototyping, machine learning, and user studies."))))),l.a.createElement(v.a,null,l.a.createElement("div",{className:"consec",style:{"border-top":"none","border-bottom":"none"},id:"publications"},l.a.createElement("h4",null,"Publications"),l.a.createElement("div",{className:"consec",style:{"border-bottom":"none","padding-top":"1vw","padding-left":"1vw","padding-right":"1vw","padding-bottom":"1vw"}},l.a.createElement("h6",null,"Refereed Conference Articles"),l.a.createElement("ol",{style:{"margin-right":"1.5rem","list-style-type":"none","padding-left":"0rem"}},['<b>Haozhe Zhou</b>, Mayank Goel, Yuvraj Agarwal. 2024. Bring Privacy To The Table: Interactive Negotiation for Privacy Settings of Shared Sensing Devices. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI\' 24) <a className="papera" href="https://dl.acm.org/doi/full/10.1145/3613904.3642897">[Paper]</a>','Sudershan Boovaraghavan, <b>Haozhe Zhou</b>, Mayank Goel, Yuvraj Agarwal. 2024. Kirigami: Lightweight Speech Filtering for Privacy-Preserving Activity Recognition using Audio. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (UbiComp\' 24) <a className="papera" href="https://dl.acm.org/doi/abs/10.1145/3643502">[Paper]</a>  <a className="papera" href="https://github.com/synergylabs/kirigami">[Code]</a>','Upinder Kaur, <b>Haozhe Zhou</b>, Xiaxin Shen, Byung-Cheol Min, and Richard M. Voyles. 2021. RoboMal: Malware Detection for Robot Network Systems. 2021 IEEE International Conference on Robotic Computing (IRC), November 2021. <a className="papera" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9699885">[Paper]</a>'].map((function(e,t){return l.a.createElement("li",{key:t,style:{display:"flex","margin-bottom":"0.5em"}},l.a.createElement("span",{style:{flex:"0 0 2.5em"}},"[C.",3-t,"]"),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))}))),l.a.createElement("h6",null,"Refereed Journal Articles"),l.a.createElement("ol",{style:{"margin-right":"1.5rem","list-style-type":"none","padding-left":"0rem"}},['Sangjun  Eom, <b>Haozhe Zhou</b>, Upinder Kaur, Richard M. Voyles, David  Kusuma. 2022. TupperwareEarth: Bringing Intelligent User Assistance to the "Internet of Kitchen Things". IEEE Internet of Things Journal. <a className="papera" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9674047&casa_token=eN4UHl5hXO4AAAAA:E8ISKjZSk4VQrj81AdxNEpXP8oC83smQ-IouuwyV7L429DKtCUpTCa9rNoYcSZ5x_5LngR70&tag=1">[Paper]</a>'].map((function(e,t){return l.a.createElement("li",{key:t,style:{display:"flex","margin-bottom":"0.5em"}},l.a.createElement("span",{style:{flex:"0 0 2.5em"}},"[J.",1-t,"]"),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))}))),l.a.createElement("h6",null,"Demos and Posters"),l.a.createElement("ol",{style:{"margin-right":"1.5rem","list-style-type":"none","padding-left":"0rem"}},["<b>Haozhe Zhou</b>, Sudershan Boovaraghavan, Mayank Goel, Yuvraj Agarwal. 2024. On-Device Speech Filtering for Privacy-Preserving Acoustic Activity Recognition The 30th Annual International Conference on Mobile Computing and Networking. (MobiCom '24)"].map((function(e,t){return l.a.createElement("li",{key:t,style:{display:"flex","margin-bottom":"0.5em"}},l.a.createElement("span",{style:{flex:"0 0 2.5em"}},"[D.",1-t,"]"),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))})))))),l.a.createElement(v.a,null,l.a.createElement(y,null)))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"conparent",style:{"border-top":"none"}},l.a.createElement(v.a,null,l.a.createElement("h4",null,"Education")),l.a.createElement("div",{className:"consec",style:{"padding-left":"1rem"}},l.a.createElement("div",{className:"conedu"},l.a.createElement(v.a,null,l.a.createElement("h6",{className:"conedu_title"}," Purdue University, West Lafayette, IN"),l.a.createElement("div",{className:"eduinfo"},l.a.createElement("div",{style:{width:"auto"}},"B.S. Computer Science Honors "),l.a.createElement("div",{style:{width:"auto",float:"right"}},"August 2018 - December 2021")," ",l.a.createElement("br",null),l.a.createElement("div",{style:{width:"auto",float:"left"}}," Mathematics Minor "),l.a.createElement("div",{style:{width:"auto",float:"right"}},"GPA: 3.98/4.00"),l.a.createElement("br",null),l.a.createElement("div",{style:{width:"auto",float:"left"}}," Concentration: Machine Intelligence, Computational Science and Engineering"),l.a.createElement("br",null),l.a.createElement("div",{style:{width:"auto",float:"left"}}," Dean\u2019s List and Semester Honors "),l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement("h6",{className:"conedu_title"},"Relevant Courses "),l.a.createElement("h6",{className:"course_list_title"}," Machine Learning "),l.a.createElement("ul",{className:"course_list"},l.a.createElement("li",null," Machine Learning and Data Mining"),l.a.createElement("li",null," Natural Language Processing "),l.a.createElement("li",null," Neural Image Processing "),l.a.createElement("li",null," Introduction to Artificial Intelligence ")),l.a.createElement("h6",{className:"course_list_title"}," CS Foundation"),l.a.createElement("ul",{className:"course_list"},l.a.createElement("li",null," Introduction to Analyis of Algorithms "),l.a.createElement("li",null," Operating System "),l.a.createElement("li",null," Systems Programming "),l.a.createElement("li",null," Computer Architecture "),l.a.createElement("li",null," Discrete Math "),l.a.createElement("li",null," Introduction to Digital System Design ")),l.a.createElement("h6",{className:"course_list_title"}," Math and Statistics "),l.a.createElement("ul",{className:"course_list"},l.a.createElement("li",null," Numerical Methods "),l.a.createElement("li",null," Introduction to Statistics "),l.a.createElement("li",null," Linear Algebra "),l.a.createElement("li",null," Real Analysis "),l.a.createElement("li",null," Probability ")),l.a.createElement("h6",{className:"course_list_title"}," Psychology "),l.a.createElement("ul",{className:"course_list"},l.a.createElement("li",null," Introduction to Psychology "),l.a.createElement("li",null," Introduction to Behavirial Neuroscience "))))),l.a.createElement(y,null))}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"condiv",style:{padding:"2rem"}},l.a.createElement("h2",{className:"subtopic"},"Teaching Experience"),l.a.createElement("h2",{className:"subtopic"}),l.a.createElement("h3",null,"CS250 Computer Architecture "),l.a.createElement("h4",null," Undergraduate Teaching Assistant, Purdue University, August 2021 - Present",l.a.createElement("ul",null,l.a.createElement("li",null," Organize and answer questions in lab sessions "),l.a.createElement("li",null," Logic gates, memory allocation, bus drivers, interrupts, assembly language"))),l.a.createElement("br",null),l.a.createElement("h3",null,"CS290 The Data Mine "),l.a.createElement("h4",null," Undergraduate Teaching Assistant, Purdue University, August 2021 - Present",l.a.createElement("ul",null,l.a.createElement("li",null," Seminar live TA, assignment grading, office hour, piazza "),l.a.createElement("li",null," R, bash, Pandas, SQL, data processing, visualization  "))),l.a.createElement("br",null),l.a.createElement("h3",null,"CS390 Neural Image Processing "),l.a.createElement("h4",null," Undergraduate Teaching Assistant, Purdue University, January 2021 - May 2021",l.a.createElement("ul",null,l.a.createElement("li",null," Piazza, office hour  "),l.a.createElement("li",null," Tensorflow, Convolutional Neural Network, Generative Adverserial Network  "))),l.a.createElement("br",null),l.a.createElement("h3",null," IEEE Code Cafe Python Programming "),l.a.createElement("h4",null," Volunteer Mentor, Purdue University, April 2021",l.a.createElement("ul",null,l.a.createElement("li",null," Mini-lecture on introductory level of Python programming"))),l.a.createElement("br",null),l.a.createElement("h3",null," WorldChangers 4-H Hackathon "),l.a.createElement("h4",null," Volunteer Mentor, Online, April 2021",l.a.createElement("ul",null,l.a.createElement("li",null," Help high-school students with project idea and implementation"))),l.a.createElement("br",null))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={ProgrammingLanguage:["Java","Python","C","C++","Javascript","Node.JS","HTML","Matlab","R"],Framework:["Android","React.js","React-Native","Express.js","Vue.js"],Database:["SQL","MySQL","Neo4j","MangoDB"],CloudPlatform:["Amazon Web Service (AWS)","Firebase"],MachineIntelligence:["Natural Language Processing","Neural Image Processing","PyTorch","Tensorflow","Ontology"],Tool:["Git","Docker","Bash","Linux"],Hardware:["Arduino","Raspberry Pi","Verilog","Soldering"]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"conparent",style:{"border-top":"none"}},l.a.createElement("h4",null,"Skills"),l.a.createElement("div",{className:"consec",style:{"padding-left":"1rem","padding-right":"1rem"}},l.a.createElement("h5",null,"Programming Language"),l.a.createElement("ul",{class:"skill_list"},this.state.ProgrammingLanguage.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))}))),l.a.createElement("h5",null,"Framework"),l.a.createElement("ul",{class:"skill_list"},this.state.Framework.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))}))),l.a.createElement("h5",null,"Database"),l.a.createElement("ul",{class:"skill_list"},this.state.Database.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))}))),l.a.createElement("h5",null,"CloudPlatform"),l.a.createElement("ul",{class:"skill_list"},this.state.CloudPlatform.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))}))),l.a.createElement("h5",null,"Machine Intelligence"),l.a.createElement("ul",{class:"skill_list"},this.state.MachineIntelligence.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))}))),l.a.createElement("h5",null,"Tools"),l.a.createElement("ul",{class:"skill_list"},this.state.Tool.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))}))),l.a.createElement("h5",null,"Hardware"),l.a.createElement("ul",{class:"skill_list"},this.state.Hardware.map((function(e){return l.a.createElement(v.a,null,l.a.createElement("li",null,e))})))),l.a.createElement(y,null))}}]),a}(n.Component),T=a(22),O=(a(74),l.a.createRef(),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault();n.state.from_name,n.state.message;T.a.send("service_hnb0z9o","template_lvuovf9",{from_name:n.state.from_name,message:n.state.message}).then((function(e){})).catch((function(e){})),n.setState({message:""}),n.setState({from_name:""})},n.handleMessage=function(e){n.setState({message:e.target.value})},n.handleName=function(e){n.setState({from_name:e.target.value})},T.a.init("user_TKLA9lxdO7V7DxomJTQ86"),n.state={from_name:"",message:""},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"condiv"},l.a.createElement("h1",{className:"subtopic"},"Contact"),l.a.createElement("h3",null,"Email:   zhou929[AT]purdue[DOT]edu"),l.a.createElement("h3",null,"Phone:   765-seven,seven,five-0548"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("input",{type:"text",name:"from_name",placeholder:"from name",value:this.state.from_name,onChange:this.handleName,style:{width:"100%",background:"#314a43",color:"#FFFFFF","font-size":"22px",padding:"8px",border:"none"}}),l.a.createElement("textarea",{type:"text",name:"message",placeholder:"Your message",value:this.state.message,onChange:this.handleMessage,style:{width:"100%",height:"300px",background:"#314a43",color:"#FFFFFF",marginTop:"16px","font-size":"19px",padding:"8px",border:"none"}}),l.a.createElement("button",{onClick:"submit",disabled:!this.state.message||!this.state.from_name,style:{width:"100%",height:"50px",color:"#314a43",marginTop:"16px","font-size":"19px",padding:"8px",border:"none"}},"Submit ")))}}]),a}(n.Component)),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"conparent",style:{"border-top":"none"}},l.a.createElement(v.a,null,l.a.createElement("h4",null,"Research Experience")),l.a.createElement("div",{className:"consec"},l.a.createElement(C.Timeline,{lineColor:"var(--text-color)"},l.a.createElement(C.TimelineItem,{key:"000",dateText:"Sepetmber 2021 - Present",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Testing Deep Learning Libraries through Equivalence Graphs"),l.a.createElement("p",{className:"timeline-mysubtitle"}," Undergraduate Research Assistant, Purdue University; ",l.a.createElement("br",null)," Advised by ",l.a.createElement("a",{className:"inlinea",href:"https://www.cs.purdue.edu/homes/lintan/"},"Professor Lin Tan")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Reviewed GitHub issues on PyTorch related to numerical non-crash bugs"),l.a.createElement("li",null," Identified new equivalence rules to capture bugs from contiguous and complex tensors")))),l.a.createElement(C.TimelineItem,{key:"001",dateText:"Feburary 2021 - Present",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"SoK: Sensor-based Side-Channel Attacks on Mobile Devices"),l.a.createElement("p",{className:"timeline-mysubtitle"},"CS Honors Research, PurSec, Purdue University; ",l.a.createElement("br",null)," Advised by ",l.a.createElement("a",{className:"inlinea",href:"https://beerkay.github.io/"},"Professor Z. Berkay Celik")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Systematic review of side-channel attack papers from top-tier conferences and related works"),l.a.createElement("li",null," Categorize findings including threat model, attack senario, device, and mitigation techniques"),l.a.createElement("li",null," Contributed to the design of user study to investigate user awareness of attacks and defences ")))),l.a.createElement(C.TimelineItem,{key:"000",dateText:"Sepetmber 2021 - November 2021",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Closed-Loop Precision Animal Agriculture"),l.a.createElement("p",{className:"timeline-mysubtitle"},"Undergraduate Research Assistant, Collaborative Robotics Lab, Purdue University ",l.a.createElement("br",null)," Advised by ",l.a.createElement("a",{className:"inlinea",href:"https://web.ics.purdue.edu/~rvoyles/"},"Professor Richard M. Voyles")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Implemented and evaluated N-SIP, NLMS, and Fixed Interval algorithms for data compression"),l.a.createElement("li",null," Programmed devices to upload sensor values to dashboard on ThingsBoard via MQTT"),l.a.createElement("li",null," Co-Authored paper submitted to ACM/IEEE International Conference on Cyber-Physical System")))),l.a.createElement(C.TimelineItem,{key:"002",dateText:"May 2021 - September 2021",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Robotic Operating System Malware Dataset and Detection"),l.a.createElement("p",{className:"timeline-mysubtitle"},"Undergraduate Research Assistant, Collaborative Robotics Lab, Purdue University; ",l.a.createElement("br",null)," Advised by ",l.a.createElement("a",{className:"inlinea",href:"https://web.ics.purdue.edu/~rvoyles/"},"Professor Richard M. Voyles")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Implemented and evaluated CNN, ANN, LSTM, and hybrid models in PyTorch "),l.a.createElement("li",null," Achieved 85% accuracy in binary malware detection "),l.a.createElement("li",null," Proposed segmentation method to reduce input size from 18 Mb to 2 Kb  "),l.a.createElement("li",null," Co-Authored paper accepted to IEEE International Conference on Robotic Computing (IRC)  ")))),l.a.createElement(C.TimelineItem,{key:"003",dateText:"January 2020 - May 2021",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Prerequisite Course Recommendation Model"),l.a.createElement("p",{className:"timeline-mysubtitle"},l.a.createElement("a",{className:"inlinea",href:"https://datamine.purdue.edu/"},"The Data Mine"),", Purdue University ",l.a.createElement("br",null)," Advised by Dr. David Nelson"),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Aim to improve prerequisite course arrangement at Purdue from mining grades and text data "),l.a.createElement("li",null," Computed dependency between concepts using semantic knowledge from Wikipedia link "),l.a.createElement("li",null," Implemented BERT-based classifier and achieved 0.71 AUC in predicting course relation "),l.a.createElement("li",null," Presented at Purdue Journal of Undergraduate Research (PJUR) ")))),l.a.createElement(C.TimelineItem,{key:"004",dateText:"September 2019 - May 2020",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Semantic Network of Kitchen Things"),l.a.createElement("p",{className:"timeline-mysubtitle"},"Undergraduate Research Assistant, Collaborative Robotics Lab, Purdue University ",l.a.createElement("br",null)," Advised by ",l.a.createElement("a",{className:"inlinea",href:"https://web.ics.purdue.edu/~rvoyles/"},"Professor Richard M. Voyles")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Designed ontology and SWRL rules to dispatch tasks and detect cooking activities "),l.a.createElement("li",null," Enhanced sensing capabilities of food containers by integrating YOLOv3 for food detection "),l.a.createElement("li",null," Implemented ontology reasoning with OWL API, controller service on AWS, virtual appliances in Python and Java"),l.a.createElement("li",null," Co-Authored paper submitted to IEEE Internet of Things Journal ")))),l.a.createElement(C.TimelineItem,{key:"005",dateText:"September 2019 - May 2020",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Structured Prediction of Web Protocols Documents"),l.a.createElement("p",{className:"timeline-mysubtitle"},"Undergraduate Research Assistant, The NLP Group, Purdue University, Purdue University ",l.a.createElement("br",null)," Advised by advised by ",l.a.createElement("a",{className:"inlinea",href:"https://www.cs.purdue.edu/homes/dgoldwas/"},"Professor Dan Goldwasser")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Applied supervised learning to extract structured rules from web protocol documents "),l.a.createElement("li",null," Implemented and evaluated LSTM-based model for sequence labeling with PyTorch "),l.a.createElement("li",null," Improved performance by integrating POS tags, domain-specific word2vec, chunk-level Bi-LSTM ")))),l.a.createElement(C.TimelineItem,{key:"006",dateText:"October 2018 - September 2019",dateInnerStyle:{color:"var(--text-color)",background:"var(--theme-color)"}},l.a.createElement("div",{className:"timeline-card"},l.a.createElement("h4",{className:"timeline-mytitle"},"Smart Multi-Sensory Food Container"),l.a.createElement("p",{className:"timeline-mysubtitle"},"Undergraduate Research Assistant, Collaborative Robotics Lab, Purdue University ",l.a.createElement("br",null)," Advised by ",l.a.createElement("a",{className:"inlinea",href:"https://web.ics.purdue.edu/~rvoyles/"},"Professor Richard M. Voyles")),l.a.createElement("br",null),l.a.createElement("ul",{className:"timeline-list"},l.a.createElement("li",null," Created Android app from scratch, implemented user interfaces and Bluetooth Low Engeergy (BLE) communication "),l.a.createElement("li",null," Built voice service with Alexa Skills Kit and data communication with AWS over MQTT protoco; "),l.a.createElement("li",null," Presented at Purdue Undergraduate Research Conference ")))))),l.a.createElement(y,null))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",(function(e){window.history.pushState(null,document.title,window.location.href)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"condiv"},l.a.createElement("h2",null," Honors and Awards "),l.a.createElement("h3",null,l.a.createElement("ul",null,l.a.createElement("li",null," Computer Science Honors Program, Purdue University; January 2019 - Present "),l.a.createElement("li",null," College of Science Alumni Summer Research Fellowship, Purdue University; May 2021 "),l.a.createElement("li",null," Summer Stay Scholars Scholarship, Purdue University; May 2020 "),l.a.createElement("li",null," Best-Over-All Award at Hello World hackathon, Purdue University; October 2018 "),l.a.createElement("li",null," Dean\u2019s List and Semester Honors, Purdue University; All Semesters "))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component);var D=function(){return l.a.createElement(c.a,{basename:""},l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(P,null)),l.a.createElement(o.a,{path:"/about"},l.a.createElement(w,null)),l.a.createElement(o.a,{path:"/education"},l.a.createElement(A,null)),l.a.createElement(o.a,{path:"/teaching"},l.a.createElement(I,null)),l.a.createElement(o.a,{path:"/skills"},l.a.createElement(M,null)),l.a.createElement(o.a,{path:"/research"},l.a.createElement(j,null)),l.a.createElement(o.a,{path:"/publication"},l.a.createElement(f,null)),l.a.createElement(o.a,{path:"/honors"},l.a.createElement(x,null)),l.a.createElement(o.a,{path:"/contact"},l.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.23c605fc.chunk.js.map