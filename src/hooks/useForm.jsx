import { useState } from "react"


/* hook para conseguir informacion del formulario */

export const useForm = (objetoInit = {}) =>{

    const [formulario, setFormulario] = useState(objetoInit)


    const serializarFormulario = (formulario) =>{

        const formData = new FormData(formulario)

        const objetoCompleto = {};

        for (let [name, value] of formData) {
            objetoCompleto[name] = value
        }

        return objetoCompleto

    }

    const enviar = (e) =>{
        e.preventDefault()

        let dataForms = serializarFormulario(e.target)

        setFormulario(dataForms)

    }

    const cambiado = ({target}) =>{
        const {name, value} = target


        setFormulario(
            {
                ...formulario,
                [name]:value
            }
        )

        console.log(formulario);

    }

    return {
        formulario,
        enviar,
        cambiado,
    }

}