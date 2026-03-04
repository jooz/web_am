import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-20 min-h-[60vh] text-center'>
                <h1 className='text-4xl font-bold text-brand-dark mb-4 uppercase'>Municipio Miranda</h1>
                <div className='text-gray-600 max-w-2xl mx-auto space-y-6'>
                    <div>
                        <h2 className='text-xl font-semibold text-brand-dark mb-2'>Orígenes e Identidad Indígena</h2>
                        <p>Antes de la llegada de los españoles, el territorio estaba poblado por dos naciones principales: los Caquetíos en las llanuras y costas, y los Jirajaras en las montañas.</p>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-dark mb-2'>La Nación Caquetía</h3>
                        <p>Descritos como nobles, pacíficos y de gran estatura. Eran expertos agricultores que desarrollaron sistemas de riego avanzados, como el "buco" (dique) en los márgenes del río Coro para conducir agua a sus cultivos.</p>
                    </div>

                    <div>
                        <h4 className='text-md font-medium text-brand-dark mb-1'>Liderazgo</h4>
                        <p>El Gran Diao Manaure era el jefe máximo de los Caquetíos, considerado casi un dios por su pueblo.</p>
                    </div>

                    <div>
                        <h4 className='text-md font-medium text-brand-dark mb-1'>Etimología</h4>
                        <p>El nombre "Coro" proviene de un vocablo arahuaco que significa "lugar del viento".</p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-brand-dark mb-2'>Fundación y Periodo Colonial</h2>
                        <p>Coro es reconocida como la ciudad más antigua de Venezuela.</p>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-dark mb-2'>Fundación de hecho</h3>
                        <p>Atribuida a Juan de Ampiés Ávila el 26 de julio de 1527. Se denominó Santa Ana de Coro por coincidir con el día de esa santa en el calendario católico.</p>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-dark mb-2'>Pacto de Alianza</h3>
                        <p>A diferencia de otras conquistas violentas, la fundación de Coro se basó en un pacto de paz y respeto mutuo entre Juan de Ampiés y el Diao Manaure.</p>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-dark mb-2'>Hitos Religiosos</h3>
                        <p>Se celebró la primera misa en tierra firme del continente americano junto a la Cruz de San Clemente, fabricada con madera de cují. En 1531, el Papa Clemente VII la elevó a Sede Episcopal, siendo la primera diócesis de Sudamérica.</p>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-brand-dark mb-2'>Evolución Político-Administrativa</h2>
                        <p>La ciudad ha desempeñado un papel central en la estructura del país:</p>
                    </div>

                    <div className='ml-4'>
                        <ul className='list-disc list-inside space-y-1'>
                            <li><strong>Capitalidad:</strong> Fue la capital de la Provincia de Venezuela hasta 1815.</li>
                            <li><strong>Autonomía:</strong> En 1818 obtuvo su autonomía al crearse la Provincia de Coro.</li>
                            <li><strong>Federalismo:</strong> Con la llegada del Gobierno Federal, se organizó como el Estado Coro, el cual pasó a llamarse Estado Falcón en 1874.</li>
                            <li><strong>Patrimonio Mundial:</strong> Debido a su arquitectura colonial construida con tecnología de barro, la UNESCO incluyó a Coro como Patrimonio Cultural Mundial el 9 de diciembre de 1993.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-brand-dark mb-2'>Hitos Educativos y Culturales</h2>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-dark mb-2'>Educación</h3>
                        <p>En 1833 se creó el Colegio Nacional de Coro bajo el gobierno de José Antonio Páez, institución de la que egresaron figuras como Juan Crisóstomo Falcón.</p>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-dark mb-2'>Tradiciones</h3>
                        <p>El dulce de leche se destaca como una tradición de identidad cultural y fuente de economía local.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
