import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate()
    function navigation() {
        navigate('/login')
    }
    navigation()
    return (
        <div>
            Payment Acknowledgement!
        </div>
    );
}
export default Payment;