import React from 'react'
import Title from '../common/Title'
import InfoClientForm from './InfoClientForm'

function FormDemo({ isPMSPage }) {
    return (
        <div className='mt-16 md:mt-32'>
            <div className={`w-full flex justify-center items-center ${isPMSPage && "bg-orange-primary/20" || "bg-green-primary/20"}`}>
                <div className='px-8 py-16 max-w-screen-xl w-full'>
                    <div className='grid grid-cols-12 gap-6 md:gap-10'>
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
                            <div className='w-full'>
                                <Title
                                    label="Yêu cầu Demo"
                                    className='bg-blue-primary'
                                />
                                <p className='mt-6 text-xl text-gray/80 text-justify font-medium'>Với mục tiêu cùng đồng hành với nhà máy để hiện đại hóa sản xuất công nghiệp, Pambu sẽ hỗ trợ khách hàng sử dụng demo <span className='font-bold'>MIỄN PHÍ</span>.</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <InfoClientForm isPMSPage={isPMSPage} productType={isPMSPage && "pms" || "oee"} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormDemo