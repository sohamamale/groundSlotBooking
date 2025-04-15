import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Nav from "./nav"

function Timings() {
    const bookedSlots = [10, 11, 15]; // hardcoded booked slots
  
    const timeSlots = Array.from({ length: 11 }, (_, i) => i + 8); // 8 to 18
  
    return (
      <div style={{ padding: '20px' }}>
        <h2>Lawn Ground - Available Time Slots</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {timeSlots.map((hour) => (
            <div
              key={hour}
              style={{
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: bookedSlots.includes(hour) ? '#f87171' : '#86efac',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {hour}:00 - {hour + 1}:00 <br />
              {bookedSlots.includes(hour) ? 'Booked' : 'Available'}
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default Timings;
