import Button from "./Button";

export default {
    title: "components/Button",  //nombre
    component: Button,          //tipo de componente
    args: {
        children: "Button"      //propiedad de la story. Texto dentro del boton por defecto
    }
}

//funcion q recibe los args y devuelve el componente haciendo q los args pasen como propiedades

const Template = (args) => <Button {...args} />

//declaramos las historias

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    type: "tertiary",
}