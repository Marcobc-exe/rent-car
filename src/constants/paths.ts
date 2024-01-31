type pathsProps = {
  id: string;
  to: string;
  name: string;
}

const paths: pathsProps[] = [
  {
    id: "formulario",
    to: "/formulario",
    name: "Formulario"
  },
  {
    id: "listaFormulario",
    to: "/listaFormulario",
    name: "Lista formulario"
  }
];

export { paths }