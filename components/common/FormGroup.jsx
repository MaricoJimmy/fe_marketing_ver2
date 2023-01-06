import React from 'react';

function FormGroup({ label, ...rest }) {
    return (
        <>
            <label className='mb-3 block text-base font-medium'>{label}</label>
            <Input {...rest} />
        </>
    )
}

function Input({ register, name, className = "", ...rest }) {
    if (!register) {
        return <input
            {...rest}
            name={name}
            className={`${className} px-4 py-3 w-full min-w-[250px] md:min-w-[330px] lg:min-w-[350px] text-sm font-semibold border border-gray/20 outline-none rounded-md`}
        />
    } else {
        return <input
            {...register(name)}
            {...rest}
            name={name}
            className={`${className} px-4 py-3 w-full md:min-w-[350px] text-sm font-semibold border border-gray/20 outline-none rounded-md`}
        />
    }
}

export default FormGroup