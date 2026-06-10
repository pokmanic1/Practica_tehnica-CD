import bgImage from '../../img/img-index/img-index-bg-1.svg'
import { ButonColorat, ButonSur } from "../utilitati/butoane.jsx";

function Index() {
    let a = '/Practica/img/img-index/img-index-bg-1.svg'
    return (
        <>
                <section
                    className="min-w-[375px] min-h-dvh h-dvh w-full flex items-center justify-center text-white bg-cover bg-right   bg-no-repeat"
                    style={{ backgroundImage: `url(${bgImage})` }}>

                    <div className='h-full w-full flex justify-center items-center md:w-[50%] md:mr-auto border  border-black '>
                        <div className='border border-red-400 w-[60%] md:w-[100%] text-center flex items-center justify-center flex-col gap-8 '>
                            <h1 className='text-[30px] md:text-[36px] md:bg-transparent bg-gray-100 md:text-[40px] lg:text-[48px] px-[10px] text-black '>TITLE</h1>
                            <p className='text-[16px] text-black md:bg-transparent bg-gray-100 px-[10px]'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique corporis distinctio eaque doloribus tempora libero excepturi enim veritatis est in provident hic aspernatur,</span><span className='md:flex hidden'> dolores esse dolorem amet rem, expedita neque cumque ut culpa! Quis voluptas, laboriosam doloribus reprehenderit dolores necessitatibus similique ut, consequuntur vel optio nisi, consequatur ea obcaecati!</span></p>

                            <div className=' flex w-full justify-center items-center gap-3'>

                                <div className='md:flex hidden'><ButonColorat title='Progameazate la o consultatie' /></div>
                                <div className=' flex md:hidden'><ButonColorat title='Programeazata' /></div>
                                 <div><ButonSur title ='aaaaaaaaaaa'/></div>

                            </div>
                        </div>
                    </div>

                </section>
        </>
    );
}

export default Index;