"use client"

import { LiaListAlt } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa6";
import { useShop } from "@/hooks/useChomp";

export const Step = () => {
    const {handlePrev, handleNext, currentStep} = useShop()

    const steps = [
        { id: 1, title: "Confirma tu Pedido", icon:<LiaListAlt size={30} />},
        { id: 2, title: "Método de Pago", icon:<BsCashCoin size={30} /> },
        { id: 3, title: "Envío", icon:<FaMotorcycle size={30} /> },
    ];

    return (
        <>
            <div className="flex justify-between items-center mb-6 h-20">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`flex-1 text-center px-2 py-1 border-b-4 ${step.id <= currentStep ? "border-primary" : "border-gray-300"
                            } ${step.id === currentStep ? "font-bold text-primary" : "text-gray-500"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center">
                            {step.icon}
                            {step.title}
                        </div>
                        
                    </div>
                ))}
            </div>

            <div className="flex justify-between absolute bottom-0 left-0 w-full p-4">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="px-4 py-2 bg-gray-300 font-medium text-gray-700 rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length}
                    className="px-4 py-2 bg-primary font-medium text-white rounded disabled:opacity-50"
                >
                    Siguiente
                </button>
            </div>
        </>
    );
}

