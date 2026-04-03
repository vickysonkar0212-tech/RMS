import axios from "axios";
import { useEffect, useState } from "react";

const RazorpayPayment = () => {
    
  const [isRazorpayLoaded, setRazorpayLoaded] = useState(false);



  useEffect(() => {
    setRazorpayLoaded(true)
    // const script = document.createElement("script");
    // script.src = "https://checkout.razorpay.com/v1/checkout.js";
    // script.onload = () => setRazorpayLoaded(true);
    // script.onerror = () => console.error("Failed to load Razorpay script");
    // document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!isRazorpayLoaded) {
      alert("Razorpay is not loaded yet.");
      return;
    }

    try {
      const orderResponse = await axios.post("http://127.0.0.1:5000/payment/create", {
        amount: 500,
        currency: "INR",
        description: "Test UPI Payment"
      });

      const { orderId, amount, currency } = orderResponse.data;
      const key = "rzp_test_FZPF0vXhVTEh1p";
      const options = {
        key: key,
        amount: amount * 100,
        currency,
        name: "My Shop",
        description: "Product Purchase",
        order_id: orderId,
        handler: async function (response) {
          const verifyRes = await axios.post("http://127.0.0.1:5000/payment/verifyorder", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          });


          if (verifyRes.data.status) {
            alert("✅ Payment Verified!");
          } else {
            alert("❌ Payment Verification Failed!");
          }
        },
        method: {
          upi: true
        },
        // prefill: {
        //   name: "Alice",
        //   email: "alice@example.com",
        //   contact: "9876543210"
        // },
        theme: {
          color: "#3399cc"
        }
      };

    const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <button onClick={handlePayment} disabled={!isRazorpayLoaded}>
        {isRazorpayLoaded ? "Pay ₹500" : "Loading..."}
      </button>
    </div>
  );
};

export default RazorpayPayment;
