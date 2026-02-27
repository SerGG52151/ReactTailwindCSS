type InfocardProps = {
  title: string
  description: string
  buttonText?: string
}

function Infocard({ title, description, buttonText = 'Learn More' }: InfocardProps) {
  return (
    <section className="bg-blue-50 rounded-lg shadow-md p-4 w-80 mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-500 text-indigo-500 px-4 py-2 rounded-md hover:bg-blue-600">
        {buttonText}
      </button>
    </section>
  )
}

export default Infocard