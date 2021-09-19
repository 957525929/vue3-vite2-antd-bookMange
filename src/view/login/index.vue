<template>
  <div class="LoginPage">
    <div class="LoginBox">
      <div class="LoginTitle">后台管理系统</div>
      <div class="Account">
        <a-form :model="account">
          <a-form-item>
            <a-input
              v-model:value="account.username"
              placeholder="请输入用户名"
            />
            <div class="AccountImg">&nbsp;</div>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="account.password"
              type="password"
              placeholder="请输入密码"
            />
            <div class="AccountImg">&nbsp;</div>
          </a-form-item>
        </a-form>
      </div>
      <div class="LoginBtn">
        <a-button @click="toLogin">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
//路由
import router from "@/router/index";
//token
import { saveToken } from "@/util/token";
//登录接口
import { login } from "@/api/api";

export default {
  setup() {
    const account = reactive({
      username: "root",
      password: "123456",
    });

    //登录按钮
    const toLogin = async () => {
      if (account.username === "") {
        message.error("请输入用户名");
      } else if (account.password === "") {
        message.error("请输入密码");
      } else {
        let { username, password } = account;
        let result = await login({ username, password });
        if (result.status === 200) {
          message.success("登录成功");
          //存token
          let { access_token, refresh_token } = result.data;
          saveToken(access_token, refresh_token);
          //路由跳转
          router.push("/home");
          console.log(router);
        }
      }
    };

    return {
      account,
      toLogin,
    };
  },
};
</script>

<style lang="less" scoped>
.LoginPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //背景图片
  background-image: url("http://121.199.35.37:9001/img/login-ba.e412cb44.png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: center;

  .LoginBox {
    width: 25%;
    // height: 25%;

    .LoginTitle {
      padding-left: 30px;
      font-weight: bold;
      color: #8c98ae;
      font-size: 20px;
      margin-bottom: 40px;
    }

    .AccountImg {
      background-image: url("http://121.199.35.37:9001/img/nickname.93a6d6f0.png");
      background-repeat: no-repeat;
      background-position: 0 100%;
    }

    ::v-deep {
      .ant-input {
        padding-left: 30px;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid rgba(0, 0, 0, 0);
        color: #c4c9d2;
      }
    }

    .LoginBtn {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      //背景图片
      background-image: url("http://121.199.35.37:9001/img/login-btn.1ecd4d9c.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: bottom;
      background-size: 100%;

      ::v-deep {
        .ant-btn {
          padding-left: 30px;
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid rgba(0, 0, 0, 0);
          color: #c4c9d2;
          width: 100%;
          text-align: start;
        }
      }
    }
  }
}
</style>
