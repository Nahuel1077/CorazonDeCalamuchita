'use client'
import Image from "next/image"

export default function Contacto(){

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div className="flex flex-col sm:flex-row gap-8 p-20% items-center justify-center h-[80vh]" id="contacto">
            <div className="flex flex-col gap-20 p-8 items-center">
                <h2 className="text-3xl">Contactanos</h2>
                <p className="text-center">Seguinos en nuestras redes sociales para saber más</p>
                <div className="flex flex-row gap-4">
                    <div className="rounded-4xl border-0 bg-blue-600 w-[50px] h-[50px] flex flex-col justify-center items-center">
                        <Image
                        src="/logos/facebook-brands.svg"
                        alt="facebook logo"
                        width={20}
                        height={20}
                        className=""
                        />
                    </div>
                <div className="flex flex-row gap-4">
                    <div className="rounded-4xl border-0 bg-linear-to-t from-violet-400 via-red-600 to-yellow-400 w-[50px] h-[50px] flex flex-col justify-center items-center">
                        <Image
                        src="/logos/instagram-brands.svg"
                        alt="instagram logo"
                        width={30}
                        height={30}
                        className=""
                        />
                    </div>
                    </div>
                <div className="flex flex-row gap-4">
                    <div className="rounded-4xl border-0 bg-green-600 w-[50px] h-[50px] flex flex-col justify-center items-center">
                        <Image
                        src="/logos/whatsapp-brands.svg"
                        alt="whatsapp logo"
                        width={30}
                        height={30}
                        className=""
                        />
                    </div>
                    </div>
                    
                    
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-full gap-10" action="https://formsubmit.co/general@criollos-solutions.com" method="POST">
                <input type="text" name="name" placeholder="Nombre" className="border-b-2 border-solid border-gray-500 w-[200px]"></input>
                <input type="email" name="email" placeholder="Email" className="border-b-2 border-solid border-gray-500 w-[200px]"></input>
                <textarea name="message" placeholder="Mensaje" className="border-b-2 border-solid border-gray-500 w-[200px]"></textarea>
                <input type="submit" value="Enviar" className="border-0 rounded-md bg-gray-400 w-[60px]"></input>
            </form>
        </div>
    )
}