<template>
  <div id="app">
    <div class="outline">
      <div class="line-out"></div>
      <div class="outline-l">
        <div class="logo">
          <h1 class="myName">
            ATHEM LIN
          </h1>
          <div class="logo-circle">
            <div class="circle g"></div><div class="circle r"></div><div class="circle w"></div>
          </div>
          <h1 class="todo">
            TODO
          </h1>
        </div>
        <div class="line line-l"></div><div class="line line-r"></div>
      </div>
      <div class="outline-r">
        <div class="content-box">
          <div class="tab">
            <div class="sub-tab" :class="{select:!checked}" @click="checkFlag(false)"><font-awesome-icon :icon="['fas','square']"/> TODO</div>
            <div class="sub-tab" style="text-decoration: line-through" :class="{select:checked}" @click="checkFlag(true)"><font-awesome-icon :icon="['fas','check-square']"/></i> DONE</div>
          </div>
          <list :isChecked="checked" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import list from '@/components/list'
export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    checkFlag(flag) {
      this.checked = flag
    }
  },
  components: {list},
}
</script>
<style lang="scss">
$red: #E2073A;
$dark-red: #6C1239;
$dark-green: #0A3D4D;
$green: #01B491;
$white: rgba(225, 225, 225, 0.4);
$vh: 100vh;
*{
  list-style: none;
  // border: 1px solid $white;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
body {
  background-image: linear-gradient(150deg,$red,$dark-red,$dark-green,$green);
  font-family: arial;
  height: 100%;
}
#app {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
}
.outline {
  text-align: center;
  display: flex;
  width: calc(100%);
  height: calc(100% - 10px);
  .outline-l {
    width: 50%;
    display: flex;
    .logo {
      margin: 0 auto;
      width: 300px;
      height: 130px;
      padding: 60px;
      margin-top: 200px;
      color: white;
      border: 1px solid $white;
      .myName {
        font-size: 29px;
        margin-top: 10px;
        margin-bottom: 0;
      }
      .logo-circle {
        display: flex;
        justify-content: space-around;
        padding-top: 6px;
        width: 50px;
        margin: 0 auto;
        .circle {
          width: 8px;
          height: 8px;
          border-radius: 10px;
        }
        .g {
          background-color: $green;
        }
        .r {
          background-color: $red;
        }
        .w {
          background-color: #fff;
        }
      }
      .todo {
        margin: 0;
        font-family: "Arial Black";
        font-size: 50px;
      }
    }
  }
  .outline-r {
    width: 40%;
    margin: 0 auto;
    font-family: "微軟正黑體";
    .content-box {
      padding-top: 50px;
      color: white;
      width: 100%;
      height: calc(100vh - 60px);
      .tab {
        font-size: 14px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        width: 80%;
        .sub-tab {
          width: 70px;
          height: 40px;
          line-height: 60px;
          color: $white;
          &:hover {
            cursor: pointer;
          }
        }
        .select {
          color: #fff;
          text-decoration: none;
          border-bottom: 5px solid $green;
        }
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .outline {
    text-align: center;
    display: block;
    top: 0px;
    bottom: 0px;
    position: relative;
    .line-out {
      position: absolute;
      border: 1px solid $white;
      top: 50px;
      border-top: 10px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -100;
    }
    .outline-l {
      width: 100%;
      display: block;
      align-items: none;
      .logo {
        width: 150px;
        height: auto;
        border: none;
        padding: 0;
        margin-top: 0;
        .myName {
          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 0;
        }
        .logo-circle {
          padding-top: 0;
          display: flex;
          justify-content: space-around;
          width: 30px;
          margin: 0 auto;
          .circle {
            width: 5px;
            height: 5px;
          }
        }
        .todo {
          font-size: 30px;
          line-height: 30px;
        }
      }
      .line {
        position: absolute;
        border: 1px solid $white;
        top: 50px;
      }
      .line-l {
        border-top: 1px;
        width: calc(30vw);
        right: 1px;
      }
      .line-r {
        border-top: 1px;
        width: 30vw;
        left: 1px;
      }
    }
    .outline-r {
      width: 100%;
      padding-top: 0;
      .content-box {
        padding-top: 0px;
        height: calc(100vh - 86px);
        .tab {
          .sub-tab {
            width: 65px;
            height: 40px;
            // color: $white;
          }
        }
      }
    }
  }
}
</style>
