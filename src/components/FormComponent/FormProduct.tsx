import { Form } from "react-bootstrap";

export const FormProduct = () =>{
  
    const {handleChange, value, resetForm} = useForm(
        {
            nombre:'',
            imagen:'',
            precio: 0
        
        });
    
    console.log(value);
    return (
        <Form className="p-4 border rounded m-3">
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text"
                    name="nombre"
                    placeholder="Ingrese nombre producto"
                    value={values.nombre}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formNombre">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                    type="text"
                    name="imagen"
                    placeholder="Ingrese imagen del producto"
                    value={values.imagen}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formNombre">
                <Form.Label>Precio</Form.Label>
                <Form.Control 
                    type="number"
                    name="precio"
                    placeholder="Ingrese precio del producto"
                    value={values.precio}
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    )
}

function useForm(arg0: { nombre: string; imagen: string; precio: number }): { handleChange: any; value: any; resetForm: any } {
    throw new Error("Function not implemented.")
}
