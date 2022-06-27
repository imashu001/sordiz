import React from "react";
<<<<<<< HEAD


const Payment = () => {
=======
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate()
    function navigation() {
        navigate('/login')
    }
    navigation()
>>>>>>> 5537186ec2a83b99ae1eaf998a664a9db064016f
    return (
        <div>
            Payment Acknowledgement!
        </div>
    );
}
export default Payment;