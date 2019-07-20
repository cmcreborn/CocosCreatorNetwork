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
        },
        logScrollView: {
            default: null,
            type: cc.ScrollView
        },
        logScrollViewMsg: {
            default: null,
            type: cc.Label
        },
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
    // },
   
    start() {
        console.log('start...');
        this.postUri.string = "http://localhost:3000/info";
        
    },

    // update (dt) {},

    sendXHRJ(uri) {
        console.log("sendXHRJ... uri = " + uri);
        var that = this;
        
        var xhr = cc.loader.getXMLHttpRequest();
        var cocosDataJsonObj = {"key":"value", "key2":{"objK":"objvalue"}, "key3":["a","2"]};
        xhr.open("POST", uri);
        //set Content-type "text/plain" to post ArrayBuffer or ArrayBufferView
        xhr.setRequestHeader("Content-Type", "application/json");
        // Uint8Array is an ArrayBufferView
        // xhr.send(new Uint8Array([1,2,3,4,5]));
        console.log(cocosDataJsonObj);
        var cocosDataJsonString = JSON.stringify(cocosDataJsonObj)
        console.log(cocosDataJsonString)
        xhr.send(cocosDataJsonString);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);
                that.logScrollViewMsg.string += response;
            }
        };
    },

    sendBtn() {
        console.log("sendBtn click");
        var postUri = this.postUri.string;
        console.log("postUri = " + postUri);
        this.sendXHRJ(postUri);
    },

    sendBtnTimes () {
        console.log("sendBtnTimes...");
        var times = 100;
        var that = this;
        for(var i = 0; i <= times; i++){
            that.sendXHRJ(that.postUri.string);
        }
    },

});
