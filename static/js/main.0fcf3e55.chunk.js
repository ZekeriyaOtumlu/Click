(this.webpackJsonpclickygameapp=this.webpackJsonpclickygameapp||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"./images/The_Great_Gatsby7.jpg"},{"id":2,"image":"./images/Frankenstein1.jpg"},{"id":3,"image":"./images/1984.1.jpg"},{"id":4,"image":"./images/Dice man1.jpg"},{"id":5,"image":"./images/Origin1.jpg"},{"id":6,"image":"./images/Chess1.jpg"},{"id":7,"image":"./images/when-nietzsche-wept1.jpg"},{"id":8,"image":"./images/KaramazovBr1.jpg"},{"id":9,"image":"./images/KiteRunner1.jpg"},{"id":10,"image":"./images/Tale-Two-Cities-Charles-Dickens1.jpg"},{"id":11,"image":"./images/anna-karenina1.jpg"},{"id":12,"image":"./images/Ayn Rand1.jpg"}]')},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(3),o=t.n(s),r=(t(14),t(4)),c=t(5),l=t(7),m=t(6),g=t(8),u=(t(15),t(1)),d=(t(16),function(e){return n.a.createElement("div",{className:"card img-container hover"},n.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),h=(t(17),function(e){return n.a.createElement("div",{className:"gameScore"},n.a.createElement("h3",{className:"score"},"Your Score : ",e.total),n.a.createElement("h3",{className:"status"},e.status))}),p=(t(18),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={books:u,clickedBooksId:[],score:0,goal:12,status:""},t.shuffleScoreCard=function(e){var a=t.state.clickedBooksId;if(a.includes(e))t.setState({clickedBooksId:[],score:0,status:"Sorry!!! You Lost. Click to Play Again!!!"});else{if(a.push(e),12===a.length)return t.setState({score:12,status:"Congratulations!!! You Won!!!. Click to Play Again!!!",clickedBooksId:[]}),void console.log("You Win");t.setState({books:u,clickedBooksId:a,score:a.length,status:" "});for(var i=u.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),s=[u[n],u[i]];u[i]=s[0],u[n]=s[1]}}},t}return Object(g.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Clicky Game"),n.a.createElement("p",{className:"App-intro"},"Try not to click the same image twice!")),n.a.createElement(h,{total:this.state.score,goal:12,status:this.state.status}),n.a.createElement(p,null,this.state.books.map((function(a){return n.a.createElement(d,{shuffleScoreCard:e.shuffleScoreCard,id:a.id,key:a.id,image:a.image})}))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0fcf3e55.chunk.js.map