import ilustracion1 from '../../../../assets/ilustracion/ilustracion1.png'


const Illustration = () => {
  return (
    <div className="w-full flex justify-start pl-6 md:pl-20">
      <img
        src={ilustracion1}
        alt="Ilustración"
        className="max-w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  )
}

export default Illustration
