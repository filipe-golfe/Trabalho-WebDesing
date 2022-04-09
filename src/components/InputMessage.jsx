import React from "react";

const InputMessage = () => {
  return (
    <div className="row">
      <div id="chat" className="col">
        <div className="np-input-text--value_holder">
          <input
            className="pl-4 np-input-text--value"
            type="text"
            placeholder="Mensagem"
          />
          <div className="np-input-text--button">Enviar</div>
        </div>
      </div>
    </div>
  );
};

export default InputMessage;
