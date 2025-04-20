import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import { ProductModel } from '../Models/ProductModel'
import { Divider } from '@mui/material'
import Status from './Status'
import { MdClose, MdDone } from 'react-icons/md'

type ProductViewModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void,
    product: ProductModel,
    isAvilable: boolean
}

export default function ProductViewModal(modalProps: ProductViewModalProps) {
    const productProps = { ...modalProps.product }

    function handleClickClose() {
        modalProps.setIsModalOpen(false);
    }

    return (
        <Dialog open={modalProps.isModalOpen} as="div" className="relative z-10 focus:outline-none" onClose={handleClickClose} __demoMode>
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-lg p-6 backdrop-blur-2xl duration-300 shadow-xl transition-all ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-white">

                        {productProps.image ? (
                            <div>
                                <img src={productProps.image} alt={productProps.productName} />
                            </div>
                        ) : (<></>)}

                        <DialogTitle as="h3" className="text-base/7 font-medium text-slate-800 mb-1">
                            {productProps.productName}
                        </DialogTitle>

                        <p className="mt-3 text-sm/6 text-slate-800">
                            {productProps.productDescription}
                        </p>

                        <Divider />

                        <div className='flex items-center justify-between'>
                            {productProps.productSpecialPrice ? (
                                <div className='flex flex-col'>
                                    <span className='text-gray-400 line-through'>
                                        ${Number(productProps.productPrice).toFixed(2)}
                                    </span>

                                    <span className='text-gray-800 font-bold'>
                                        ${Number(productProps.productSpecialPrice).toFixed(2)}
                                    </span>
                                </div>) : (

                                <div className='flex flex-col'>
                                    <span className='text-gray-800 text-lx font-bold'>
                                        ${Number(productProps.productPrice).toFixed(2)}
                                    </span>
                                </div>
                            )}
                           
                            <span className='mt-1.5'>
                                {modalProps.isAvilable ? (
                                    <Status
                                        text="In Stock"
                                        icon={<MdDone />}
                                        bg='bg-teal-200'
                                        color='text-teal-900'
                                    />
                                ) : (
                                    <Status
                                        text="Out of Stock"
                                        icon={<MdClose />}
                                        bg='bg-rose-200'
                                        color='text-rose-900'
                                    />
                                )}
                            </span>
                            
                        </div>

                        <div className="mt-4">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                onClick={handleClickClose}>

                                {modalProps.isAvilable ? "Added to Cart !" : "Close"}
                            </Button>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
