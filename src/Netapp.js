import pic from "./logo.png";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from './3.png'
// import pic4 from'./fb.png';
function Netapp() {
  return (
    <>
    <div className="top-img">
    <img src={pic} alt="" />
    </div>
    <div className="trophy">
        <img src={pic1} alt="" />
        <div className="paragift" >
            <p><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
            <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                <img src={pic2} alt="" />
                <h3>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h3>
            </ul>
            
        </div>
    </div>
    <p><b>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</b> </p>
    <div className="mid">
        <img src={pic3} alt="" />
        <h3 className="item">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h3>
        <hr class="solid"></hr>
        <p className="end">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className="foods">CHEMICALS & PROCESS | POWER | WATER & WASTE | WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER PULP | MARINE & DEFENCE METAL | MINING FOOD & BEVERAGE</p>
    </div>
<div className="endFoot">
    <h3>📞Toll free 1800 200 1234</h3>
    <h3 >www.facebook.com/cripumps</h3>
    <h3 className="web">🌐 www.crigroups.com</h3>
</div>
    </>
  );
}

export default Netapp;
