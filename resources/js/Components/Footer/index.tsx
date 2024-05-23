import moment from "moment"

const Footer = () => {
  return (
    <footer className="md:bg-gray-50 bg-megb-blue-primary md:h-8 h-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 md:w-auto md:text-left w-full text-center text-xs text-gray-50 md:text-gray-500">
            Copyright © {moment().format('YYYY')}&copy; - Empresa . Todos os direitos reservados.
          </div>
          <div className="px-4 md:w-auto md:text-left w-full text-center text-sm">
            <a href="https://megb.com.br" target="_blank" rel="noopener noreferrer" title='Dsenvolvido por MEGB'>
              <span className='text-xs font-bold md:text-gray-500 text-megb-yellow-secundary drop-shadow-md'>MEGB</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;