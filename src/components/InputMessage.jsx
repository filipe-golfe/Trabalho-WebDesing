import React from "react";

const InputMessage = () => {
  return (
    <div class="row">
    <div id="chat" class="col">
      <div class="np-input-text--value_holder">
        <input
          class="pl-4 np-input-text--value"
          type="text"
          placeholder="Mensagem"
        />
      <div class="np-input-text--button">Enviar</div>
      </div>
    </div>
  </div>
  );
};

export default InputMessage;