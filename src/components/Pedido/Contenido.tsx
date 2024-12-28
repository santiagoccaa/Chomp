'use client'
import { useShop } from "@/hooks/useChomp";
import { CartPedido } from "./CartPedido";
import { MetodoPago } from "./MetodoPago";

export const Contenido = () => {

    const { currentStep } = useShop()

    const renderContent = () => {
        switch (currentStep) {
            case 1:
                return <CartPedido />;
            case 2:
                return <MetodoPago />;
            case 3:
                return <p>Proporciona la información para el envío.</p>;
            default:
                return null;
        }
    };
    return (
        <div>
            {renderContent()}
        </div>
    )
}

