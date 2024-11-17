import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { ComponentCounter } from "./components/MiPrimerComponent/ComponentCounter";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"

export const App = () =>{
    
    return (
        <div style={{display: 'flex', flexDirection:'column', gap: "2vh"}}>
            {/* <MiPrimerComponent 
                text={"Texto desde propiedades"} 
                color="red" 
                fontSize={5}
            />
            <ComponentCounter />
            <ComponentUseEffect /> */}
            <FormComponent />
        </div>    
    );
};