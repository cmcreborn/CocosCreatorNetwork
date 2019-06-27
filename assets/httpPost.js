// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        postUri: {
            default: null,
            type: cc.EditBox
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        console.log('start...')
        // this.sendXHRAB()
        // this.sendXHRABC()
        // for(var i = 0; i <1000; i++)
        // {
        //     this.sendXHRABC()
        // }
    },

    // update (dt) {},

    sendXHRAB (uri) {
        console.log("sendXHRAB... uri = " + uri);
        var xhr = cc.loader.getXMLHttpRequest();
        var cocosDataJsonObj = {
            "test": "cocos creator",
            "test2": "cocos creator",
            "test3": {
                "key1": "cocos creator",
                "key2": "cocos creator"
            }
        }
        xhr.open("POST", uri);
        //set Content-type "text/plain" to post ArrayBuffer or ArrayBufferView
        xhr.setRequestHeader("Content-Type","application/json");
        // Uint8Array is an ArrayBufferView
        // xhr.send(new Uint8Array([1,2,3,4,5]));
        console.log(cocosDataJsonObj);
        var cocosDataJsonString=JSON.stringify(cocosDataJsonObj)
        console.log(cocosDataJsonString)
        xhr.send(cocosDataJsonString);
        
    },

    sendXHRABC (uri) {
        console.log("sendXHRABC... uri = " + uri);
        var xhr = cc.loader.getXMLHttpRequest();
        var cocosDataJsonObj = {"BetInfo":{"event":true,"LineNum":"8","LineBet":"1","BetBalanceRate":"1","BetCreditRate":"1","BetCredit":8},"PayTotal":10,"BetTotal":8,"Credit":499992,"WagersID":"310616168187","hasAllCards":false,"Bell3Times":5,"Cherry3Times":1,"Star97_A7":{"1:1":4512.98},"Star97_AB":{"1:1":4683.98},"Star97_AE":{"1:1":1574.86},"isAllCardsJackpot":false,"hasError":false,"Cards":["4","6","5","7","3","2","7","4","4"],"hasScatter":false,"hasFreeGame":false,"hasLine":true,"Lines":[{"LineID":4,"GridNum":3,"Grids":["1","5","9"],"Payoff":10,"Element":["4","3","4"],"ElementID":"4","Grid":["1","5","9"]}],"LinePayoff":10,"isHitJackpot":false}
        xhr.open("POST", uri);
        //set Content-type "text/plain" to post ArrayBuffer or ArrayBufferView
        xhr.setRequestHeader("Content-Type","application/json");
        // Uint8Array is an ArrayBufferView
        // xhr.send(new Uint8Array([1,2,3,4,5]));
        console.log(cocosDataJsonObj);
        var cocosDataJsonString=JSON.stringify(cocosDataJsonObj)
        console.log(cocosDataJsonString)
        xhr.send(cocosDataJsonString);
        
    },

    sendBtn () {
        console.log("sendBtn click");
        var postUri = this.postUri.string;
        console.log("postUri = " + postUri);
        sendXHRABC(postUri);
    }
});
