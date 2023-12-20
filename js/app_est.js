console.log("elementos vue");
console.log(Vue);

/*  DECLARACION DE ESTUDIANTES */
const estudiantes = [
  { nombre: 'Willan', apellido: 'Diaz', edad: 25 },
  { nombre: 'Luis', apellido: 'Paredes', edad: 20 },
  { nombre: 'Maria', apellido: 'Loor', edad: 22 },
  { nombre: 'Emilia', apellido: 'Quevedo', edad: 23 }
]
console.table(estudiantes)

const app = Vue.createApp({

  /*OPTIONS API */
  methods: {
    agregarEstudiante(){
      console.log('Agregando Estudiante')
      this.lista.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad}) 
      console.log(this.nombre)
    },
  },


  watch: {},


  data() {
    return {
      lista:      estudiantes,
      nombre:     undefined,
      apellido:   undefined,
      edad:       undefined
    };
  },
});
app.mount("#myForm");
