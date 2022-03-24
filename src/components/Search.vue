<template>
  <div class="row">
    <div id="busca" class="col">
      <div class="np-input-text--value_holder">
        <input
          class="pl-4 np-input-text--value"
          type="text"
          placeholder="Pesquisar"
        />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.np-chat-container {
  width: 300px;
  height: 500px;
  position: relative;
  border: 1px solid #000000;
  padding: 12px;
  background: #080b10;
}

.np-chat-container--holder {
  height: 500px;
  overflow-y: auto;
}

.np-chat--text {
  width: 200px;
  font-size: 12px;
  letter-spacing: 0.4px;
  background: #eee;
  word-break: keep-all;
  margin: 15px 6px;
  padding: 15px 10px;
  border-radius: 6px;
  color: #fff;
  line-height: 1.4;
}

.np-chat--time {
  opacity: 0.7;
}

.np-chat--text_received {
  background: #005d4b;
  float: right;
}

.np-chat--text_sent {
  background: #1f2c34;
  float: left;
}

.np-input-text--value_holder {
  position: relative;
  // background: #080b10;
  width: 100%;
  height: 50px;
  bottom: 0px;
}

.np-input-text--value {
  padding: 6px 15px;
  width: 100%;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 30px;
  color: rgb(109, 109, 109);
  outline: none;
  transform: translateY(6px);
}

.np-input-text--button {
  color: rgb(163, 161, 161);
  position: relative;
  right: 12px;
  top: 12px;
  cursor: pointer;
}
</style>