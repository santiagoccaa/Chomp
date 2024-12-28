'use client'

import ChomContext from "@/context/ChomContext";
import { useContext } from "react";

export const useShop = () => {
    return useContext(ChomContext)
}
