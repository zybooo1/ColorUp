window.__require=function e(n,t,r){function i(c,a){if(!t[c]){if(!n[c]){var s=c.split("/");if(s=s[s.length-1],!n[s]){var d="function"==typeof __require&&__require;if(!a&&d)return d(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+c+"'")}}var u=t[c]={exports:{}};n[c][0].call(u.exports,function(e){return i(n[c][1][e]||e)},u,u.exports,e,n,t,r)}return t[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<r.length;c++)i(r[c]);return i}({enter:[function(e,n,t){"use strict";cc._RF.push(n,"09cd06FlAFG1JHqGTKyplpb","enter"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var e=this;e._getUserCloudStorage(),wx.onMessage(function(n){if(n)switch(n.type){case"userInfo":window.userInfo=n.userInfo;break;case"updateScore":e._updateScore(n.score);break;case"showFriendTopRanking":e._showFriendTopRanking();break;case"showFriendRanking":e._showFriendRanking()}})},start:function(){},update:function(e){},_getUserCloudStorage:function(){wx.getUserCloudStorage({keyList:["score"],success:function(e){cc.log(e),window.userScore=e.KVDataList[0]?e.KVDataList[0].value:0},fail:function(e){cc.error(e),window.userScore=0}})},_updateScore:function(e){e<=window.userScore||wx.setUserCloudStorage({KVDataList:[{key:"score",value:e.toString()}],success:function(e){cc.log(e)},fail:function(e){cc.error(e)}})},_showFriendTopRanking:function(){cc.director.loadScene("FriendTopRanking")},_showFriendRanking:function(){cc.director.loadScene("FriendRanking")}}),cc._RF.pop()},{}],friendItem:[function(e,n,t){"use strict";cc._RF.push(n,"79732Esbf1Dh7iDkVgNeqRd","friendItem"),cc.Class({extends:cc.Component,properties:{rankLabel:{type:cc.Label,default:null},avatarSprite:{type:cc.Sprite,default:null},nicknameLabel:{type:cc.Label,default:null},scoreLabel:{type:cc.Label,default:null}},onLoad:function(){},start:function(){},update:function(e){},showFriendInfo:function(e,n){var t=this;this.rankLabel.string=e.toString(),cc.loader.load({url:n.avatarUrl,type:"png"},function(e,n){e?cc.error(e):t.avatarSprite.spriteFrame=new cc.SpriteFrame(n)}.bind(this)),this.nicknameLabel.string=n.nickName?n.nickName:n.nickname,this.scoreLabel.string=n.KVDataList[0].value}}),cc._RF.pop()},{}],friendRanking:[function(e,n,t){"use strict";cc._RF.push(n,"3d3c96Aa5BNi5eG3uQkyfyZ","friendRanking"),cc.Class({extends:cc.Component,properties:{friendRankingItemPrefab:{type:cc.Prefab,default:null},scrollViewContentNode:{type:cc.Node,default:null},currentUserInfoNode:{type:cc.Node,default:null}},onLoad:function(){var e=this;wx.getFriendCloudStorage({keyList:["score"],success:function(n){cc.log(n);for(var t=n.data,r=0;r<t.length;r++){var i=cc.instantiate(e.friendRankingItemPrefab);e.scrollViewContentNode.addChild(i),i.getComponent("friendItem").showFriendInfo(r+1,t[r]),t[r].openid==window.userInfo.openId&&e.currentUserInfoNode.getComponent("friendItem").showFriendInfo(r+1,t[r])}}.bind(this),fail:function(e){cc.error(e)}})},start:function(){},update:function(e){}}),cc._RF.pop()},{}],friendTopRanking:[function(e,n,t){"use strict";cc._RF.push(n,"ddfffXKAkdFuKXi3EW8X5ep","friendTopRanking"),cc.Class({extends:cc.Component,properties:{firstFriendItem:{type:e("friendItem"),default:null},secondFriendItem:{type:e("friendItem"),default:null},thirdFriendItem:{type:e("friendItem"),default:null}},onLoad:function(){var e=this;wx.getFriendCloudStorage({keyList:["score"],success:function(n){var t=n.data;t.length>=1&&(e.firstFriendItem.node.active=!0,e.firstFriendItem.showFriendInfo(1,t[0])),t.length>=2&&(e.secondFriendItem.node.active=!0,e.secondFriendItem.showFriendInfo(2,t[1])),t.length>=3&&(e.thirdFriendItem.node.active=!0,e.thirdFriendItem.showFriendInfo(3,t[2]))}.bind(this),fail:function(e){cc.error(e)}})},start:function(){},update:function(e){}}),cc._RF.pop()},{friendItem:"friendItem"}]},{},["enter","friendItem","friendRanking","friendTopRanking"]);