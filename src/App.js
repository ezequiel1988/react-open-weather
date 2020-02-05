import React from "react";
import "./App.css";
import "react-open-weather/lib/css/ReactWeather.css";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";

const App = inject("store")(observer(props => {
  
  let getTemp = () => {
      props.store.getData();
      props.store.getDat5Days();
    };

    let changeData = e => {
      props.store.ciudad = e.target.value;
    };

    const { dataWeather, dataWeather5Days, ciudad } = props.store;

    return (
      <div className="App">

      <div className='App-title'>
        Bienvenido a FibertelWeather, desea consultar el clima?
      </div>
        <input type="text" value={ciudad} onChange={e => changeData(e)} />
        <button type="button" onClick={() => getTemp()}>
          Enviar
        </button>

        <div style={{ margin: "10px" }}>
          {dataWeather == null ? (
            `Por favor ingrese la ciudad que desea consultar`
          ) : (
            <div>
              Temperatura actual es de {Math.ceil(dataWeather.main.temp)} °C
            </div>
          )}
        </div>

        <div>
          Temperatura en los proximos 5 días:
          {dataWeather5Days == null
            ? " Esperando que ingrese la ciudad..."
            : dataWeather5Days.list.map((el, i) => {
                return (
                  <div key={i}>
                    {Math.ceil(el.main.temp)}°C
                  </div>
                );
              })}
        </div>
      </div>
    );
  })
);

export default App;
