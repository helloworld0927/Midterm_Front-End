(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(t,e,a){},38:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},50:function(t,e,a){},52:function(t,e,a){},61:function(t,e,a){},62:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),d=a(5),s=a(6),l=a(8),o=a(7),u=(a(37),a(38),a(9)),p=a(15),j=a(3),b=a(4),h=a.n(b),O=a(14),v=(a(47),a(48),a(49),a(21)),g=(a(50),a(1)),f=function(t){var e=t.handleSave,a=t.saveLabel,n=t.handleDelete,r=t.handleCancel;return Object(g.jsxs)("div",{className:"Edit-Buttons",children:[Object(g.jsx)("div",{tabIndex:"0",className:"Edit-Button",style:{backgroundColor:"#5aac44"},onClick:e,children:a}),n&&Object(g.jsx)("div",{tabIndex:"0",className:"Edit-Button",style:{backgroundColor:"#ff5c5c",marginLeft:0},onClick:n,children:"Delete"}),Object(g.jsx)("div",{tabIndex:"0",className:"Edit-Button-Cancel",onClick:r,children:Object(g.jsx)("ion-icon",{name:"close"})})]})},x=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={text:t.props.text||""},t.handleChangeText=function(e){return t.setState({text:e.target.value})},t.onEnter=function(e){var a=t.state.text;13===e.keyCode&&(e.preventDefault(),t.props.onSave(a))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state.text,e=this.props,a=e.onSave,n=e.onCancel,r=e.onDelete,i=e.adding;return Object(g.jsxs)("div",{className:"Edit-Card",children:[Object(g.jsx)("div",{className:"Card",children:Object(g.jsx)(v.a,{autoFocus:!0,className:"Edit-Card-Textarea",placeholder:"Enter text...",value:t,onChange:this.handleChangeText,onKeyDown:this.onEnter})}),Object(g.jsx)(f,{handleSave:function(){return a(t)},saveLabel:i?"Add card":"Save",handleDelete:r,handleCancel:n})]})}}]),a}(n.Component),y=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={hover:!1,editing:!1},t.startHover=function(){return t.setState({hover:!0})},t.endHover=function(){return t.setState({hover:!1})},t.startEditing=function(){return t.setState({hover:!1,editing:!0,text:t.props.card.text})},t.endEditing=function(){return t.setState({hover:!1,editing:!1})},t.editCard=function(){var e=Object(O.a)(h.a.mark((function e(a){var n,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.props,r=n.card,i=n.dispatch,t.endEditing(),i({type:"CHANGE_CARD_TEXT",payload:{cardId:r._id,cardText:a}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteCard=Object(O.a)(h.a.mark((function e(){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.listId,r=a.card,(0,a.dispatch)({type:"DELETE_CARD",payload:{cardId:r._id,listId:n}});case 2:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.card,n=e.index,r=this.state,i=r.hover;return r.editing?Object(g.jsx)(x,{text:a.text,onSave:this.editCard,onDelete:this.deleteCard,onCancel:this.endEditing}):Object(g.jsx)(p.b,{draggableId:a._id,index:n,children:function(e,n){return Object(g.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:"Card",onMouseEnter:t.startHover,onMouseLeave:t.endHover,children:[i&&Object(g.jsx)("div",{className:"Card-Icons",children:Object(g.jsx)("div",{className:"Card-Icon",onClick:t.startEditing,children:Object(g.jsx)("ion-icon",{name:"create"})})}),a.text]}))}})}}]),a}(n.Component),C=Object(u.b)((function(t,e){return{card:t.cardsById[e.cardId]}}))(y),I=(a(52),function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).ref=r.a.createRef(),t.onEnter=function(e){13===e.keyCode&&(e.preventDefault(),t.props.saveList())},t.handleClick=function(e){t.ref.current.contains(e.target)||t.props.onClickOutside()},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"render",value:function(){var t=this.props,e=t.title,a=t.handleChangeTitle,n=t.deleteList;return Object(g.jsxs)("div",{className:"List-Title-Edit",ref:this.ref,children:[Object(g.jsx)(v.a,{autoFocus:!0,className:"List-Title-Textarea",placeholder:"Enter list title...",value:e,onChange:a,onKeyDown:this.onEnter,style:{width:n?220:245}}),n&&Object(g.jsx)("ion-icon",{name:"trash",onClick:n})]})}}]),a}(n.Component)),L=a(12),T=a.n(L),m=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={editingTitle:!1,title:t.props.list.title,addingCard:!1},t.toggleAddingCard=function(){return t.setState({addingCard:!t.state.addingCard})},t.addCard=function(){var e=Object(O.a)(h.a.mark((function e(a){var n,r,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.props,r=n.listId,i=n.dispatch,t.toggleAddingCard(),c=T.a.generate(),i({type:"ADD_CARD",payload:{cardText:a,cardId:c,listId:r}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.toggleEditingTitle=function(){return t.setState({editingTitle:!t.state.editingTitle})},t.handleChangeTitle=function(e){return t.setState({title:e.target.value})},t.editListTitle=Object(O.a)(h.a.mark((function e(){var a,n,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.listId,r=a.dispatch,i=t.state.title,t.toggleEditingTitle(),r({type:"CHANGE_LIST_TITLE",payload:{listId:n,listTitle:i}});case 4:case"end":return e.stop()}}),e)}))),t.deleteList=Object(O.a)(h.a.mark((function e(){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.listId,r=a.list,(0,a.dispatch)({type:"DELETE_LIST",payload:{listId:n,cards:r.cards}});case 2:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.list,n=e.index,r=this.state,i=r.editingTitle,c=r.addingCard,d=r.title;return Object(g.jsx)(p.b,{draggableId:a._id,index:n,children:function(e,n){return Object(g.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:"List",children:[i?Object(g.jsx)(I,{list:a,title:d,handleChangeTitle:t.handleChangeTitle,saveList:t.editListTitle,onClickOutside:t.editListTitle,deleteList:t.deleteList}):Object(g.jsx)("div",{className:"List-Title",onClick:t.toggleEditingTitle,children:a.title}),Object(g.jsx)(p.c,{droppableId:a._id,children:function(t,e){return Object(g.jsxs)("div",{ref:t.innerRef,children:[a.cards&&a.cards.map((function(t,e){return Object(g.jsx)(C,{cardId:t,index:e,listId:a._id},t)})),t.placeholder]})}}),c?Object(g.jsx)(x,{onSave:t.addCard,onCancel:t.toggleAddingCard,adding:!0}):Object(g.jsxs)("div",{className:"Toggle-Add-Card",onClick:t.toggleAddingCard,children:[Object(g.jsx)("ion-icon",{name:"add"})," Add a card"]})]}))}})}}]),a}(n.Component),E=Object(u.b)((function(t,e){return{list:t.listsById[e.listId]}}))(m),A=(a(61),function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.handleChangeTitle=function(e){return t.setState({title:e.target.value})},t.createList=Object(O.a)(h.a.mark((function e(){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("click1"),a=t.state.title,n=t.props.dispatch,t.props.toggleAddingList(),n({type:"ADD_LIST",payload:{listId:T.a.generate(),listTitle:a}});case 5:case"end":return e.stop()}}),e)}))),t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.toggleAddingList,e=this.state.title;return Object(g.jsxs)("div",{className:"Add-List-Editor",children:[Object(g.jsx)(I,{title:e,handleChangeTitle:this.handleChangeTitle,onClickOutside:t,saveList:this.createList}),Object(g.jsx)(f,{handleSave:this.createList,saveLabel:"Add list",handleCancel:t})]})}}]),a}(n.Component)),D=Object(u.b)()(A),k=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={addingList:!1},t.toggleAddingList=function(){return t.setState({addingList:!t.state.addingList})},t.handleDragEnd=function(e){var a=e.source,n=e.destination,r=e.type;if(n){var i=t.props.dispatch;"COLUMN"!==r?a.index===n.index&&a.droppableId===n.droppableId||i({type:"MOVE_CARD",payload:{sourceListId:a.droppableId,destListId:n.droppableId,oldCardIndex:a.index,newCardIndex:n.index}}):a.index!==n.index&&i({type:"MOVE_LIST",payload:{oldListIndex:a.index,newListIndex:n.index}})}},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props.board,a=this.state.addingList;return Object(g.jsx)(p.a,{onDragEnd:this.handleDragEnd,children:Object(g.jsx)(p.c,{droppableId:"board",direction:"horizontal",type:"COLUMN",children:function(n,r){return Object(g.jsxs)("div",{className:"Board",ref:n.innerRef,children:[e.lists.map((function(t,e){return Object(g.jsx)(E,{listId:t,index:e},t)})),n.placeholder,Object(g.jsx)("div",{className:"Add-List",children:a?Object(g.jsx)(D,{toggleAddingList:t.toggleAddingList}):Object(g.jsxs)("div",{onClick:t.toggleAddingList,className:"Add-List-Button",children:[Object(g.jsx)("ion-icon",{name:"add"})," Add a list..."]})})]})}})})}}]),a}(n.Component),S=Object(u.b)((function(t){return{board:t.board}}))(k),_=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{className:"Header",children:"\u5c71\u5be8 Trello"}),Object(g.jsx)(S,{})]})}}]),a}(n.Component),w=a(27),N=a(28),R=a(10),B=a(22),H=a(26),M=a(11),G=a(32),J=a.n(G),P=Object(M.c)({board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lists:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":var a=e.payload.listId;return{lists:[].concat(Object(H.a)(t.lists),[a])};case"MOVE_LIST":var n=e.payload,r=n.oldListIndex,i=n.newListIndex,c=Array.from(t.lists),d=c.splice(r,1),s=Object(B.a)(d,1),l=s[0];return c.splice(i,0,l),{lists:c};case"DELETE_LIST":var o=e.payload.listId,u=function(t){return t!==o},p=t.lists.filter(u);return{lists:p};default:return t}},listsById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":var a=e.payload,n=a.listId,r=a.listTitle;return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},n,{_id:n,title:r,cards:[]}));case"CHANGE_LIST_TITLE":var i=e.payload,c=i.listId,d=i.listTitle;return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},c,Object(j.a)(Object(j.a)({},t[c]),{},{title:d})));case"DELETE_LIST":var s=e.payload.listId,l=(t[s],Object(w.a)(t,[s].map(N.a)));return l;case"ADD_CARD":var o=e.payload,u=o.listId,p=o.cardId;return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},u,Object(j.a)(Object(j.a)({},t[u]),{},{cards:[].concat(Object(H.a)(t[u].cards),[p])})));case"MOVE_CARD":var b,h=e.payload,O=h.oldCardIndex,v=h.newCardIndex,g=h.sourceListId,f=h.destListId;if(g===f){var x=Array.from(t[g].cards),y=x.splice(O,1),C=Object(B.a)(y,1),I=C[0];return x.splice(v,0,I),Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},g,Object(j.a)(Object(j.a)({},t[g]),{},{cards:x})))}var L=Array.from(t[g].cards),T=L.splice(O,1),m=Object(B.a)(T,1),E=m[0],A=Array.from(t[f].cards);return A.splice(v,0,E),Object(j.a)(Object(j.a)({},t),{},(b={},Object(R.a)(b,g,Object(j.a)(Object(j.a)({},t[g]),{},{cards:L})),Object(R.a)(b,f,Object(j.a)(Object(j.a)({},t[f]),{},{cards:A})),b));case"DELETE_CARD":var D=e.payload,k=D.cardId,S=D.listId,_=function(t){return t!==k};return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},S,Object(j.a)(Object(j.a)({},t[S]),{},{cards:t[S].cards.filter(_)})));default:return t}},cardsById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CARD":var a=e.payload,n=a.cardText,r=a.cardId;return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},r,{text:n,_id:r}));case"CHANGE_CARD_TEXT":var i=e.payload,c=i.cardText,d=i.cardId;return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},d,Object(j.a)(Object(j.a)({},t[d]),{},{text:c})));case"DELETE_CARD":var s=e.payload.cardId,l=(t[s],Object(w.a)(t,[s].map(N.a)));return l;case"DELETE_LIST":var o=e.payload.cards;return Object.keys(t).filter((function(t){return!o.includes(t)})).reduce((function(e,a){return Object(j.a)(Object(j.a)({},e),{},Object(R.a)({},a,t[a]))}),{});default:return t}}}),V=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),U=Object(M.e)(P,V);U.subscribe(J()((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(a){}}(U.getState())}),1e3)),console.log(U.getState()),U.getState().board.lists.length||(console.log("SEED"),function(t){console.log("Insert first list");var e=T.a.generate();t.dispatch({type:"ADD_LIST",payload:{listId:e,listTitle:"List 1"}}),t.dispatch({type:"ADD_CARD",payload:{listId:e,cardId:T.a.generate(),cardText:"Card 1"}}),t.dispatch({type:"ADD_CARD",payload:{listId:e,cardId:T.a.generate(),cardText:"Card 2"}}),console.log("Insert second list");var a=T.a.generate();t.dispatch({type:"ADD_LIST",payload:{listId:a,listTitle:"List 2"}}),t.dispatch({type:"ADD_CARD",payload:{listId:a,cardId:T.a.generate(),cardText:"Card 1"}}),t.dispatch({type:"ADD_CARD",payload:{listId:a,cardId:T.a.generate(),cardText:"Card 2"}})}(U));var W=U;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);var F=document.getElementById("root");c.a.render(Object(g.jsx)(u.a,{store:W,children:Object(g.jsx)(_,{})}),F),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.91ce6f68.chunk.js.map