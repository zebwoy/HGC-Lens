import React, { useState, useEffect } from 'react';
import './PriceChecker.css';

const PLATFORMS = [
  { value: 'xbox', label: 'XBOX' },
  { value: 'ps4', label: 'PS4' },
  { value: 'pc', label: 'PC' },
];

const TIME_OPTIONS = [
  { value: 0.5, label: 'Half an hour' },
  { value: 1, label: '1 hour' },
  { value: 1.5, label: '1 and a half hours' },
  { value: 2, label: '2 hours' },
  { value: 2.5, label: '2 and a half hours' },
  { value: 3, label: '3 hours' },
  { value: 3.5, label: '3 and a half hours' },
  { value: 4, label: '4 hours' },
  { value: 4.5, label: '4 and a half hours' },
  { value: 5, label: '5 hours' },
  { value: 5.5, label: '5 and a half hours' },
  { value: 6, label: '6 hours' },
  { value: 6.5, label: '6 and a half hours' },
  { value: 7, label: '7 hours' },
  { value: 7.5, label: '7 and a half hours' },
  { value: 8, label: '8 hours' },
];

const CONTROLLER_OPTIONS = [1, 2, 3, 4, 5, 6];

const RATES = {
  xbox: { hour: 100, half: 75 },
  ps4: { hour: 80, half: 55 },
  pc: { hour: 70, half: 50 },
};

const PriceChecker: React.FC = () => {
  const [platform, setPlatform] = useState('xbox');
  const [controllers, setControllers] = useState(1); // for xbox/ps4
  const [pcController, setPcController] = useState(false); // for pc
  const [time, setTime] = useState(1); // in hours
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [priceBreakdown, setPriceBreakdown] = useState({
    basePrice: 0,
    controllerCharges: 0,
    personCharges: 0,
    total: 0
  });

  // Calculate price based on form data
  useEffect(() => {
    const rates = RATES[platform as keyof typeof RATES];
    let basePrice = 0;
    let controllerCharges = 0;
    let personCharges = 0;

    // Calculate base price based on time
    if (time === 0.5) {
      basePrice = rates.half;
    } else {
      // For full hours and half hours
      const fullHours = Math.floor(time);
      const hasHalfHour = time % 1 !== 0;
      
      basePrice = fullHours * rates.hour;
      if (hasHalfHour) {
        basePrice += rates.half;
      }
    }

    // Calculate controller charges
    if (platform === 'xbox' || platform === 'ps4') {
      controllerCharges = controllers * 25; // ₹25 per controller
      if (controllers > 2) {
        personCharges = (controllers - 2) * 20; // ₹20 per person for 3rd controller onwards
      }
    } else if (platform === 'pc' && pcController) {
      controllerCharges = 25; // ₹25 for PC controller
    }

    const total = basePrice + controllerCharges + personCharges;

    setPriceBreakdown({
      basePrice,
      controllerCharges,
      personCharges,
      total
    });
    setCalculatedPrice(total);
  }, [platform, controllers, pcController, time]);

  return (
    <div className="price-checker">
      <div className="price-checker-header">
        <h2>🎮 Price Checker</h2>
        <p>Calculate your gaming session cost</p>
      </div>
      <div className="price-checker-content">
        <div className="form-section">
          <h3>Platform</h3>
          <div className="form-group">
            <label htmlFor="platform">On what do you want to play?</label>
            <select
              id="platform"
              value={platform}
              onChange={e => setPlatform(e.target.value)}
            >
              {PLATFORMS.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>

        {platform === 'xbox' || platform === 'ps4' ? (
          <div className="form-section">
            <h3>Controllers</h3>
            <div className="form-group">
              <label htmlFor="controllers">How many controllers are needed?</label>
              <select
                id="controllers"
                value={controllers}
                onChange={e => setControllers(Number(e.target.value))}
              >
                {CONTROLLER_OPTIONS.map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div className="form-section">
            <h3>Controller</h3>
            <div className="form-group">
              <label htmlFor="pcController">
                <input
                  type="checkbox"
                  id="pcController"
                  checked={pcController}
                  onChange={e => setPcController(e.target.checked)}
                />
                Controller needed?
              </label>
              <div className="form-note">Only one controller can be used per PC session.</div>
            </div>
          </div>
        )}

        <div className="form-section">
          <h3>Time</h3>
          <div className="form-group">
            <label htmlFor="time">How much time?</label>
            <select
              id="time"
              value={time}
              onChange={e => setTime(Number(e.target.value))}
            >
              {TIME_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="price-result">
          <div className="price-breakdown">
            <h3>Price Breakdown</h3>
            <div className="breakdown-item">
              <span>Platform:</span>
              <span>{PLATFORMS.find(p => p.value === platform)?.label}</span>
            </div>
            <div className="breakdown-item">
              <span>Time:</span>
              <span>{TIME_OPTIONS.find(opt => opt.value === time)?.label}</span>
            </div>
            {platform === 'xbox' || platform === 'ps4' ? (
              <div className="breakdown-item">
                <span>Controllers:</span>
                <span>{controllers}</span>
              </div>
            ) : (
              <div className="breakdown-item">
                <span>Controller needed:</span>
                <span>{pcController ? 'Yes' : 'No'}</span>
              </div>
            )}
            <div className="breakdown-item">
              <span>Base Price:</span>
              <span>₹{priceBreakdown.basePrice}</span>
            </div>
            {priceBreakdown.controllerCharges > 0 && (
              <div className="breakdown-item">
                <span>Controller Charges:</span>
                <span>₹{priceBreakdown.controllerCharges}</span>
              </div>
            )}
            {priceBreakdown.personCharges > 0 && (
              <div className="breakdown-item">
                <span>Person Charges (3rd+ controller):</span>
                <span>₹{priceBreakdown.personCharges}</span>
              </div>
            )}
            <div className="breakdown-item total">
              <span>Total:</span>
              <span>₹{calculatedPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceChecker; 