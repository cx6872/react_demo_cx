import "./styles.css";
import React from "react";
import Toolbar from "./Toolbar";
// import button from "./button";
import CountContext from "./contextt";
import ParentComponent from "./ParentComponent";
import Pcompoment from "./crosscomponent/Pcompoment";
const request = require("ajax-request");
class App extends React.Component {
  state = { count: 0 };

  /**
   * 传入参数 n，表示这个函数执行的时间（毫秒）
   * 执行的结果是 n + 200，这个值将用于下一步骤
   */
  takeLongTime = (n) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(n + 200), n);
    });
  };

  step1 = (n) => {
    console.log(`step1 with ${n}`);
    return this.takeLongTime(n);
  };

  step2 = (n) => {
    console.log(`step2 with ${n}`);
    return this.takeLongTime(n);
  };

  step3 = (n) => {
    console.log(`step3 with ${n}`);
    return this.takeLongTime(n);
  };
  testPromise = () => {
    console.time("doIt");
    const time1 = 300;
    this.step1(time1)
      .then((time2) => this.step2(time2))
      .then((time3) => this.step3(time3))
      .then((result) => {
        console.log(`result is ${result}`);
        console.timeEnd("doIt");
      });
  };

  testAsyncaWait = async () => {
    console.time("doIt");
    const time1 = 300;
    const time2 = await this.step1(time1);
    const time3 = await this.step2(time2);
    const result = await this.step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
  };

  doSomethingAsync = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("I did something"), 3000);
    });
  };

  doSomething = async () => {
    console.log(await this.doSomethingAsync());
  };

  testasyncwait = () => {
    console.log("Before");
    this.doSomething();
    console.log("After");
  };

  getJSON = function (url, param) {
    var promise = new Promise(function (resolve, reject) {
      var request = require("ajax-request");
      request({ url: url, data: param }, function (err, res, body) {
        if (!err && res.statusCode === 200) {
          resolve(body);
        } else {
          reject(new Error(err));
        }
      });
    });
    return promise;
  };
  testaw = () => {
    // this.getJSON("http://localhost:17061/iplatform-ruleeditor/HttpService", {
    //   header: {
    //     action: "LoadTree.load",
    //     userId: "chenxu@cyberobject.com.cn",
    //     ip: "test.ip",
    //     requestId: "test.request",
    //     requestTime: 0
    //   },
    //   body: {
    //     nodeId: "Y3liZXJvYmplY3QvamVycnlfYXBw",
    //     nodeType: "",
    //     fileid: "",
    //     id: "",
    //     channelid: "fxqaohwep7nf7qo8cc46z3kh6h",
    //     mmtoken: "4nd5qqe357be9c1rjprrc1eitc"
    //   }
    // }).then((result) => {
    //   console.log(result);
    // });
    request(
      {
        url: "https://www.baidu.com/",
        method: "GET",
        data: {
          query1: "value1"
        }
      },
      function (err, res, body) {
        console.log(err);
        console.log(res);
        console.log(body);
      }
    );
  };

  componentDidMount() {
    console.log("App componentDidMount");
  }
  // shouldComponentUpdate() {
  //   console.log("App shouldComponentUpdate");
  // }
  // componentDidUpdate() {
  //   console.log("App componentDidUpdate");
  // }
  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }
  render() {
    console.log("app render");
    return (
      <CountContext.Provider value={this.state.count}>
        <div>
          {/* promise: */}
          <div>
          <button onClick={this.testPromise}>testPromise</button>
        </div>

          {/* async wait: */}
          {/* <div>
          <button onClick={this.testAsyncaWait}>testasyncawait</button>
        </div> */}

          {/* <div>
          <button onClick={this.testasyncwait}>async wait demo</button>
        </div> */}

          {/* access data failed */}
          {/* <div>
          <button onClick={this.testaw}>testaw</button>
        </div> */}

          {/*************************************/}
          {/* 父子组件通信: */}
          <ParentComponent></ParentComponent>

          {/*************************************/}
          {/* context实现跨组件 组件通信: */}
          <Pcompoment />

          {/*************************************/}
          {/* 基于react context实现跨组件 组件通信: */}
          <Toolbar />
          <button
            onClick={() =>
              this.setState((state) => ({ count: state.count + 1 }))
            }
          >
            更新
          </button>
        </div>
      </CountContext.Provider>
    );
  }
}
export default App;
