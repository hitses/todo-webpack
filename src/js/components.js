import '../css/components.css'
// import webpackLogo from '../assets/img/webpack-logo.png'

export const hello = () => {
  // Comienza a modificar tu app desde este punto.
  // Puedes borrar el código que hay a continuación.
  const h1 = document.createElement('h1')
  h1.innerText = '¡Hola! \n Aquí puedes comenzar a crear tu aplicación'

  document.body.append(h1)

  // const img = document.createElement('img')
  // img.src = webpackLogo
  // document.body.append(img)
}